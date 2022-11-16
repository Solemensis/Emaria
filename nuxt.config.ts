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
  app: {
    head: {
      title: "Emaria Shop",
      script: [
        {
          hid: "gtm",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PBVMBQW');`,
          type: "text/javascript",
        },
      ],
    },
  },

  imports: {
    dirs: ["stores"],
  },

  // target: "static",
  ssr: false,

  // router: {
  //   base: "/general-e-commerce/",
  // },
});
