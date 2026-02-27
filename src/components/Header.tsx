import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import logo from "@/assets/logo_confidence.png";
import { services } from "@/lib/services-data";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    
    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/" + href);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const handleServiceClick = (slug: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    navigate(`/${slug}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <button onClick={handleLogoClick}>
            <img
              src={logo}
              alt="Confidence Eventos"
              className="h-12 md:h-14 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("#home")}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide"
            >
              Início
            </button>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm tracking-wide"
              >
                Serviços
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ 
                      duration: 0.2, 
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    className="absolute top-full left-0 mt-2 w-72 bg-background border border-border rounded-xl shadow-2xl z-50 py-3 overflow-hidden"
                  >
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.04
                          }
                        }
                      }}
                    >
                      {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <motion.button
                            key={service.slug}
                            variants={{
                              hidden: { opacity: 0, x: -20 },
                              visible: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            onClick={() => handleServiceClick(service.slug)}
                            className="w-full flex items-center gap-3 text-left px-4 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200 group"
                          >
                            <span className="p-2 rounded-lg bg-muted group-hover:bg-primary/20 transition-colors duration-200">
                              <IconComponent size={18} className="text-primary" />
                            </span>
                            <span className="font-medium">{service.title}</span>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection("#contato")}
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200"
            >
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("#home")}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2"
              >
                Início
              </button>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-foreground hover:text-primary transition-colors duration-200 font-medium text-left py-2"
                >
                  Serviços
                  <ChevronDown 
                    size={16} 
                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 flex flex-col gap-1 overflow-hidden"
                    >
                      {services.map((service) => (
                        <button
                          key={service.slug}
                          onClick={() => handleServiceClick(service.slug)}
                          className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left py-2"
                        >
                          {service.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection("#contato")}
                className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors duration-200 mt-2 text-center"
              >
                Contato
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
