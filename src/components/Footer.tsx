import { MapPin, Mail, Phone } from "lucide-react";
import { forwardRef, type ComponentPropsWithoutRef } from "react";
import logo from "@/assets/logo_confidence.png";
import { cn } from "@/lib/utils";

const Footer = forwardRef<HTMLElement, ComponentPropsWithoutRef<"footer">>(
  ({ className, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      {...props}
      className={cn(
        "bg-primary py-10 sm:py-12 md:py-16 overflow-hidden",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img
              src={logo}
              alt="Confidence Eventos"
              className="h-10 sm:h-12 md:h-14 w-auto brightness-0 invert mb-4 sm:mb-6 mx-auto md:mx-0"
            />
            <p className="text-white/80 max-w-sm text-sm sm:text-base mx-auto md:mx-0">
              Transformando eventos em experiências memoráveis há mais de uma década.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-6">
              Contato
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-2 sm:gap-3 justify-center md:justify-end">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-1 flex-shrink-0 md:order-2" />
                <address className="text-white/80 not-italic text-sm sm:text-base text-left md:text-right">
                  Av. Vieira de Morais, 2110
                  <br />
                  Conjunto 916, São Paulo - SP
                  <br />
                  04.617-007
                </address>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-end">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 md:order-2" />
                <a
                  href="mailto:comercial@confidenceeventos.com.br"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-xs sm:text-sm md:text-base break-all"
                >
                  comercial@confidenceeventos.com.br
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-end">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 md:order-2" />
                <a
                  href="tel:+551123641135"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  +55 (11) 2364-1135
                </a>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-end">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0 md:order-2" />
                <a
                  href="tel:+5511999857035"
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  +55 (11) 9 9985-7035
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-white/60 text-xs sm:text-sm">
            © {new Date().getFullYear()} Confidence Eventos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
