import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ClientCase {
  id: string;
  clientName: string;
  eventName: string;
  testimonial: string;
  images: string[];
}

const CasesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  const cases: ClientCase[] = [
    {
      id: "thiago-rosinhole",
      clientName: "Cliente Da Exposição Do Thiago Rosinhole",
      eventName: "Exposição de Arte",
      testimonial:
        "Prezada Carolina! Gostaríamos de expressar nossa sincera gratidão pela excelente prestação de serviços de segurança que sua empresa nos forneceu para o evento. Sua equipe demonstrou grande profissionalismo e dedicação. O trabalho realizado foi impecável, garantindo que tudo ocorresse de forma segura e tranquila. Vocês fizeram um ótimo trabalho! Agradecemos a parceria e esperamos trabalhar juntos novamente em breve.",
      images: [
        "/cases/thiago-rosinhole-1.jpg",
        "/cases/thiago-rosinhole-2.jpg",
        "/cases/thiago-rosinhole-3.jpg",
      ],
    },
    {
      id: "saudosa-maloca",
      clientName: "Cliente Do Saudosa Maloca",
      eventName: "Festival de Samba",
      testimonial:
        "Trabalhar com a Confidence Eventos no nosso evento foi uma experiência de total tranquilidade. A qualidade da mão de obra é notável. Desde a segurança, que manteve tudo sob controle com discrição e eficiência, até os carregadores e a equipe de limpeza, que foram incrivelmente ágeis e organizados. Eles são sinônimo de profissionalismo e pontualidade. Agradecemos por tornarem a logística do nosso evento impecável!",
      images: [
        "/cases/saudosa-maloca-1.jpg",
        "/cases/saudosa-maloca-2.jpg",
        "/cases/saudosa-maloca-3.jpg",
        "/cases/saudosa-maloca-4.jpg",
        "/cases/saudosa-maloca-5.jpg",
        "/cases/saudosa-maloca-6.jpg",
        "/cases/saudosa-maloca-7.jpg",
        "/cases/saudosa-maloca-8.jpg",
        "/cases/saudosa-maloca-9.jpg",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const nextImage = (caseId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [caseId]: ((prev[caseId] || 0) + 1) % totalImages,
    }));
  };

  const prevImage = (caseId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [caseId]: ((prev[caseId] || 0) - 1 + totalImages) % totalImages,
    }));
  };

  const currentCase = cases[currentSlide];
  const currentCaseImageIndex = currentImageIndex[currentCase.id] || 0;

  return (
    <section id="cases" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Feedback De Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossos serviços
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image Gallery */}
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentCaseImageIndex}
                      src={currentCase.images[currentCaseImageIndex]}
                      alt={`${currentCase.clientName} - Foto ${currentCaseImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  
                  {/* Image Navigation */}
                  {currentCase.images.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(currentCase.id, currentCase.images.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
                        aria-label="Imagem anterior"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={() => nextImage(currentCase.id, currentCase.images.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all duration-300"
                        aria-label="Próxima imagem"
                      >
                        <ChevronRight size={20} />
                      </button>
                      
                      {/* Image Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {currentCase.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              setCurrentImageIndex((prev) => ({
                                ...prev,
                                [currentCase.id]: index,
                              }))
                            }
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                              index === currentCaseImageIndex
                                ? "bg-white w-6"
                                : "bg-white/50 hover:bg-white/70"
                            }`}
                            aria-label={`Ir para imagem ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/20" />
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-10 shadow-lg">
                    <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                      {currentCase.clientName}
                    </h3>
                    <p className="text-primary font-medium mb-6">{currentCase.eventName}</p>
                    <blockquote className="text-muted-foreground text-base md:text-lg leading-relaxed italic">
                      "{currentCase.testimonial}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Case Navigation */}
          {cases.length > 1 && (
            <div className="flex justify-center items-center gap-4 mt-10">
              <button
                onClick={prevSlide}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
                aria-label="Case anterior"
              >
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Ir para case ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-3 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300"
                aria-label="Próximo case"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CasesCarousel;
