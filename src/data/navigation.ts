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
    path: "/servicos",
  },
  {
    label: "Contato",
    path: "/contato",
  },
];

export const externalLinks: NavLinkProps[] = [
  {
    label: {
      src: fb.src,
      alt: "facebook",
    },
    path: "/",
  },
  {
    label: {
      src: wpp.src,
      alt: "WhatsApp",
    },
    path: "/",
  },
  {
    label: {
      src: insta.src,
      alt: "instagram",
    },
    path: "/",
  },
];
