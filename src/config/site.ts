const DEFAULT_SITE_URL = "https://hjlogtransportes.com.br";
const DEFAULT_SITE_NAME = "HJLOG Transportes";
const DEFAULT_CONTACT_EMAIL = "adm@hjlogtransportes.com.br";
const DEFAULT_PHONE_DISPLAY = "(11) 98221 7679";
const DEFAULT_PHONE_E164 = "+5511982217679";
const DEFAULT_INSTAGRAM_URL = "https://www.instagram.com/hjlogtransportes/";
const DEFAULT_FACEBOOK_URL = "https://www.facebook.com/hjlogtransportes";
const DEFAULT_WHATSAPP_URL = "https://wa.me/5511982217679";
const DEFAULT_SHARE_TITLE =
  "HJLOG Transportes | Soluções em Transporte e Logística";
const DEFAULT_SHARE_DESCRIPTION =
  "Transporte rodoviário com operação segura, ágil e confiável para cargas, eventos e logística empresarial em todo o Brasil.";
const DEFAULT_OG_IMAGE_PATH = "/social-share.jpg";
const DEFAULT_GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Av.+Dep.+Emilio+Carlos,+114+-+Lim%C3%A3o,+S%C3%A3o+Paulo+-+SP,+02720-000";

const trim = (value?: string): string => value?.trim() ?? "";

const normalizeSiteUrl = (value?: string): string =>
  trim(value).replace(/\/+$/, "") || DEFAULT_SITE_URL;

const normalizePath = (value = "/"): string => {
  if (!value) return "/";
  return value.startsWith("/") ? value : `/${value}`;
};

const isAbsoluteUrl = (value: string): boolean => /^https?:\/\//i.test(value);

export const siteConfig = {
  siteName: trim(import.meta.env.PUBLIC_SITE_NAME) || DEFAULT_SITE_NAME,
  siteUrl: normalizeSiteUrl(import.meta.env.PUBLIC_SITE_URL),
  contactEmail:
    trim(import.meta.env.PUBLIC_CONTACT_EMAIL) || DEFAULT_CONTACT_EMAIL,
  contactPhoneDisplay:
    trim(import.meta.env.PUBLIC_CONTACT_PHONE_DISPLAY) ||
    DEFAULT_PHONE_DISPLAY,
  contactPhoneE164:
    trim(import.meta.env.PUBLIC_CONTACT_PHONE_E164) || DEFAULT_PHONE_E164,
  instagramUrl:
    trim(import.meta.env.PUBLIC_INSTAGRAM_URL) || DEFAULT_INSTAGRAM_URL,
  facebookUrl:
    trim(import.meta.env.PUBLIC_FACEBOOK_URL) || DEFAULT_FACEBOOK_URL,
  whatsappUrl:
    trim(import.meta.env.PUBLIC_WHATSAPP_URL) || DEFAULT_WHATSAPP_URL,
  shareTitle:
    trim(import.meta.env.PUBLIC_SITE_SHARE_TITLE) || DEFAULT_SHARE_TITLE,
  shareDescription:
    trim(import.meta.env.PUBLIC_SITE_SHARE_DESCRIPTION) ||
    DEFAULT_SHARE_DESCRIPTION,
  ogImagePath:
    trim(import.meta.env.PUBLIC_SEO_OG_IMAGE_PATH) || DEFAULT_OG_IMAGE_PATH,
  googleMapsUrl: DEFAULT_GOOGLE_MAPS_URL,
};

export const buildSiteUrl = (pathname = "/"): string =>
  new URL(normalizePath(pathname), `${siteConfig.siteUrl}/`).toString();

export const buildAssetUrl = (assetPath: string): string =>
  isAbsoluteUrl(assetPath)
    ? assetPath
    : buildSiteUrl(normalizePath(assetPath));

export const sitePages = [
  {
    pathname: "/",
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    pathname: "/galeria",
    changefreq: "weekly",
    priority: "0.9",
  },
] as const;
