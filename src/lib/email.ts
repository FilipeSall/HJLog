import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

export interface EmailPayload {
  name: string;
  email: string;
  subject?: string;
  phone?: string;
  company?: string;
  message: string;
  source: string;
}

export interface SendEmailResult {
  ok: boolean;
  errorCode?: string;
}

interface SendLeadEmailOptions {
  honeypot?: string;
  throttleMs?: number;
}

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  }
}

const ADMIN_EMAIL = "adm@hjlogtransportes.com.br";
const RECAPTCHA_SCRIPT_ID = "hjlog-recaptcha-script";
const DEFAULT_THROTTLE_MS = 60_000;

const EMAILJS_SERVICE_ID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID?.trim();
const EMAILJS_TEMPLATE_ID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID?.trim();
const EMAILJS_PUBLIC_KEY = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY?.trim();
const RECAPTCHA_SITE_KEY = import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY?.trim();

const sanitize = (value?: string): string => value?.trim() ?? "";

const getThrottleKey = (source: string): string => `hjlog:email:last-send:${source}`;

const isThrottled = (source: string, throttleMs: number): boolean => {
  try {
    const key = getThrottleKey(source);
    const lastSend = Number(localStorage.getItem(key) ?? "0");
    return Date.now() - lastSend < throttleMs;
  } catch {
    return false;
  }
};

const markSent = (source: string) => {
  try {
    const key = getThrottleKey(source);
    localStorage.setItem(key, String(Date.now()));
  } catch {
    // Ignora erros de storage para não quebrar o envio.
  }
};

const loadRecaptchaScript = async (siteKey: string): Promise<void> => {
  if (window.grecaptcha) {
    return;
  }

  const existingScript = document.getElementById(RECAPTCHA_SCRIPT_ID) as
    | HTMLScriptElement
    | null;

  if (existingScript) {
    await new Promise<void>((resolve, reject) => {
      if (window.grecaptcha) {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(), { once: true });
    });

    return;
  }

  await new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("recaptcha_script_error"));
    document.head.appendChild(script);
  });
};

const getRecaptchaToken = async (action: string): Promise<string | null> => {
  if (!RECAPTCHA_SITE_KEY) {
    return null;
  }

  await loadRecaptchaScript(RECAPTCHA_SITE_KEY);

  if (!window.grecaptcha) {
    return null;
  }

  await new Promise<void>((resolve) => {
    window.grecaptcha?.ready(() => resolve());
  });

  const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
  return token?.trim() || null;
};

const buildTemplateParams = (payload: EmailPayload, recaptchaToken: string) => {
  const now = new Date();

  return {
    to_email: ADMIN_EMAIL,
    source: payload.source,
    submitted_at: now.toLocaleString("pt-BR"),
    customer_name: sanitize(payload.name),
    customer_email: sanitize(payload.email),
    customer_phone: sanitize(payload.phone),
    customer_company: sanitize(payload.company),
    subject: sanitize(payload.subject),
    message: sanitize(payload.message),
    reply_to: sanitize(payload.email),
    recaptcha_token: recaptchaToken,
  };
};

export const sendLeadEmail = async (
  payload: EmailPayload,
  options: SendLeadEmailOptions = {},
): Promise<SendEmailResult> => {
  const throttleMs = options.throttleMs ?? DEFAULT_THROTTLE_MS;

  if (
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_TEMPLATE_ID ||
    !EMAILJS_PUBLIC_KEY ||
    !RECAPTCHA_SITE_KEY
  ) {
    return { ok: false, errorCode: "config_missing" };
  }

  if (sanitize(options.honeypot)) {
    return { ok: false, errorCode: "spam_detected" };
  }

  if (
    !sanitize(payload.name) ||
    !sanitize(payload.email) ||
    !sanitize(payload.message) ||
    !sanitize(payload.source)
  ) {
    return { ok: false, errorCode: "invalid_payload" };
  }

  if (isThrottled(payload.source, throttleMs)) {
    return { ok: false, errorCode: "rate_limited" };
  }

  try {
    const recaptchaToken = await getRecaptchaToken(`hjlog_${payload.source}`);

    if (!recaptchaToken) {
      return { ok: false, errorCode: "recaptcha_failed" };
    }

    const templateParams = buildTemplateParams(payload, recaptchaToken);

    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
      publicKey: EMAILJS_PUBLIC_KEY,
    });

    markSent(payload.source);
    return { ok: true };
  } catch (error) {
    if (error instanceof EmailJSResponseStatus) {
      return { ok: false, errorCode: `emailjs_${error.status}` };
    }

    return { ok: false, errorCode: "send_failed" };
  }
};
