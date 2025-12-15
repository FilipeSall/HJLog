import heroImage from "../images/gemini-2_5-flash-image_A_cinematic_ultra-high-resolution_hero_section_image_for_a_professional_logistic-0_28691be8-1ebe-45a7-8418-3cd462faa1e6.jpg";

export const hero = {
  tagline: "Transporte e Logística",
  title: {
    line1: "Movemos o que faz",
    line2: "o espetáculo",
    line3: "acontecer.",
  },
  description:
    "Há anos conectamos empresas e pessoas com soluções logísticas completas, oferecendo eficiência, segurança e comprometimento em cada transporte.",
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
