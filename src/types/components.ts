import type { ImageMetadata } from "astro";

export type NavLinkLabel =
  | string
  | {
    src: string;
    alt: string;
  };

export interface NavLinkProps {
  label: NavLinkLabel;
  path: string;
  target?: string;
}

export interface StepsItemProps {
  label: string;
  i?: number;
}

export interface ValueItemProps {
  icon: string | ImageMetadata;
  title: string;
  text: string;
}

export interface ServiceItemProps {
  title: string;
  text: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
}

export interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface StatItemProps {
  value: string;
  label: string;
}

export interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

export interface TrustBrandProps {
  name: string;
  icon: string;
}
