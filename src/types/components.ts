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