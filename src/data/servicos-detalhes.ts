import transportesImage from "../images/transportes.webp";

export const servicosDetalhes = {
  hero: {
    tagline: "Nossa Expertise",
    title: "Soluções de Logística",
    titleHighlight: "Integrada",
    description:
      "Oferecemos uma gama completa de serviços de transporte e armazenagem para otimizar sua cadeia de suprimentos.",
    backgroundImage: transportesImage,
  },
  services: [
    {
      id: "ftl",
      icon: "mdi:truck",
      title: "Carga Completa (FTL)",
      description:
        "O serviço Full Truck Load (FTL) é ideal para grandes volumes de mercadoria que ocupam a capacidade total do veículo. Garantimos exclusividade, maior segurança e menor tempo de trânsito, pois a carga segue direto da origem ao destino sem paradas para consolidação.",
      imagePosition: "left" as const,
      features: [
        {
          icon: "mdi:shield-check",
          title: "Segurança",
          description: "Risco reduzido de avarias",
        },
        {
          icon: "mdi:speedometer",
          title: "Velocidade",
          description: "Trânsito ponto a ponto",
        },
        {
          icon: "mdi:calendar-clock",
          title: "Flexibilidade",
          description: "Agendamento preciso",
        },
        {
          icon: "mdi:radar",
          title: "Monitoramento",
          description: "Status em tempo real",
        },
      ],
      highlights: [
        {
          icon: "mdi:truck",
          title: "Veículo Dedicado",
          subtitle: "Exclusividade",
        },
        {
          icon: "mdi:routes",
          title: "Rota Direta",
          subtitle: "Sem Paradas",
        },
        {
          icon: "mdi:shield-check",
          title: "Seguro Total",
          subtitle: "RCTR-C e RCF-DC",
        },
        {
          icon: "mdi:weight",
          title: "Alta Capacidade",
          subtitle: "Até 74 Ton",
        },
      ],
      ctaText: "Solicitar Cotação FTL",
      ctaHref: "/cotacao?servico=ftl",
    },
    {
      id: "ltl",
      icon: "mdi:package-variant",
      title: "Carga Fracionada (LTL)",
      description:
        "Com o Less than Truck Load (LTL), sua empresa paga apenas pelo espaço utilizado no caminhão. Consolidamos cargas de diversos clientes com destinos similares, oferecendo uma solução econômica sem abrir mão da qualidade e pontualidade HJLOG.",
      imagePosition: "right" as const,
      features: [
        {
          icon: "mdi:cash-multiple",
          title: "Custo Reduzido",
          description: "Rateio do valor do frete",
        },
        {
          icon: "mdi:puzzle",
          title: "Versatilidade",
          description: "Pequenos e médios volumes",
        },
        {
          icon: "mdi:earth",
          title: "Cobertura",
          description: "Atendimento nacional",
        },
        {
          icon: "mdi:calendar-sync",
          title: "Frequência",
          description: "Saídas regulares",
        },
      ],
      highlights: [
        {
          icon: "mdi:piggy-bank",
          title: "Economia",
          subtitle: "Até 40%",
        },
        {
          icon: "mdi:package-variant-closed",
          title: "Consolidação",
          subtitle: "Inteligente",
        },
        {
          icon: "mdi:map-marker-multiple",
          title: "Destinos",
          subtitle: "500+ Cidades",
        },
        {
          icon: "mdi:package-variant",
          title: "Volumes",
          subtitle: "A partir de 1 palete",
        },
      ],
      ctaText: "Solicitar Cotação LTL",
      ctaHref: "/cotacao?servico=ltl",
    },
    {
      id: "armazenagem",
      icon: "mdi:warehouse",
      title: "Armazenagem e Logística",
      description:
        "Nossos armazéns estrategicamente localizados oferecem infraestrutura moderna para estocagem, cross-docking e gestão de inventário. Cuidamos de sua mercadoria com sistemas de segurança avançados e controle de temperatura quando necessário.",
      imagePosition: "left" as const,
      features: [
        {
          icon: "mdi:database-cog",
          title: "Gestão WMS",
          description: "Gestão de estoque WMS com acesso cliente",
        },
        {
          icon: "mdi:swap-horizontal",
          title: "Cross-docking",
          description: "Cross-docking ágil para distribuição imediata",
        },
        {
          icon: "mdi:shield-lock",
          title: "Segurança",
          description: "Segurança patrimonial armada e monitoramento remoto",
        },
      ],
      highlights: [
        {
          icon: "mdi:warehouse",
          title: "+10.000m²",
          subtitle: "Área de Armazenagem",
          fullWidth: true,
        },
        {
          icon: "mdi:qrcode-scan",
          title: "WMS",
          subtitle: "Gestão Digital",
        },
        {
          icon: "mdi:cctv",
          title: "24/7",
          subtitle: "Monitoramento",
        },
      ],
      ctaText: "Falar sobre Armazenagem",
      ctaHref: "/cotacao?servico=armazenagem",
    },
    {
      id: "expresso",
      icon: "mdi:rocket-launch",
      title: "Frete Expresso",
      description:
        "Para demandas urgentes onde cada minuto conta. O serviço de Frete Expresso da HJLOG prioriza sua carga com veículos dedicados e duplas de motoristas para garantir a entrega no menor tempo possível, sem comprometer a segurança.",
      imagePosition: "right" as const,
      features: [
        {
          icon: "mdi:truck-fast",
          title: "Disponibilidade",
          description: "Disponibilidade imediata de veículos",
        },
        {
          icon: "mdi:map-marker-path",
          title: "Rastreamento",
          description: "Rastreamento prioritário com atualizações de hora em hora",
        },
        {
          icon: "mdi:clock-time-eight",
          title: "Operação 24h",
          description: "Operação 24h incluindo finais de semana e feriados",
        },
      ],
      highlights: [
        {
          icon: "mdi:timer",
          title: "Lead Time",
          subtitle: "Mínimo Possível",
        },
        {
          icon: "mdi:account-group",
          title: "Equipe",
          subtitle: "Dupla de Motoristas",
        },
        {
          icon: "mdi:alert-decagram",
          title: "Prioridade Máxima",
          subtitle: "Sua carga no topo da lista",
          fullWidth: true,
        },
      ],
      ctaText: "Solicitar Urgência",
      ctaHref: "/cotacao?servico=expresso",
    },
  ],
  quote: {
    tagline: "Orçamento Rápido",
    title: "Solicite uma Cotação",
    description:
      "Preencha o formulário abaixo com os detalhes da sua carga e nossa equipe comercial entrará em contato com a melhor proposta logística.",
    serviceTypes: [
      "Transporte de Shows e Eventos",
      "Equipamentos de Palco",
      "Equipamentos de Gravação",
      "Logística B2B Magalu",
      "Carga Completa (FTL)",
      "Carga Fracionada (LTL)",
      "Frete Expresso",
      "Armazenagem",
      "Outro",
    ],
  },
};
