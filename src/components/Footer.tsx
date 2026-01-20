import { MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo_confidence.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Logo */}
          <div>
            <img
              src={logo}
              alt="Confidence Eventos"
              className="h-14 w-auto brightness-0 invert mb-6"
            />
            <p className="text-primary-foreground/70 max-w-sm">
              Transformando eventos em experiências memoráveis há mais de uma década.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <h3 className="text-xl font-semibold text-primary-foreground mb-6">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 md:justify-end">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0 md:order-2" />
                <address className="text-primary-foreground/80 not-italic md:text-right">
                  Av. Vieira de Morais, 2110
                  <br />
                  Conjunto 916, São Paulo - SP
                  <br />
                  04.617-007
                </address>
              </div>

              <div className="flex items-center gap-3 md:justify-end">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 md:order-2" />
                <a
                  href="mailto:comercial@confidenceeventos.com.br"
                  className="text-primary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  comercial@confidenceeventos.com.br
                </a>
              </div>

              <div className="flex items-center gap-3 md:justify-end">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 md:order-2" />
                <a
                  href="tel:+551123641135"
                  className="text-primary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  +55 (11) 2364-1135
                </a>
              </div>

              <div className="flex items-center gap-3 md:justify-end">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 md:order-2" />
                <a
                  href="tel:+5511999857035"
                  className="text-primary-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  +55 (11) 9 9985-7035
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Confidence Eventos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
