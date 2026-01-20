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
    description: "Ambientes impecáveis antes, durante e pós-evento.",
    image: limpezaImg,
    fullDescription: `A limpeza para eventos é um fator crucial para o sucesso de qualquer evento corporativo em São Paulo. Nossa equipe especializada garante ambientes impecáveis antes, durante e após a realização do seu projeto, assegurando o conforto e a segurança sanitária de todos os participantes. Atuamos com discrição e eficiência, realizando a higienização de áreas comuns, banheiros, praças de alimentação e estandes.

Entendemos que cada evento corporativo em São Paulo possui particularidades, por isso, elaboramos um plano de limpeza personalizado que se adapta ao fluxo de pessoas e à estrutura do local. Utilizamos produtos de alta performance e equipamentos adequados para diferentes tipos de superfícies, sempre respeitando as normas ambientais e de segurança.

Seja um congresso, feira, workshop ou confraternização, conte com nossa excelência em serviços de limpeza. Mantenha a imagem da sua empresa impecável e proporcione uma experiência agradável aos seus convidados com nosso suporte profissional.`,
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
    description: "Prevenção, protocolos e resposta rápida.",
    image: bombeirosImg,
    fullDescription: `A segurança é prioridade absoluta em qualquer evento corporativo em São Paulo. Nossa equipe de Bombeiro Civil atua na prevenção e combate a incêndios, primeiros socorros e gestão de riscos, garantindo a tranquilidade de organizadores e convidados. Seguimos rigorosamente as normas técnicas e legislações vigentes para assegurar que seu evento esteja em total conformidade.

Nossos profissionais são altamente treinados para agir com rapidez e precisão em situações de emergência, realizando vistorias prévias, monitoramento constante e orientação de público. A presença de bombeiros civis qualificados é fundamental para a proteção da vida e do patrimônio, especialmente em locais de grande circulação.

Garanta o sucesso do seu evento corporativo em São Paulo com nossa equipe de bombeiros civis. Oferecemos planejamento estratégico de segurança, equipamentos modernos e profissionais preparados para lidar com qualquer imprevisto, permitindo que você foque no que realmente importa: o conteúdo e a experiência do seu evento.`,
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
    description: "Movimentação segura e eficiente para o seu evento.",
    image: carregadoresImg,
    fullDescription: `Contamos com equipes de carregadores experientes para auxiliar na montagem, operação e desmontagem, seguindo protocolos de segurança e cronogramas definidos.

Realizamos movimentação de estruturas, mobiliários e materiais promocionais com organização e cuidado, garantindo fluidez na logística do evento.

Nossa atuação é coordenada com fornecedores e produção, reduzindo riscos e atrasos, e proporcionando uma operação ágil e eficiente.`,
    features: [
      "Montagem de estruturas",
      "Desmontagem pós-evento",
      "Transporte de materiais",
      "Movimentação de mobiliários",
      "Logística coordenada",
      "Equipe experiente e uniformizada",
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
    description: "Apoio bilíngue e tradução simultânea.",
    image: tradutoresImg,
    fullDescription: `Oferecemos tradutores e intérpretes para recepção de convidados internacionais, tradução simultânea em palestras e suporte em múltiplos idiomas.

Equipe preparada para atuar com discrição e eficiência, alinhada à identidade do evento e às necessidades do seu público.

Ideal para congressos, feiras e eventos corporativos com conteúdo internacional e presença de convidados estrangeiros.`,
    features: [
      "Tradução simultânea",
      "Recepção bilíngue",
      "Intérpretes especializados",
      "Múltiplos idiomas",
      "Suporte em palestras",
      "Atendimento discreto e profissional",
    ],
    gallery: [],
  },
  {
    icon: UserCheck,
    title: "Recepcionista para Eventos",
    slug: "recepcionistas",
    description: "A primeira impressão é a que fica.",
    image: recepcionistasImg,
    fullDescription: `Nossas Recepcionistas para Eventos, sejam elas bilíngues ou monolíngues, são colaboradoras especializadas e meticulosamente treinadas para prestar um acolhimento de excelência, assegurando organização rigorosa, fluidez operacional e uma recepção calorosa aos participantes. Elas se dedicam ao credenciamento estratégico, à boas-vindas aos convidados, à orientação detalhada sobre o cronograma e logística, à gestão de acessos e ao suporte integral, sempre com cordialidade, prontidão e a devida postura profissional.

Para encontros nacionais e internacionais, nossas recepcionistas bilíngues garantem uma interlocução eficaz com os visitantes estrangeiros, proporcionando uma vivência acessível e de elevado padrão. Adicionalmente, cada Recepcionista para Evento é capacitada a interagir com diversos perfis de público, mantendo um nível de serviço superior e projetando a melhor imagem da sua instituição ou marca.

Abrangendo feiras, congressos, lançamentos, eventos corporativos ou celebrações sociais, nosso time de recepção está pronto para endossar sua empresa com máximo profissionalismo, resultando em um evento perfeitamente orquestrado e uma experiência inesquecível para todos os presentes!`,
    features: [
      "Recepção bilíngue e monolíngue",
      "Credenciamento estratégico",
      "Boas-vindas e orientação",
      "Gestão de acessos",
      "Suporte integral aos participantes",
      "Postura profissional e cordial",
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
    description: "Proteção e tranquilidade para todos.",
    image: segurancasImg,
    fullDescription: `Nossa equipe de Proteção e Segurança para Eventos é composta por seguranças para evento profissionais altamente qualificados e rigorosamente treinados para assegurar a salvaguarda de participantes, ativos e a fluidez do seu evento. Com uma abordagem estratégica e sutil, eles executam o controle de acesso, vigiam o ambiente, antecipam incidentes e administram prontamente situações de risco, garantindo um evento íntegro e impecavelmente organizado.

Dispomos de especialistas aptos a atuar em eventos de diversas magnitudes – de pequeno a grande porte –, moldando-se precisamente às demandas singulares de cada celebração. Nossa equipe adota diretrizes estritas de segurança, mantendo uma conduta impecável e vigilância constante para proporcionar serenidade total ao público, promotores e convidados.

Seja para concertos, exposições, encontros corporativos, celebrações privadas ou mega produções, oferecemos um serviço de segurança para eventos excepcional e eficaz, criando um espaço seguro para todos. Confie em nossa vasta experiência para um evento totalmente resguardado e livre de contratempos.`,
    features: [
      "Controle de acesso estratégico",
      "Vigilância constante",
      "Prevenção de incidentes",
      "Gestão de situações de risco",
      "Eventos de pequeno a grande porte",
      "Conduta profissional impecável",
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
    description: "Atendimento qualificado em A&B.",
    image: buffetImg,
    fullDescription: `Profissionais treinados para serviço de alimentos e bebidas, postura adequada e eficiência na operação.

Atendimento ao público com cordialidade, organização de salão e suporte à produção de catering.

Ideal para coquetéis, jantares, feiras e eventos corporativos que demandam serviço de A&B.`,
    features: [
      "Serviço de alimentos e bebidas",
      "Postura profissional",
      "Organização de salão",
      "Suporte à produção de catering",
      "Atendimento cordial",
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
