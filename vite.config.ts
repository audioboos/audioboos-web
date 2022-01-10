import reactRefresh from '@vitejs/plugin-react-refresh';
import fs from 'fs';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    https: {
      key: fs.readFileSync('../certs/zerossl/private.key'),
      cert: fs.readFileSync('../certs/zerossl/certificate.crt'),
    },
  },
  define: {
    'process.env': {},
  },
});
