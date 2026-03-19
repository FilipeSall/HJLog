import { siteConfig } from "../config/site";

export const navigation = {
  links: [
    {
      label: "Facebook",
      href: siteConfig.facebookUrl,
      external: true,
      icon: "mdi:facebook",
    },
    {
      label: "Instagram",
      href: siteConfig.instagramUrl,
      external: true,
      icon: "mdi:instagram",
    },
    {
      label: "WhatsApp",
      href: siteConfig.whatsappUrl,
      external: true,
      icon: "mdi:whatsapp",
    },
  ],
};
