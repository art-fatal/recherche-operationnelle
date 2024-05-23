// https://nuxt.com/docs/api/configuration/nuxt-config
import {fileURLToPath} from "mlly";

export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", 'nuxt-primevue', "@pinia/nuxt"],
    css: [
        "primevue/resources/themes/lara-light-teal/theme.css",
        "primeicons/primeicons.css",
    ],
    primevue: {
        cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
        usePrimeVue: true,
        components: {
            include: '*'
        }
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
    devtools: {enabled: true},
    alias: {
        '@models': fileURLToPath(new URL('./models', import.meta.url)),
    },
    typescript: {
        shim: false
    }
})