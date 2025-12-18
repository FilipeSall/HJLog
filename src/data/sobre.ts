import { getStatsByContext } from "./stats";

export const sobre = {
  hero: {
    tagline: "Institucional",
    title: "Sobre Nós",
    description:
      "Conheça a trajetória da HJLOG, que começou no mercado de eventos e hoje é referência em logística rodoviária, atendendo grandes varejistas como a Magalu.",
  },
  header: {
    tagline: "Quem Somos",
    title: "Nossa História",
    description:
      "A HJLOG nasceu em 2010 com foco em logística para eventos corporativos e culturais. Nossa expertise em prazos apertados e entregas complexas nos tornou especialistas em operações de alta precisão. Em 2020, durante a pandemia, quando o setor de eventos foi paralisado, fizemos uma transformação estratégica: redirecionamos nossa experiência operacional para o transporte de cargas no varejo. Essa decisão nos abriu portas para parcerias com grandes players do e-commerce, como a Magalu, consolidando a HJLOG como referência em logística rodoviária. Hoje, somos mais do que uma transportadora — somos uma parceira estratégica que entrega eficiência, tecnologia e compromisso em cada quilômetro rodado.",
  },
  story: {
    title: "Da Logística de Eventos ao Transporte Nacional",
    items: [
      {
        icon: "mdi:calendar-star",
        title: "Origem em Eventos",
        description:
          "Fundada em 2010, a HJLOG iniciou suas operações atendendo a indústria de eventos, desde shows e feiras até grandes eventos corporativos. Aprendemos a trabalhar com prazos impossíveis e logística de alta complexidade.",
      },
      {
        icon: "mdi:sync",
        title: "Transformação em 2020",
        description:
          "Durante a pandemia, o setor de eventos foi severamente impactado. Com nossa frota parada e uma equipe experiente, tomamos a decisão de pivotar para o mercado de transporte rodoviário de cargas, aplicando nossa expertise em operações críticas ao e-commerce em expansão.",
      },
      {
        icon: "mdi:store",
        title: "Parceria com a Magalu",
        description:
          "Nossa capacidade operacional e compromisso com prazos nos levou a conquistar a confiança de grandes varejistas. Hoje, somos um dos principais parceiros logísticos da Magalu, gerenciando milhares de entregas mensais com pontualidade de 99%.",
      },
      {
        icon: "mdi:chart-line",
        title: "Crescimento Sustentável",
        description:
          "15 anos de mercado, mais de 100 caminhões na frota, e uma operação que conecta todo o Brasil. Nossa trajetória comprova que resiliência, adaptabilidade e excelência operacional constroem negócios sólidos e duradouros.",
      },
    ],
  },
  values: {
    title: "Nossos Valores",
    items: [
      {
        icon: "lightning-bolt",
        title: "Agilidade",
        description:
          "Processos otimizados e rotas inteligentes para garantir que sua carga chegue no menor tempo possível.",
      },
      {
        icon: "shield-check",
        title: "Segurança",
        description:
          "Monitoramento 24h e frota moderna. Cuidamos da sua mercadoria com protocolos rigorosos de proteção.",
      },
      {
        icon: "handshake",
        title: "Compromisso",
        description:
          "Transparência em cada etapa e dedicação total para construir parcerias duradouras com nossos clientes.",
      },
    ],
  },
  timeline: {
    title: "Nossa Trajetória",
    events: [
      {
        year: "2010",
        title: "Fundação",
        description:
          "Início das operações focada em logística para eventos.",
        icon: "flag",
        isHighlight: true,
      },
      {
        year: "2015",
        title: "Primeira Expansão",
        description:
          "Aquisição de 20 novos caminhões e abertura da primeira filial estratégica em São Paulo.",
        icon: null,
        isHighlight: false,
      },
      {
        year: "2020",
        title: "Pivô Estratégico",
        description:
          "Durante a pandemia, a empresa redirecionou seu foco para o mercado de varejo, adaptando-se às novas demandas do e-commerce.",
        icon: null,
        isHighlight: false,
      },
      {
        year: "2023",
        title: "Liderança Regional",
        description:
          "Consolidação como líder de entregas pela Magalu e em eventos em SP.",
        icon: "trophy",
        isHighlight: true,
      },
    ],
  },
  stats: {
    items: getStatsByContext("about"),
  },
  leadership: {
    title: "Liderança",
    description:
      "Pessoas apaixonadas por logística que guiam a HJLOG rumo ao futuro.",
    team: [
      {
        name: "Roberto Junior",
        role: "CEO & Fundador",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBt77IBsTyJAuK3XMjMQTrOmV91M1V_2FtwsB-ckq7athH8h4SFkYukL2Re46RV1wygs2HBDv9aLKyjvqW277fljgEyxpKV_aSeFtxAsSVwKQVlawFUM2ghOPWeG0u9klQDv64uDCqwchd7uA6ZBkS-KhMRhQMnzF_UnRT0uJCxNhNthqsP4q4jfew8ZSLpsraA-_FUbuFEvPkE2jDNqzv6fmoat8aZAfLvdej6gFp6o9LGiBE8VOIQqA2yvSPTVgGYLbwJKHZyXO5q",
        alt: "Portrait of Roberto Silva, CEO",
      },
      {
        name: "Ana Souza",
        role: "Diretora de Operações",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAntlIl5_GXVVExqbgKbA2yWp5nPa4mhjAo3rk2RG5XG-YVphUpLUgtQnV4QeSh52P-IyAOJALAL_XGJ7HxYz5AhZuSQYGujNOvzQmCsfbK6TmVC2_KZKoNhtXpcem8qoH2ucWmW9p7hV6PvPglUCieGS_bSAy9HmLED6zryMfkopBf_PedIkb7zcpVk5NHmbznYzoflMxoHT8wUfFsLlWsRqkidPCcxIV5Ins-IsrGklk2rUH4Grunk6f-BRd6DSyTQN1c2-FzuEqC",
        alt: "Portrait of Ana Souza, Director of Operations",
      },
    ],
  },
  cta: {
    title: "Pronto para mover sua carga?",
    description:
      "Entre em contato com nossa equipe e descubra como podemos otimizar a logística do seu negócio com eficiência e segurança.",
    primaryButton: {
      label: "Fale Conosco",
      href: "/contato",
    },
    secondaryButton: {
      label: "Nossos Serviços",
      href: "/servicos",
    },
  },
};
