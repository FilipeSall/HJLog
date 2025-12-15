import heroImage from "../images/caminhao-hero.png";

export const hero = {
  tagline: "Transporte e Logística",
  title: {
    line1: "CONFIANÇA E",
    line2: "SEGURANÇA",
    line3: "NA ESTRADA",
  },
  description:
    "Soluções premium de transporte rodoviário para uma nação conectada. Movemos o seu negócio com precisão, segurança e rotas eficientes.",
  cta: {
    primary: {
      label: "Fale Conosco",
      href: "https://wa.me/5511982217679",
    },
    secondary: {
      label: "Nossos Serviços",
      href: "#services",
    },
  },
  heroImage: heroImage.src,
  heroImageAlt: "Caminhão moderno na rodovia representando transporte rodoviário",
  steps: [
    {
      icon: "map",
      title: "Planejamento da rota",
      description: "Otimização inteligente de trajetos para reduzir custos e prazos.",
    },
    {
      icon: "local_shipping",
      title: "Carga e monitoramento",
      description: "Rastreamento em tempo real 24/7 de toda a sua mercadoria.",
    },
    {
      icon: "verified_user",
      title: "Entrega responsável",
      description: "Compromisso total com prazos e integridade da carga.",
    },
  ],
};
