type StatContext = "homepage" | "about";

interface StatItem {
  id: string;
  value: string;
  label: string;
  contexts: StatContext[];
}

export const stats = {
  title: "Números que movem o Brasil",
  description:
    "Nossa experiência traduzida em dados que comprovam nossa eficiência.",
  items: [
    {
      id: "clients",
      value: "+500",
      label: "Clientes Ativos",
      contexts: ["about"],
    },
    {
      id: "years",
      value: "15",
      label: "Anos de Mercado",
      contexts: ["about", "homepage"],
    },
    {
      id: "fleet",
      value: "100+",
      label: "Caminhões",
      contexts: ["about", "homepage"],
    },
    {
      id: "punctuality",
      value: "99%",
      label: "Pontualidade",
      contexts: ["about", "homepage"],
    },
    {
      id: "support",
      value: "24/7",
      label: "Suporte",
      contexts: ["homepage"],
    },
  ] as StatItem[],
};

export const getStatsByContext = (context: StatContext) =>
  stats.items.filter((item) => item.contexts.includes(context));
