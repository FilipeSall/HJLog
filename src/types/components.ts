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
}
