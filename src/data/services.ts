import type { ImageMetadata } from "astro";
import corporateLogisticsImage from "../images/transportes.webp";
import dedicatedLoadImage from "../images/carga.webp";
import showsEventsImage from "../images/evento.webp";
import warehouseImage from "../images/armazem.webp";

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  image: ImageMetadata;
  imageAlt: string;
  featured: boolean;
}

interface ServicesHeading {
  tagline: string;
  title: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ServicesData {
  heading: ServicesHeading;
  items: ServiceItem[];
}

const serviceItems: ServiceItem[] = [
  {
    title: "Transporte de Shows e Eventos",
    description:
      "Transporte de caixas de som, painéis de LED, estruturas e equipamentos técnicos. Atendimento direto a produtoras e empresas do setor.",
    icon: "mdi:truck-delivery",
    image: showsEventsImage,
    imageAlt: "Transporte de estruturas para eventos",
    featured: true,
  },
  {
    title: "Armazenagem",
    description:
      "Instalações seguras e climatizadas para otimizar sua distribuição.",
    icon: "mdi:warehouse",
    image: warehouseImage,
    imageAlt: "Estrutura de armazenagem",
    featured: false,
  },
  {
    title: "Logística Corporativa",
    description:
      "Transferência entre Centros de Distribuição e abastecimento de lojas. Atuação com grandes redes.",
    icon: "mdi:routes",
    image: corporateLogisticsImage,
    imageAlt: "Operação de logística corporativa",
    featured: false,
  },
  {
    title: "Carga Dedicada",
    description:
      "Veículos exclusivos para sua carga com monitoramento dedicado.",
    icon: "mdi:package-variant",
    image: dedicatedLoadImage,
    imageAlt: "Carga dedicada em transporte especializado",
    featured: false,
  },
];

export const services: ServicesData = {
  heading: {
    tagline: "O que fazemos",
    title: "Soluções de Transporte",
    ctaLabel: "Ver todos os serviços",
    ctaHref: "/servicos",
  },
  items: serviceItems,
};
