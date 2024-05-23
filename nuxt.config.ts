// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", 'nuxt-primevue', "@pinia/nuxt"],
  css: [
    "primevue/resources/themes/lara-light-teal/theme.css",
    "primeicons/primeicons.css",
  ],
  primevue: {
    cssLayerOrder: "tailwind-base, tailwind-utilities, primevue",
    usePrimeVue: true,
    components: {
      include: '*'
    }
  },
  devtools: { enabled: true }
})