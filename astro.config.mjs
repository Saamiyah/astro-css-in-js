import { defineConfig } from "astro/config";
import pandacss from "@pandacss/dev/astro";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [pandacss(), react()],
  output: "server",
  adapter: netlify()
});