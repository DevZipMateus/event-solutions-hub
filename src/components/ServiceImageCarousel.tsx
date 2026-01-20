import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceImageCarouselProps {
  images: string[];
  alt: string;
}

const ServiceImageCarousel = ({ images, alt }: ServiceImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-5">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${alt} - Imagem ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-4"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceImageCarousel;
