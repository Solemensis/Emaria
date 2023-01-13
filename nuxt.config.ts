export default defineNuxtConfig({
  runtimeConfig: {
    DS_EP: process.env.DS_EP,
    public: {
      DS_EP: process.env.DS_EP,
    },
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
    pageTransition: { name: "my-transition", mode: "out-in" },
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
  ssr: false,
  // target: "static",
  // router: {
  //   base: "/general-e-commerce/",
  // },
});
