import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendEmailRequest {
  nome: string;
  email: string;
  telefone?: string;
  celular?: string;
  mensagem: string;
  destinatario?: string;
}

serve(async (req: Request) => {
  console.log("Edge function send-contact-email invoked");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    console.log("Method not allowed:", req.method);
    return new Response(JSON.stringify({ error: "Método não permitido" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { nome, email, telefone, celular, mensagem, destinatario }: SendEmailRequest = await req.json();
    console.log("Request data received:", { nome, email, telefone, celular, mensagem: mensagem?.substring(0, 50) + "..." });

    // Validation
    if (!nome || !email || !mensagem) {
      console.log("Validation failed - missing required fields");
      return new Response(
        JSON.stringify({ error: "Nome, email e mensagem são obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailUser = Deno.env.get("EMAIL_USER");
    const emailPass = Deno.env.get("EMAIL_PASS");

    if (!emailUser || !emailPass) {
      console.error("Email credentials not configured");
      return new Response(
        JSON.stringify({ error: "Configuração de email não encontrada." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    console.log("Creating SMTP client for:", emailUser);

    const smtpClient = new SMTPClient({
      connection: {
        hostname: "smtp.hostinger.com",
        port: 465,
        tls: true,
        auth: {
          username: emailUser,
          password: emailPass,
        },
      },
    });

    const toAddress = destinatario || "comercial@confidenceeventos.com.br";
    console.log("Sending email to:", toAddress);

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1a1a2e; padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: #f1f1f1; margin: 0; font-size: 24px;">📩 Novo contato pelo site</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
          <p style="margin: 10px 0;"><strong>Nome:</strong> ${nome}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          ${telefone ? `<p style="margin: 10px 0;"><strong>Telefone:</strong> ${telefone}</p>` : ''}
          ${celular ? `<p style="margin: 10px 0;"><strong>Celular:</strong> ${celular}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Mensagem:</strong></p>
          <p style="margin: 10px 0; white-space: pre-wrap; background-color: #fff; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">${(mensagem || "").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>")}</p>
        </div>
        <p style="color: #888; font-size: 12px; text-align: center; margin-top: 20px;">
          Este email foi enviado através do formulário de contato do site Confidence Eventos.
        </p>
      </div>
    `;

    try {
      await smtpClient.send({
        from: `Formulário do Site <${emailUser}>`,
        to: toAddress,
        subject: `Novo contato de ${nome} pelo site`,
        html,
        replyTo: email,
      });

      console.log("Email sent successfully via SMTP Hostinger to:", toAddress);
      await smtpClient.close();
    } catch (smtpError: any) {
      console.error("SMTP Error:", smtpError.message || smtpError);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ message: "Email enviado com sucesso!" }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err: any) {
    console.error("Error in send-contact-email function:", err.message || err);
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar a solicitação." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
