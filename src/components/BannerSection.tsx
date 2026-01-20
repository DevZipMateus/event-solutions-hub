import { motion } from "framer-motion";
import bannerImage from "@/assets/section-banner.jpg";

const BannerSection = () => {
  return (
    <section className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />
      <div className="absolute inset-0 bg-primary/60" />
      
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
            Transformamos Ideias em
            <br />
            Experiências Inesquecíveis
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Há mais de uma década, a Confidence Eventos entrega excelência e profissionalismo 
            em cada projeto que realizamos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerSection;
