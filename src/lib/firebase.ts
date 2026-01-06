import { initializeApp, type FirebaseApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp;
let analytics: Analytics | null = null;

/**
 * Inicializa o Firebase App
 * Deve ser chamado apenas no lado do cliente
 */
export const initFirebase = (): FirebaseApp => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }
  return app;
};

/**
 * Inicializa o Firebase Analytics
 * Deve ser chamado apenas no lado do cliente após o Firebase estar inicializado
 */
export const initAnalytics = (): Analytics | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  if (!analytics) {
    const firebaseApp = initFirebase();
    analytics = getAnalytics(firebaseApp);
  }

  return analytics;
};

/**
 * Retorna a instância do Firebase App
 */
export const getFirebaseApp = (): FirebaseApp => {
  if (!app) {
    throw new Error('Firebase não foi inicializado. Chame initFirebase() primeiro.');
  }
  return app;
};

/**
 * Retorna a instância do Firebase Analytics
 */
export const getFirebaseAnalytics = (): Analytics | null => {
  return analytics;
};
