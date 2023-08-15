export default defineNuxtConfig({
  modules: [
    "@nuxtjs/sanity",
    "@formkit/nuxt",
    "@nuxtjs/supabase",
    "@vueuse/nuxt",
    "@nuxt/image",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  sanity: {
    projectId: "vsiu2eyv",
    apiVersion: "2023-05-12",
  },
  app: {
    pageTransition: { name: "my-transition", mode: "out-in" },
    head: {
      title: "Emaria Shop",
    },
  },
  imports: {
    dirs: ["stores"],
  },

  // ssr: false,
  // target: "static",
});
