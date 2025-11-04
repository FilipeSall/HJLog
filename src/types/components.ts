export type NavLinkLabel =
  | string
  | {
      src: string;
      alt: string;
    };

export interface NavLinkProps {
  label: NavLinkLabel;
  path: string;
}
