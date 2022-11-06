// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // head: {
  //   script: [
  //     {
  //       src: "https://unpkg.com/vue-infinite-loading@^2/dist/vue-infinite-loading.js",
  //     },
  //   ],
  // },
  transition: {
    name: "my-transition",
  },

  modules: [
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",

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

  // target: "static",
  ssr: false,

  // router: {
  //   base: "/general-e-commerce/",
  // },
});
