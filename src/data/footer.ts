import { siteConfig } from "../config/site";

export const footer = {
  company: {
    description:
      "Fornecendo soluções de transporte rodoviário confiáveis, eficientes e seguras para empresas em todo o território nacional.",
  },
  sections: [
    {
      title: "Contato",
      contact: {
        address: "Avenida Dep Emilio Carlos 114 Sala 08\nLimão - São Paulo/SP - 02720-000",
        phone: "(11) 98221 7679",
        email: siteConfig.contactEmail,
      },
    },
  ],
  bottom: {
    copyright: "© 2024 HJLOG Inc. Todos os direitos reservados.",
    links: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
    ],
  },
};
