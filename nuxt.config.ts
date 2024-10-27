import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: 'src',
  modules: ['nuxt-icon'],
  css: ['~/assets/main.scss'],
  plugins: ['~/plugins/fontawesome.js'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true }
})
