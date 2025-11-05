import type { NavLinkProps } from "../types/components";
import wpp from "../images/icons/whatsapp.svg";
import fb from "../images/icons/facebook-f.svg";
import insta from "../images/icons/instagram.svg";

export const internalLinks: NavLinkProps[] = [
  {
    label: "Início",
    path: "/",
  },
  {
    label: "Quem somos",
    path: "#quemsomos",
  },
  {
    label: "Serviços",
    path: "#servicos",
  },
  {
    label: "Contato",
    path: "#contato",
  },
];

export const externalLinks: NavLinkProps[] = [
  {
    label: {
      src: fb.src,
      alt: "facebook",
    },
    path: "https://www.facebook.com/HJLogtransportes",
    target: "_blank",
  },
  {
    label: {
      src: wpp.src,
      alt: "WhatsApp",
    },
    path: "https://wa.me/5511982217679",
    target: "_blank",
  },
  {
    label: {
      src: insta.src,
      alt: "instagram",
    },
    path: "https://www.instagram.com/hjlogtransportes",
    target: "_blank",
  },
];
