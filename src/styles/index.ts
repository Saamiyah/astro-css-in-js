import { definePreset } from "@pandacss/dev";

export const acmePreset = definePreset({
  theme: {
    extend: {
      tokens: {
        colors: { primary: "blue.500" },
      },
    },
  },
});
