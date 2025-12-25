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
      "Há mais de 10 anos transportando equipamentos de bandas renomadas, estruturas de palco, sistemas de som e captação de imagem. Experiência com produtoras e empresas de montagem.",
    icon: "mdi:truck-delivery",
    image: showsEventsImage,
    imageAlt: "Transporte de estruturas para eventos",
    featured: true,
  },
  {
    title: "Logística para Varejo - Magalu",
    description:
      "Transferência entre Centros de Distribuição e abastecimento de lojas da Magalu. Operação B2B sem entrega porta a porta.",
    icon: "mdi:routes",
    image: corporateLogisticsImage,
    imageAlt: "Operação de logística corporativa",
    featured: true,
  },
  {
    title: "Equipamentos de Gravação",
    description:
      "Transporte especializado de equipamentos de captação de som e imagem para produções audiovisuais.",
    icon: "mdi:package-variant",
    image: dedicatedLoadImage,
    imageAlt: "Transporte de equipamentos técnicos",
    featured: false,
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
