import type { StepsItemProps } from "../types/components";

export const howItWorksSteps: StepsItemProps[] = [
  { label: "Cotação", i: 1 },
  { label: "Coleta", i: 2 },
  { label: "Rastreio", i: 3 },
  { label: "Entrega", i: 4 }
];

export const howItWorksDetails = [
  {
    step: 1,
    title: "Cotação",
    description: "Solicite um orçamento online em segundos com base no peso e destino.",
    icon: "request_quote"
  },
  {
    step: 2,
    title: "Coleta",
    description: "Nossa equipe realiza a coleta da mercadoria no local agendado.",
    icon: "package_2"
  },
  {
    step: 3,
    title: "Rastreio",
    description: "Acompanhe o trajeto da sua carga em tempo real através do nosso sistema.",
    icon: "location_on"
  },
  {
    step: 4,
    title: "Entrega",
    description: "Entrega finalizada com segurança e confirmação digital de recebimento.",
    icon: "check_circle"
  }
];
