import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-placeholder.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Placeholder images - will be replaced with actual images later
  const slides = [
    {
      image: heroImage,
      title: "Excelência em Eventos",
      subtitle: "Transformamos seus eventos em experiências memoráveis",
    },
    {
      image: heroImage,
      title: "Equipe Especializada",
      subtitle: "Profissionais treinados para garantir o sucesso do seu evento",
    },
    {
      image: heroImage,
      title: "Soluções Completas",
      subtitle: "Do planejamento à execução, cuidamos de cada detalhe",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex items-center">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
              <button
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Fale Conosco
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
