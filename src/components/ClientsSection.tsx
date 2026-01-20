import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface ClientTestimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  initials: string;
}

const ClientsSection = () => {
  const clients: ClientTestimonial[] = [
    {
      id: "ricardo",
      name: "Ricardo Mendes",
      role: "Diretor Executivo",
      company: "TechBrasil",
      testimonial:
        "A Confidence Eventos superou todas as nossas expectativas na organização do nosso evento corporativo anual. A atenção aos detalhes e o profissionalismo da equipe foram impressionantes.",
      initials: "RM",
    },
    {
      id: "carla",
      name: "Carla Oliveira",
      role: "Coord. Sustentabilidade",
      company: "EcoVerde",
      testimonial:
        "Contratamos a Confidence para nossa conferência de sustentabilidade e ficamos impressionados com o compromisso ambiental demonstrado em cada aspecto do evento.",
      initials: "CO",
    },
    {
      id: "fernando",
      name: "Fernando Almeida",
      role: "Gerente Mkt",
      company: "Assoc. Comercial",
      testimonial:
        "Nossa feira de negócios foi um sucesso absoluto graças à Confidence Eventos. Desde o planejamento inicial até a desmontagem, a equipe demonstrou excelência em cada etapa.",
      initials: "FA",
    },
    {
      id: "ana",
      name: "Dra. Ana Paula Santos",
      role: "Diretora",
      company: "ABM",
      testimonial:
        "A organização do nosso congresso médico pela Confidence foi impecável. A equipe cuidou de cada detalhe, desde a recepção até a coordenação das sessões paralelas.",
      initials: "AP",
    },
  ];

  return (
    <section id="clientes" className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas que confiam em nosso trabalho
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <blockquote className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                "{client.testimonial}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {client.initials}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {client.name}
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {client.role}, {client.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
