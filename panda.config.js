import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  // define the content to scan 👇🏻
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],
  exclude: [],
  outdir: "styled-system",
  strictTokens: false,
});
