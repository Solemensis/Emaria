// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["stores"],
  },
  target: "static",
});
