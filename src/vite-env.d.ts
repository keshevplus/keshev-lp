/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_ADMIN_DASHBOARD_URL: string;
  readonly VITE_PHONE_DISPLAY: string;
  readonly VITE_PHONE_TEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
