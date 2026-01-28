import { motion } from "framer-motion";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import whatsappIcon from "@/assets/whatsapp-icon.png";
import { cn } from "@/lib/utils";

type Props = ComponentPropsWithoutRef<typeof motion.button>;

const WhatsAppButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, onClick, ...props }, ref) => {
  const openWhatsApp = () => {
    const phone = "5511999857035";
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre os serviços da Confidence Eventos."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleClick: NonNullable<Props["onClick"]> = (event) => {
    onClick?.(event);
    if (!event.defaultPrevented) openWhatsApp();
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleClick}
      className={cn(
        "fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50",
        className
      )}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Conversar no WhatsApp"
      {...props}
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </motion.button>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;
