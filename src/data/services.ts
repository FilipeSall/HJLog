import corporateLogisticsImage from "../images/transportes.webp";
import dedicatedLoadImage from "../images/carga.webp";
import showsEventsImage from "../images/evento.webp";
import warehouseImage from "../images/armazem.webp";

export const services = {
  heading: {
    tagline: "O que fazemos",
    title: "Soluções de Transporte",
    ctaLabel: "Ver todos os serviços",
    ctaHref: "#",
  },
  items: [
    {
      title: "Transporte de Shows e Eventos",
      description:
        "Transporte de caixas de som, painéis de LED, estruturas e equipamentos técnicos. Atendimento direto a produtoras e empresas do setor.",
      icon: "local_shipping",
      image: showsEventsImage,
      imageAlt: "Transporte de estruturas para eventos",
      featured: true,
    },
    {
      title: "Armazenagem",
      description:
        "Instalações seguras e climatizadas para otimizar sua distribuição.",
      icon: "warehouse",
      image: warehouseImage,
      imageAlt: "Estrutura de armazenagem",
      featured: false,
    },
    {
      title: "Logística Corporativa",
      description:
        "Transferência entre Centros de Distribuição e abastecimento de lojas. Atuação com grandes redes.",
      icon: "route",
      image: corporateLogisticsImage,
      imageAlt: "Operação de logística corporativa",
      featured: false,
    },
    {
      title: "Carga Dedicada",
      description:
        "Veículos exclusivos para sua carga com monitoramento dedicado.",
      icon: "inventory_2",
      image: dedicatedLoadImage,
      imageAlt: "Carga dedicada em transporte especializado",
      featured: false,
    },
  ],
};
