/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GTM_ID?: string;
  readonly VITE_ADS_WHATSAPP_SEND_TO?: string;
  readonly VITE_ADS_PHONE_SEND_TO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
