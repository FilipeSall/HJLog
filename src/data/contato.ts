export const contato = {
  header: {
    tagline: "Atendimento",
    title: {
      line1: "Fale",
      line2: "Conosco",
    },
    description:
      "Estamos prontos para atender suas demandas logísticas. Entre em contato para cotações, dúvidas ou parcerias.",
  },
  channels: {
    title: "Canais de Atendimento",
    description:
      "Nossa equipe está disponível para oferecer suporte completo. Escolha o canal de sua preferência e fale com a gente.",
    items: [
      {
        icon: "mdi:map-marker",
        title: "Endereço",
        content: ["Avenida Dep Emilio Carlos 114 Sala 08", "Limão - São Paulo/SP - 02720-000"],
      },
      {
        icon: "mdi:phone",
        title: "Telefone",
        content: ["(11) 98221 7679"],
        subtitle: "Segunda a Sexta, das 8h às 18h",
      },
      {
        icon: "mdi:email",
        title: "E-mail",
        content: ["adm@hjlogtransportes.com.br", "comercial@hjlogtransportes.com.br"],
      },
    ],
  },
  socialMedia: {
    title: "Redes Sociais",
    links: [
      {
        label: "Instagram",
        icon: "mdi:instagram",
        href: "https://www.instagram.com/hjlogtransportes/",
      },
      {
        label: "Facebook",
        icon: "mdi:facebook",
        href: "https://www.facebook.com/hjlogtransportes",
      },
    ],
  },
  form: {
    title: "Envie sua mensagem",
    fields: {
      name: {
        label: "Nome Completo",
        placeholder: "Seu nome",
      },
      email: {
        label: "E-mail Corporativo",
        placeholder: "seu@email.com",
      },
      subject: {
        label: "Assunto",
        options: [
          "Cotação de Frete",
          "Parceria",
          "Trabalhe Conosco",
          "Outros Assuntos",
        ],
      },
      message: {
        label: "Mensagem",
        placeholder: "Descreva sua solicitação com detalhes...",
      },
    },
    submitLabel: "Enviar Mensagem",
  },
  map: {
    title: "Matriz HJLOG",
    description:
      "Estamos localizados em um ponto estratégico para facilitar a logística nacional.",
    linkLabel: "Ver no Google Maps →",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.4870326709447!2d-46.69126492346952!3d-23.504914260038296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8f0151c3c9d%3A0x7e8b8c4e8e8e8e8e!2sAv.%20Dep.%20Emilio%20Carlos%2C%20114%20-%20Lim%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002720-000!5e0!3m2!1spt-BR!2sbr!4v1734299999999!5m2!1spt-BR!2sbr",
  },
};
