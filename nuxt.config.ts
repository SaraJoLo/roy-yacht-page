import { build } from "nuxt";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: 'src/',
  pages: true,
  build: {
    transpile: [],
  },

  compatibilityDate: '2024-10-27'
});