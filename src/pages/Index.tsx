import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import ServicesSection from "@/components/ServicesSection";
import BannerSection from "@/components/BannerSection";
import CasesCarousel from "@/components/CasesCarousel";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroCarousel />
      <ServicesSection />
      <BannerSection />
      <CasesCarousel />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
