import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  integrations: [react(), tailwind()], // Añadimos react() al array de integraciones
  site: "https://letvio.netlify.app", // Tu URL de Netlify está bien
  base: "/",                          // La base está correcta como "/"
});