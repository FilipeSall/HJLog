import "../.astro/types.d.ts";
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_CONTACT_EMAIL: string;
  readonly PUBLIC_CONTACT_PHONE_DISPLAY: string;
  readonly PUBLIC_CONTACT_PHONE_E164: string;
  readonly PUBLIC_INSTAGRAM_URL: string;
  readonly PUBLIC_FACEBOOK_URL: string;
  readonly PUBLIC_WHATSAPP_URL: string;
  readonly PUBLIC_SEO_OG_IMAGE_PATH: string;
  readonly PUBLIC_FIREBASE_API_KEY: string;
  readonly PUBLIC_FIREBASE_AUTH_DOMAIN: string;
  readonly PUBLIC_FIREBASE_PROJECT_ID: string;
  readonly PUBLIC_FIREBASE_STORAGE_BUCKET: string;
  readonly PUBLIC_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly PUBLIC_FIREBASE_APP_ID: string;
  readonly PUBLIC_FIREBASE_MEASUREMENT_ID: string;
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
  readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
