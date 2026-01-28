import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceGalleryCarousel from "@/components/ServiceGalleryCarousel";
import { Button } from "@/components/ui/button";
import { withDevCacheBuster } from "@/lib/withDevCacheBuster";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Serviço não encontrado</h1>
            <Button onClick={() => navigate("/")}>Voltar ao início</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  // Get other services for related section
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] min-h-[280px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={withDevCacheBuster(service.image)}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-8 sm:pb-10 md:pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
              Voltar para início
            </Link>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="p-2 sm:p-3 bg-primary/20 backdrop-blur-sm rounded-lg sm:rounded-xl">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Sobre o Serviço
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
                  {service.fullDescription}
                </p>

                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                  O que oferecemos
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted rounded-lg"
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-foreground text-sm sm:text-base">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Gallery Carousel */}
                {service.gallery.length > 0 && (
                  <>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                      Galeria
                    </h3>
                    <div className="mb-8 sm:mb-12">
                      <ServiceGalleryCarousel
                        images={service.gallery}
                        title={service.title}
                      />
                    </div>
                  </>
                )}
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="lg:sticky lg:top-24"
              >
                <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6">
                    Solicite um Orçamento
                  </h3>
                  <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                    Entre em contato conosco para um orçamento personalizado para o seu evento.
                  </p>
                  
                  <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    <a
                      href="tel:+5511999857035"
                      className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>(11) 9 9985-7035</span>
                    </a>
                    <a
                      href="mailto:comercial@confidenceeventos.com.br"
                      className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span className="break-all">comercial@confidenceeventos.com.br</span>
                    </a>
                    <div className="flex items-center gap-2 sm:gap-3 text-muted-foreground text-sm sm:text-base">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      <span>São Paulo, SP</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm sm:text-base"
                  >
                    <a
                      href="https://wa.me/5511999857035?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Confidence%20Eventos."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Related Services */}
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-3 sm:mb-4">
                    Outros Serviços
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    {otherServices.map((relatedService) => (
                      <Link
                        key={relatedService.slug}
                        to={`/${relatedService.slug}`}
                        className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                      >
                        <relatedService.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                          {relatedService.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicePage;
