// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@formkit/auto-animate", "@nuxt/image"],
  alias: {
    "~": "/<srcDir>",
    "@": "/<srcDir>",
    "~~": "/<rootDir>",
    "@@": "/<rootDir>",
    assets: "/<srcDir>/assets",
    public: "/<srcDir>/public",
  },
  image: {
    // provider: "static",
    // dir: "public/images",
    provider: "ipx",
  },
});
