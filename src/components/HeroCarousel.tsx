import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroBombeiros from "@/assets/hero-bombeiros.jpg";

import heroStaff from "@/assets/hero-staff.jpg";
import heroEquipe from "@/assets/hero-equipe.jpg";
import heroRecepcionistas from "@/assets/hero-recepcionistas.jpg";
import heroSeguranca from "@/assets/hero-seguranca.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroBombeiros,
      title: "Bombeiros",
      subtitle: "Segurança e prevenção para seus eventos com profissionais qualificados",
    },
    {
      image: heroStaff,
      title: "Carregadores",
      subtitle: "Equipe completa para suporte operacional do seu evento",
    },
    {
      image: heroEquipe,
      title: "Limpeza",
      subtitle: "Profissionais dedicados para manter seu evento impecável",
    },
    {
      image: heroRecepcionistas,
      title: "Recepcionistas",
      subtitle: "Acolhimento profissional e cordial para seus convidados",
    },
    {
      image: heroSeguranca,
      title: "Seguranças",
      subtitle: "Proteção discreta e eficiente para seu evento",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-[100svh] min-h-[500px] md:min-h-[600px] overflow-hidden bg-foreground">
      {/* Background layer to prevent white flash */}
      <div className="absolute inset-0 bg-foreground" />
      
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex items-center pt-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-3 md:mb-4 leading-tight drop-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 drop-shadow-md max-w-lg">
                {slides[currentSlide].subtitle}
              </p>
              <button
                onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-sm md:text-base"
              >
                Fale Conosco
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on tablet+ */}
      <button
        onClick={prevSlide}
        className="hidden sm:block absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 md:p-3 rounded-full text-white transition-all duration-300"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="hidden sm:block absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 md:p-3 rounded-full text-white transition-all duration-300"
        aria-label="Próximo slide"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-6 md:w-8"
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
