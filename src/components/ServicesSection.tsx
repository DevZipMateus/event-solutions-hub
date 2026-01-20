import { motion } from "framer-motion";
import {
  Sparkles,
  Flame,
  Package,
  Languages,
  UserCheck,
  Shield,
  UtensilsCrossed,
  Users,
  Building,
} from "lucide-react";

// Import service images
import limpezaImg from "@/assets/services/limpeza.jpg";
import bombeirosImg from "@/assets/services/bombeiros.jpg";
import carregadoresImg from "@/assets/services/carregadores.jpg";
import tradutoresImg from "@/assets/services/tradutores.jpg";
import recepcionistasImg from "@/assets/services/recepcionistas.jpg";
import segurancasImg from "@/assets/services/segurancas.jpg";
import buffetImg from "@/assets/services/buffet.jpg";
import staffImg from "@/assets/services/staff.jpg";
import locacoesImg from "@/assets/services/locacoes.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Limpeza para Eventos",
    description: "Equipe especializada em limpeza e organização de espaços para eventos.",
    image: limpezaImg,
  },
  {
    icon: Flame,
    title: "Bombeiro Civil para Eventos",
    description: "Profissionais habilitados para garantir a segurança contra incêndios.",
    image: bombeirosImg,
  },
  {
    icon: Package,
    title: "Carregadores para Eventos",
    description: "Equipe de carregadores para montagem e desmontagem de eventos.",
    image: carregadoresImg,
  },
  {
    icon: Languages,
    title: "Tradutores para Eventos",
    description: "Tradutores e intérpretes para eventos internacionais.",
    image: tradutoresImg,
  },
  {
    icon: UserCheck,
    title: "Recepcionista para Eventos",
    description: "Recepcionistas treinadas para acolher seus convidados.",
    image: recepcionistasImg,
  },
  {
    icon: Shield,
    title: "Seguranças para Eventos",
    description: "Segurança privada qualificada para proteção do seu evento.",
    image: segurancasImg,
  },
  {
    icon: UtensilsCrossed,
    title: "Garçons para Eventos",
    description: "Garçons profissionais para um atendimento impecável.",
    image: buffetImg,
  },
  {
    icon: Users,
    title: "Staff para Eventos",
    description: "Equipe de apoio completa para todas as necessidades do evento.",
    image: staffImg,
  },
  {
    icon: Building,
    title: "Locações para Eventos",
    description: "Espaços exclusivos para realizar seu evento com excelência.",
    image: locacoesImg,
  },
];

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Nossos Principais Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas para tornar seu evento um sucesso absoluto
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
