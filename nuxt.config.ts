// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  transition: {
    name: "my-transition",
  },

  modules: [
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    // "nuxt-sweetalert2",
    // "vue-sweetalert2/nuxt",

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
  ssr: false,
});
