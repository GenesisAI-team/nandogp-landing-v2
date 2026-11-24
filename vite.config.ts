import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const REQUIRED_PUBLIC_ENV = [
  'VITE_GTM_ID',
  'VITE_ADS_WHATSAPP_SEND_TO',
  'VITE_ADS_PHONE_SEND_TO',
] as const;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const missing = REQUIRED_PUBLIC_ENV.filter((key) => !env[key]?.trim());

  if (missing.length > 0) {
    const message = `Missing public env vars: ${missing.join(', ')}. Google Ads conversion tracking will be disabled.`;

    if (process.env.VERCEL_ENV === 'production') {
      throw new Error(message);
    }

    console.warn(`[vite] ${message}`);
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
