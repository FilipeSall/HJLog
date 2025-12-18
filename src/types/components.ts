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

export interface TrustBrandProps {
  name: string;
  icon: string;
}

export interface ServiceDetailFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceDetailHighlight {
  icon: string;
  title: string;
  subtitle: string;
  fullWidth?: boolean;
}

export interface ServiceDetail {
  id: string;
  icon: string;
  title: string;
  description: string;
  imagePosition: "left" | "right";
  features: ServiceDetailFeature[];
  highlights: ServiceDetailHighlight[];
  ctaText: string;
  ctaHref: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string | null;
  isHighlight: boolean;
}

export interface LeadershipMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

export interface StoryItem {
  icon: string;
  title: string;
  description: string;
}
