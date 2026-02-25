import { useEffect } from "react";
import { motion } from "framer-motion";

const ClientsSection = () => {
  useEffect(() => {
    const existing = document.querySelector('script[src*="webcis"]');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = 'https://apps.webcis.com.br/googlereviews.js?code=ChIJLbWT6PhRzpQR9QViRYHWtr0';
    document.body.appendChild(script);

    return () => { script.remove(); };
  }, []);

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

        {/* WebCIS Reviews Widget */}
        <div className="app-review-webcis-appwgr"></div>
      </div>
    </section>
  );
};

export default ClientsSection;
