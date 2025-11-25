import type { ImageMetadata } from "astro";
import type { ServiceItemProps } from "../types/components";
import frame1 from "../images/servicos/frame-1.png";
import frame2 from "../images/servicos/frame-2.png";
import frame3 from "../images/servicos/frame-3.png";
import frame4 from "../images/servicos/frame-4.png";
import frame5 from "../images/servicos/frame-5.png";


export const servicosData: ServiceItemProps[] = [
  {
    title: "Shows e Eventos",
    text: "Transporte de caixas de som, painéis de LED, estruturas e equipamentos técnicos. Atendimento direto a produtoras e empresas do setor."
  },
  {
    title: "Logística corporativa",
    text: "Transferência entre Centros de Distribuição e abastecimento de lojas. Atuação com grandes redes."
  }
];

export const servicosImages: ImageMetadata[] = [
  frame1,
  frame2,
  frame3,
  frame4,
  frame5
];
