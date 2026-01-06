# Firebase - Configuração e Uso

Este documento explica como o Firebase está configurado no projeto HJLog e como utilizá-lo.

## Configuração Atual

O Firebase foi configurado com as seguintes funcionalidades:

- **Firebase Analytics**: Rastreamento de eventos e métricas do site

## Arquivos de Configuração

### Variáveis de Ambiente

As credenciais do Firebase estão armazenadas em variáveis de ambiente no arquivo `.env`:

```env
PUBLIC_FIREBASE_API_KEY=...
PUBLIC_FIREBASE_AUTH_DOMAIN=...
PUBLIC_FIREBASE_PROJECT_ID=...
PUBLIC_FIREBASE_STORAGE_BUCKET=...
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
PUBLIC_FIREBASE_APP_ID=...
PUBLIC_FIREBASE_MEASUREMENT_ID=...
```

**Importante**: O arquivo `.env` está no `.gitignore` e não deve ser commitado. Use o arquivo `.env.example` como referência para criar seu próprio `.env`.

### Tipagem TypeScript

Os tipos das variáveis de ambiente estão definidos em [src/env.d.ts](src/env.d.ts).

### Módulo de Configuração

O Firebase está configurado em [src/lib/firebase.ts](src/lib/firebase.ts), que exporta as seguintes funções:

- `initFirebase()`: Inicializa o Firebase App
- `initAnalytics()`: Inicializa o Firebase Analytics (apenas no cliente)
- `getFirebaseApp()`: Retorna a instância do Firebase App
- `getFirebaseAnalytics()`: Retorna a instância do Firebase Analytics

### Inicialização Automática

O layout principal (`src/layouts/MainLayoult.astro`) inicializa o Firebase Analytics automaticamente quando a página carrega.

## Como Usar o Firebase Analytics

### Rastreando Eventos Personalizados

Para rastrear eventos personalizados em componentes React ou scripts Astro:

```typescript
import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from '../lib/firebase';

// Em um componente React ou script
const analytics = getFirebaseAnalytics();
if (analytics) {
  logEvent(analytics, 'button_click', {
    button_name: 'cta_contato',
    page: 'home'
  });
}
```

### Rastreando Visualizações de Página

```typescript
import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from '../lib/firebase';

const analytics = getFirebaseAnalytics();
if (analytics) {
  logEvent(analytics, 'page_view', {
    page_title: document.title,
    page_path: window.location.pathname
  });
}
```

### Rastreando Conversões

```typescript
import { logEvent } from 'firebase/analytics';
import { getFirebaseAnalytics } from '../lib/firebase';

const analytics = getFirebaseAnalytics();
if (analytics) {
  logEvent(analytics, 'conversion', {
    conversion_type: 'form_submission',
    value: 1
  });
}
```

## Adicionando Novos Serviços Firebase

### Firebase Authentication

Para adicionar autenticação:

```bash
npm install firebase
```

```typescript
// Em src/lib/firebase.ts
import { getAuth } from 'firebase/auth';

export const getFirebaseAuth = () => {
  const app = getFirebaseApp();
  return getAuth(app);
};
```

### Firebase Firestore

Para adicionar banco de dados:

```typescript
// Em src/lib/firebase.ts
import { getFirestore } from 'firebase/firestore';

export const getFirebaseFirestore = () => {
  const app = getFirebaseApp();
  return getFirestore(app);
};
```

### Firebase Storage

Para adicionar armazenamento de arquivos:

```typescript
// Em src/lib/firebase.ts
import { getStorage } from 'firebase/storage';

export const getFirebaseStorage = () => {
  const app = getFirebaseApp();
  return getStorage(app);
};
```

## Deployment

### Variáveis de Ambiente em Produção

Ao fazer deploy, certifique-se de configurar as variáveis de ambiente no seu provedor de hosting:

- Vercel: Configure em "Settings > Environment Variables"
- Netlify: Configure em "Site settings > Environment variables"
- Firebase Hosting: Use o arquivo `.env.production`

### Firebase Hosting (Opcional)

Se quiser fazer deploy usando Firebase Hosting:

1. Instale o Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login:
```bash
firebase login
```

3. Inicialize o Firebase Hosting:
```bash
firebase init hosting
```

4. Configure o build:
   - Public directory: `dist`
   - Configure as a single-page app: `No`
   - Overwrite index.html: `No`

5. Faça o deploy:
```bash
npm run build
firebase deploy --only hosting
```

## Recursos

- [Documentação Firebase](https://firebase.google.com/docs)
- [Firebase Analytics](https://firebase.google.com/docs/analytics)
- [Console Firebase](https://console.firebase.google.com/)
- [Astro + Firebase](https://docs.astro.build/en/guides/backend/google-firebase/)
