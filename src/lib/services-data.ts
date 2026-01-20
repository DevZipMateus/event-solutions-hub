import {
  Sparkles,
  Flame,
  Package,
  Languages,
  UserCheck,
  Shield,
  UtensilsCrossed,
  Users,
  Building,
  LucideIcon,
} from "lucide-react";

import limpezaImg from "@/assets/services/limpeza.jpg";
import bombeirosImg from "@/assets/services/bombeiros.jpg";
import carregadoresImg from "@/assets/services/carregadores.jpg";
import tradutoresImg from "@/assets/services/tradutores.jpg";
import recepcionistasImg from "@/assets/services/recepcionistas.jpg";
import segurancasImg from "@/assets/services/segurancas.jpg";
import buffetImg from "@/assets/services/buffet.jpg";
import staffImg from "@/assets/services/staff.jpg";
import locacoesImg from "@/assets/services/locacoes.jpg";

export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
  gallery: string[];
}

export const services: Service[] = [
  {
    icon: Sparkles,
    title: "Limpeza para Eventos",
    slug: "limpeza",
    description: "Equipe especializada em limpeza e organização de espaços para eventos.",
    image: limpezaImg,
    fullDescription: "Nossa equipe de limpeza é altamente treinada para garantir a higiene e organização do seu evento do início ao fim. Trabalhamos com produtos de qualidade e técnicas eficientes para manter todos os espaços impecáveis.",
    features: [
      "Limpeza pré-evento",
      "Manutenção durante o evento",
      "Limpeza pós-evento",
      "Higienização de banheiros",
      "Coleta seletiva de resíduos",
      "Equipe uniformizada e treinada",
    ],
    gallery: [
      "/limpeza/_WIL6100.JPG",
      "/limpeza/_WIL6106.JPG",
      "/limpeza/_WIL6111.JPG",
      "/limpeza/_WIL6114.JPG",
      "/limpeza/_WIL6119.JPG",
      "/limpeza/_WIL6121.JPG",
    ],
  },
  {
    icon: Flame,
    title: "Bombeiro Civil para Eventos",
    slug: "bombeiros",
    description: "Profissionais habilitados para garantir a segurança contra incêndios.",
    image: bombeirosImg,
    fullDescription: "Nossos bombeiros civis são profissionais certificados e preparados para atuar na prevenção e combate a incêndios, além de primeiros socorros. Garantimos a segurança do seu evento conforme as normas vigentes.",
    features: [
      "Brigada de incêndio certificada",
      "Plano de evacuação",
      "Primeiros socorros",
      "Inspeção de equipamentos",
      "Relatório técnico",
      "Atendimento 24 horas",
    ],
    gallery: [
      "/bombeiro/_WIL6137.JPG",
      "/bombeiro/_WIL6140.JPG",
      "/bombeiro/_WIL6143.JPG",
      "/bombeiro/_WIL6145.JPG",
      "/bombeiro/_WIL6146.JPG",
      "/bombeiro/_WIL6151.JPG",
    ],
  },
  {
    icon: Package,
    title: "Carregadores para Eventos",
    slug: "carregadores",
    description: "Equipe de carregadores para montagem e desmontagem de eventos.",
    image: carregadoresImg,
    fullDescription: "Nossa equipe de carregadores é especializada em montagem e desmontagem de estruturas para eventos. Trabalhamos com agilidade e cuidado para garantir que tudo esteja pronto no prazo.",
    features: [
      "Montagem de estruturas",
      "Desmontagem pós-evento",
      "Transporte de materiais",
      "Organização de espaços",
      "Movimentação de equipamentos",
      "Equipe experiente",
    ],
    gallery: [
      "/carregadores/_WIL7435.JPG",
      "/carregadores/_WIL7463.JPG",
      "/carregadores/_WIL7495.JPG",
    ],
  },
  {
    icon: Languages,
    title: "Tradutores para Eventos",
    slug: "tradutores",
    description: "Tradutores e intérpretes para eventos internacionais.",
    image: tradutoresImg,
    fullDescription: "Oferecemos serviços de tradução simultânea e consecutiva para eventos internacionais. Nossa equipe de tradutores é fluente em diversos idiomas e preparada para garantir a comunicação eficaz.",
    features: [
      "Tradução simultânea",
      "Tradução consecutiva",
      "Intérpretes especializados",
      "Múltiplos idiomas",
      "Equipamentos de tradução",
      "Suporte técnico",
    ],
    gallery: [],
  },
  {
    icon: UserCheck,
    title: "Recepcionista para Eventos",
    slug: "recepcionistas",
    description: "Recepcionistas treinadas para acolher seus convidados.",
    image: recepcionistasImg,
    fullDescription: "Nossas recepcionistas são profissionais elegantes e bem treinadas para recepcionar seus convidados com excelência. Garantimos um atendimento cordial e eficiente.",
    features: [
      "Recepção de convidados",
      "Credenciamento",
      "Orientação aos participantes",
      "Controle de acesso",
      "Atendimento VIP",
      "Uniformizadas conforme evento",
    ],
    gallery: [
      "/recepcionista/_WIL6060.JPG",
      "/recepcionista/_WIL6064.JPG",
      "/recepcionista/_WIL7240.JPG",
      "/recepcionista/_WIL7244.JPG",
      "/recepcionista/_WIL7249.JPG",
      "/recepcionista/_WIL7250.JPG",
    ],
  },
  {
    icon: Shield,
    title: "Seguranças para Eventos",
    slug: "segurancas",
    description: "Segurança privada qualificada para proteção do seu evento.",
    image: segurancasImg,
    fullDescription: "Nossa equipe de segurança é composta por profissionais treinados e habilitados para garantir a proteção do seu evento. Atuamos com discrição e eficiência.",
    features: [
      "Controle de acesso",
      "Segurança patrimonial",
      "Escolta VIP",
      "Monitoramento",
      "Rondas preventivas",
      "Equipe armada e desarmada",
    ],
    gallery: [
      "/seguranças/_WIL5980.JPG",
      "/seguranças/_WIL5986.JPG",
      "/seguranças/_WIL5995.JPG",
      "/seguranças/_WIL5997.JPG",
      "/seguranças/_WIL5998.JPG",
      "/seguranças/_WIL6008.JPG",
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Garçons para Eventos",
    slug: "buffet",
    description: "Garçons profissionais para um atendimento impecável.",
    image: buffetImg,
    fullDescription: "Nossos garçons são profissionais experientes e treinados para oferecer um serviço de alta qualidade. Garantimos um atendimento elegante e eficiente.",
    features: [
      "Serviço de mesa",
      "Serviço volante",
      "Bar service",
      "Montagem de buffet",
      "Atendimento personalizado",
      "Uniformizados",
    ],
    gallery: [
      "/buffet/IMG-20251205-WA0035.jpg",
      "/buffet/IMG-20251205-WA0036.jpg",
      "/buffet/IMG-20251205-WA0037.jpg",
      "/buffet/IMG-20251205-WA0038.jpg",
      "/buffet/IMG-20251205-WA0039.jpg",
      "/buffet/IMG-20251205-WA0040.jpg",
    ],
  },
  {
    icon: Users,
    title: "Staff para Eventos",
    slug: "staff",
    description: "Equipe de apoio completa para todas as necessidades do evento.",
    image: staffImg,
    fullDescription: "Nossa equipe de staff é versátil e preparada para atender todas as demandas do seu evento. Desde apoio logístico até suporte aos convidados.",
    features: [
      "Apoio logístico",
      "Suporte aos convidados",
      "Distribuição de materiais",
      "Orientação de filas",
      "Apoio técnico",
      "Flexibilidade de funções",
    ],
    gallery: [],
  },
  {
    icon: Building,
    title: "Locações para Eventos",
    slug: "locacoes",
    description: "Tendas, banheiros químicos, ambulâncias, mobiliários e equipamentos para seu evento.",
    image: locacoesImg,
    fullDescription: "Oferecemos locação completa de estruturas e equipamentos para eventos. Tendas, banheiros químicos, ambulâncias, mobiliários e muito mais com logística completa.",
    features: [
      "Tendas e coberturas",
      "Banheiros químicos",
      "Ambulâncias",
      "Mobiliário para eventos",
      "Equipamentos de som e luz",
      "Logística completa",
    ],
    gallery: [],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
