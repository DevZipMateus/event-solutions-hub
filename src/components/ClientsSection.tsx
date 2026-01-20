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
    <section id="clientes" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">
            Nossos Clientes
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Empresas que confiam em nosso trabalho
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-4 sm:p-5 md:p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30 mb-3 sm:mb-4" />
              <blockquote className="text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1 mb-4 sm:mb-6">
                "{client.testimonial}"
              </blockquote>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold text-xs sm:text-sm">
                    {client.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-foreground text-xs sm:text-sm truncate">
                    {client.name}
                  </p>
                  <p className="text-muted-foreground text-[10px] sm:text-xs truncate">
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
