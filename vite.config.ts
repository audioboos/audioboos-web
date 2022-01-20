import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    https: true
    // https: {
    //   key: fs.readFileSync('../certs/zerossl/private.key'),
    //   cert: fs.readFileSync('../certs/zerossl/certificate.crt'),
    // },
  },
  plugins: [mkcert({
    hosts: ['dev.audioboos.info']
  })],
  define: {
    "process.env": {}
  }
});
