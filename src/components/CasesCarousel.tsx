import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-placeholder.jpg";
import bannerImage from "@/assets/section-banner.jpg";

const CasesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder cases - will be replaced with actual images later
  const cases = [
    {
      image: heroImage,
      title: "Evento Corporativo",
      description: "Conferência anual para 500 participantes",
    },
    {
      image: bannerImage,
      title: "Gala de Premiação",
      description: "Cerimônia de gala com serviço completo",
    },
    {
      image: heroImage,
      title: "Feira de Negócios",
      description: "Organização de stand e equipe de apoio",
    },
    {
      image: bannerImage,
      title: "Congresso Internacional",
      description: "Suporte completo com tradutores e staff",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(cases.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(cases.length / 2)) % Math.ceil(cases.length / 2));
  };

  const visibleCases = cases.slice(currentSlide * 2, currentSlide * 2 + 2);

  return (
    <section id="cases" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Principais Cases
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conheça alguns dos eventos que tivemos o prazer de participar
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {visibleCases.map((caseItem, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-primary-foreground mb-2">
                      {caseItem.title}
                    </h3>
                    <p className="text-primary-foreground/80">
                      {caseItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
              aria-label="Cases anteriores"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(cases.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir para página ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
              aria-label="Próximos cases"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
