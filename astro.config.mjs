import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  // ... otras integraciones ...
  site: "https://letvio.netlify.app", // <-- CAMBIA ESTO a tu URL de Netlify (o tu dominio final)
  base: "/",                        // <-- CAMBIA ESTO a "/"
});
