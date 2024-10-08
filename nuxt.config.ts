// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["/public/assets/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt", "@formkit/auto-animate", "@nuxt/image"],
  app: {
    pageTransition: {
      name: "rotate",
      mode: "out-in",
    },
  },
});
