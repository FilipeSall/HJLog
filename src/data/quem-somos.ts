import type { ValueItemProps } from "../types/components";
import caminhaoSvg from "../images/icons/caminhao.svg";
import mundoSvg from "../images/icons/mundo.svg";
import calendarioSvg from "../images/icons/calendario.svg";
import mapaSvg from "../images/icons/mapa.svg";

export const nossosValoresData: ValueItemProps[] = [
  {
    icon: caminhaoSvg,
    title: "Confiança que move",
    text: "Entregamos mais do que cargas, entregamos tranquilidade. Cumprir prazos e cuidar de cada detalhe é parte da nossa rota diária."
  },
  {
    icon: mundoSvg,
    title: "Experiência em grandes eventos",
    text: "De pequenos shows a mega produções, já estivemos nos bastidores dos maiores eventos do país."
  },
  {
    icon: calendarioSvg,
    title: "Compromisso com a excelência",
    text: "Cada transporte é planejado nos mínimos detalhes. Segurança, pontualidade e profissionalismo são o combustível do nosso trabalho."
  },
  {
    icon: mapaSvg,
    title: "Controle em cada rota",
    text: "Acompanhamos cada transporte com monitoramento e comunicação constante, garantindo transparência total e previsibilidade em cada entrega."
  }
];
