import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/lib/services-data";
import servicesPerson from "@/assets/services-person.png";

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
    <section id="servicos" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-muted overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-3 md:mb-4">
            Nossos Principais Serviços
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto px-4">
            Oferecemos soluções completas para tornar seu evento um sucesso absoluto
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Left Side - Person Image with Background Effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:flex lg:col-span-3 justify-center items-center relative"
          >
            {/* Diamond shape background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-56 xl:w-72 h-56 xl:h-72 bg-primary rotate-45 rounded-2xl xl:rounded-3xl opacity-90 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.7) 100%)'
                }}
              />
            </div>
            {/* Small decorative squares */}
            <div className="absolute bottom-16 right-0 w-4 xl:w-6 h-4 xl:h-6 border-2 border-primary/40 rotate-12" />
            <div className="absolute bottom-24 right-4 w-3 xl:w-4 h-3 xl:h-4 border-2 border-primary/30 rotate-45" />
            <div className="absolute bottom-8 right-8 w-2 xl:w-3 h-2 xl:h-3 bg-primary/20 rotate-12" />
            <div className="absolute top-20 left-0 w-4 xl:w-5 h-4 xl:h-5 border-2 border-primary/30 rotate-45" />
            <div className="absolute top-32 left-4 w-2 xl:w-3 h-2 xl:h-3 bg-primary/20 rotate-12" />
            
            {/* Person image */}
            <img
              src={servicesPerson}
              alt="Profissional Confidence Eventos"
              className="relative z-10 max-h-[600px] xl:max-h-[850px] object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Right Side - Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
              >
                <Link
                  to={`/servicos/${service.slug}`}
                  className="group block bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
                >
                  <div className="relative w-full h-32 sm:h-36 md:h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
