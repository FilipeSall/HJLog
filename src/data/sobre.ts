import { getStatsByContext } from "./stats";

export const sobre = {
  hero: {
    tagline: "Institucional",
    title: "Sobre Nós",
    description:
      "Conheça a trajetória da HJLOG!",
  },
  header: {
    tagline: "Quem Somos",
    title: "Nossa História",
    description:
      "A HJLOG está há mais de 10 anos no mercado, com foco principal em logística para shows e eventos. Transportamos equipamentos de bandas renomadas, estruturas de palco e sistemas de captação de som e imagem. Durante a pandemia, quando o setor de eventos foi paralisado, expandimos nossa atuação para o mercado de varejo. Hoje, atendemos grandes redes como a Magalu, realizando transferências entre Centros de Distribuição e abastecimento de lojas, sempre em operações B2B.",
  },
  story: {
    title: "Da Logística de Eventos ao Transporte de Varejo",
    items: [
      {
        icon: "mdi:calendar-star",
        title: "Especialistas em Eventos",
        description:
          "Há mais de 10 anos transportando equipamentos para shows e eventos pelo Brasil. Trabalhamos com bandas renomadas, transportando equipamentos de palco, som, iluminação e captação audiovisual. Atendemos produtoras e empresas de montagem de estruturas.",
      },
      {
        icon: "mdi:music",
        title: "Equipamentos Técnicos",
        description:
          "Nossa expertise vai além do transporte básico. Há anos movimentamos equipamentos sensíveis de gravação, captação de som e imagem para produções audiovisuais, sempre com o cuidado que esses equipamentos exigem.",
      },
      {
        icon: "mdi:sync",
        title: "Expansão Durante a Pandemia",
        description:
          "Com a paralisação do setor de eventos durante a pandemia, expandimos nossa atuação para o mercado de varejo. Aplicamos nossa experiência em logística complexa para atender grandes redes varejistas.",
      },
      {
        icon: "mdi:store",
        title: "Parceria com a Magalu",
        description:
          "Hoje operamos transferências entre Centros de Distribuição da Magalu e realizamos abastecimento de lojas. Nossa atuação é 100% B2B - não fazemos entregas porta a porta para cliente final.",
      },
    ],
  },
  timeline: {
    title: "Nossa Trajetória",
    events: [
      {
        year: "2014",
        title: "Fundação",
        description:
          "Início das operações focada em logística para shows e eventos musicais.",
        icon: "flag",
        isHighlight: true,
      },
      {
        year: "2017",
        title: "Consolidação no Setor",
        description:
          "Expansão da atuação com bandas renomadas e grandes produtoras de eventos pelo Brasil.",
        icon: null,
        isHighlight: false,
      },
      {
        year: "2020",
        title: "Expansão para Varejo",
        description:
          "Durante a pandemia, expandimos para o mercado de varejo, mantendo o foco em eventos e adicionando operações B2B.",
        icon: null,
        isHighlight: false,
      },
      {
        year: "2025",
        title: "Parceiro Magalu",
        description:
          "Consolidação como parceiro logístico da Magalu, operando transferências entre CDs e abastecimento de lojas.",
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
