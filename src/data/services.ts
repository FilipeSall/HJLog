import corporateLogisticsImage from "../images/transportes.webp";
import showsEventsImage from "../images/evento.webp";

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
      image: showsEventsImage.src,
      imageAlt: "Transporte de estruturas para eventos",
      featured: true,
    },
    {
      title: "Armazenagem",
      description:
        "Instalações seguras e climatizadas para otimizar sua distribuição.",
      icon: "warehouse",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDal1Qrps1bWK4ZTKk7wEvsOYChTSBWCi1H8TqNgVlzMHQaphsn7VXIKKmEDnD4mfwF2GRgZWpOKQ568Jj7KH462AKRIeuzZte7JzXb08g04mMNDd0ZDXb2gHwQcimZ0tD89TlZCrm3S1Y-Nq1agHJ3c1GPQi9uAZmS-M6exqtMLQcfpTnKMXtuDCK2fd85JvaVE1BZooW3MIFgahLJwwCBRaiZuG9jTy4i9D58qBQ60PupZbeHoWkWvr30IqZRHqkCDXV9ej4E-2bt",
      imageAlt: "Armazém logístico",
      featured: false,
    },
    {
      title: "Logística Corporativa",
      description:
        "Transferência entre Centros de Distribuição e abastecimento de lojas. Atuação com grandes redes.",
      icon: "route",
      image: corporateLogisticsImage.src,
      imageAlt: "Operação de logística corporativa",
      featured: false,
    },
    {
      title: "Carga Dedicada",
      description:
        "Veículos exclusivos para sua carga com monitoramento dedicado.",
      icon: "inventory_2",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCPhWshxKHmWeqAXwhZrN2-3d8aJ1IEA47WMjIiArgwj4XZWCLSoiLxi8tGjI7e05SnEb1J6EpJQVmSzk6RBY8wNtkCVS1xAtAaU9yK6WwZlt5q7t-yhqttjxnosIgtmdrPFQ7SBsZituSTP8lZBygqcuWvkAs4OEhDHP_dm4Q3pBGDkDbpY3HTi5hHOqT-dR2aQmb7uQmXbwGkZY58CVa8LoJNRiBd5_qidFnRAHPXmrySZ-gHXLcgD4taHJ5S-gfvZiLMyxNPOIlO",
      imageAlt: "Carga segura",
      featured: false,
    },
  ],
};
