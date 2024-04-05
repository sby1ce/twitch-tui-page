import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  ssr: true,
  server: {
    preset: "static",
    baseURL: process.env.BASE_PATH,
  },
});
