import reactRefresh from "@vitejs/plugin-react-refresh";
import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    https: {
      key: fs.readFileSync("../../certs/dev.audioboos.com.key"),
      cert: fs.readFileSync("../../certs/dev.audioboos.com.crt"),
    },
  },
  plugins: [reactRefresh()],
});
