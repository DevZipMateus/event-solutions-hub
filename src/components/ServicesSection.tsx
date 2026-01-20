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
import ServiceImageCarousel from "./ServiceImageCarousel";

const services = [
  {
    icon: Sparkles,
    title: "Limpeza para Eventos",
    description: "Equipe especializada em limpeza e organização de espaços para eventos.",
    images: [
      "/limpeza/_WIL6100.JPG",
      "/limpeza/_WIL6106.JPG",
      "/limpeza/_WIL6111.JPG",
      "/limpeza/_WIL6114.JPG",
      "/limpeza/_WIL6119.JPG",
      "/limpeza/_WIL6121.JPG",
      "/limpeza/_WIL7422.JPG",
      "/limpeza/_WIL7431.JPG",
    ],
  },
  {
    icon: Flame,
    title: "Bombeiro Civil para Eventos",
    description: "Profissionais habilitados para garantir a segurança contra incêndios.",
    images: [
      "/bombeiro/_WIL6137.JPG",
      "/bombeiro/_WIL6140.JPG",
      "/bombeiro/_WIL6143.JPG",
      "/bombeiro/_WIL6145.JPG",
      "/bombeiro/_WIL6146.JPG",
      "/bombeiro/_WIL6151.JPG",
      "/bombeiro/_WIL7451.JPG",
      "/bombeiro/_WIL7454.JPG",
      "/bombeiro/_WIL7559.JPG",
      "/bombeiro/_WIL7561.JPG",
    ],
  },
  {
    icon: Package,
    title: "Carregadores para Eventos",
    description: "Equipe de carregadores para montagem e desmontagem de eventos.",
    images: [
      "/carregadores/_WIL7435.JPG",
      "/carregadores/_WIL7463.JPG",
      "/carregadores/_WIL7495.JPG",
    ],
  },
  {
    icon: Languages,
    title: "Tradutores para Eventos",
    description: "Tradutores e intérpretes para eventos internacionais.",
    images: [],
  },
  {
    icon: UserCheck,
    title: "Recepcionista para Eventos",
    description: "Recepcionistas treinadas para acolher seus convidados.",
    images: [
      "/recepcionista/_WIL6060.JPG",
      "/recepcionista/_WIL6064.JPG",
      "/recepcionista/_WIL7240.JPG",
      "/recepcionista/_WIL7244.JPG",
      "/recepcionista/_WIL7249.JPG",
      "/recepcionista/_WIL7250.JPG",
      "/recepcionista/_WIL7262.JPG",
      "/recepcionista/_WIL7295.JPG",
      "/recepcionista/_WIL7298.JPG",
      "/recepcionista/_WIL7299.JPG",
      "/recepcionista/_WIL7304.JPG",
      "/recepcionista/_WIL7305.JPG",
    ],
  },
  {
    icon: Shield,
    title: "Seguranças para Eventos",
    description: "Segurança privada qualificada para proteção do seu evento.",
    images: [
      "/seguranças/_WIL5980.JPG",
      "/seguranças/_WIL5986.JPG",
      "/seguranças/_WIL5995.JPG",
      "/seguranças/_WIL5997.JPG",
      "/seguranças/_WIL5998.JPG",
      "/seguranças/_WIL6008.JPG",
      "/seguranças/_WIL6009.JPG",
      "/seguranças/_WIL6010.JPG",
      "/seguranças/_WIL6013.JPG",
      "/seguranças/_WIL6014.JPG",
      "/seguranças/_WIL6016.JPG",
      "/seguranças/_WIL7365.JPG",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Garçons para Eventos",
    description: "Garçons profissionais para um atendimento impecável.",
    images: [
      "/buffet/IMG-20251205-WA0035.jpg",
      "/buffet/IMG-20251205-WA0036.jpg",
      "/buffet/IMG-20251205-WA0037.jpg",
      "/buffet/IMG-20251205-WA0038.jpg",
      "/buffet/IMG-20251205-WA0039.jpg",
      "/buffet/IMG-20251205-WA0040.jpg",
      "/buffet/IMG-20251205-WA0041.jpg",
      "/buffet/IMG-20251205-WA0042.jpg",
      "/buffet/IMG-20251205-WA0044.jpg",
      "/buffet/IMG-20251205-WA0045.jpg",
      "/buffet/IMG-20251205-WA0046.jpg",
      "/buffet/IMG-20251205-WA0047.jpg",
    ],
  },
  {
    icon: Users,
    title: "Staff para Eventos",
    description: "Equipe de apoio completa para todas as necessidades do evento.",
    images: [],
  },
  {
    icon: Building,
    title: "Locações para Eventos",
    description: "Espaços exclusivos para realizar seu evento com excelência.",
    images: [],
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
    <section id="servicos" className="py-20 md:py-28 bg-muted">
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
              className="group bg-card rounded-xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              {service.images.length > 0 ? (
                <ServiceImageCarousel images={service.images} alt={service.title} />
              ) : (
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
