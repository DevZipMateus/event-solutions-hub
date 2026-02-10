import { motion } from "framer-motion";

const partners = [
  "Expo Center Norte",
  "São Paulo Expo",
  "Transamerica Expo Center",
  "WTC Events",
  "Pavilhão de Exposições",
  "Centro de Convenções",
  "Memorial da América Latina",
];

const PartnersSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-3 md:mb-4">
            Nossos Parceiros
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 sm:px-8 py-4 sm:py-5 hover:bg-white/20 transition-all duration-300 text-center min-w-[150px] sm:min-w-[180px]"
            >
              <span className="text-white font-medium text-sm sm:text-base">
                {partner}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
