import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, MapPin } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/services-data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceGalleryCarousel from "@/components/ServiceGalleryCarousel";
import { Button } from "@/components/ui/button";

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
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-end pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para início
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/20 backdrop-blur-sm rounded-xl">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-bold text-white">
                {service.title}
              </h1>
            </div>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Sobre o Serviço
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  {service.fullDescription}
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-6">
                  O que oferecemos
                </h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3 p-4 bg-muted rounded-lg"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Gallery Carousel */}
                {service.gallery.length > 0 && (
                  <>
                    <h3 className="text-xl font-semibold text-foreground mb-6">
                      Galeria
                    </h3>
                    <div className="mb-12">
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
                className="sticky top-24"
              >
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl font-semibold text-foreground mb-6">
                    Solicite um Orçamento
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Entre em contato conosco para um orçamento personalizado para o seu evento.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <a
                      href="tel:+5511999999999"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(11) 99999-9999</span>
                    </a>
                    <a
                      href="mailto:contato@confidenceeventos.com.br"
                      className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>contato@confidenceeventos.com.br</span>
                    </a>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5" />
                      <span>São Paulo, SP</span>
                    </div>
                  </div>

                  <Button
                    asChild
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
                  >
                    <a
                      href="https://wa.me/5511999999999"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar pelo WhatsApp
                    </a>
                  </Button>
                </div>

                {/* Related Services */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Outros Serviços
                  </h3>
                  <div className="space-y-3">
                    {otherServices.map((relatedService) => (
                      <Link
                        key={relatedService.slug}
                        to={`/servicos/${relatedService.slug}`}
                        className="flex items-center gap-3 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors group"
                      >
                        <relatedService.icon className="w-5 h-5 text-primary" />
                        <span className="text-foreground group-hover:text-primary transition-colors">
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
