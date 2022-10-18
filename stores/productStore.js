// import { $fetch } from "ohmyfetch";

export const useProductStore = defineStore("product-store", {
  state: () => ({
    items: [],
  }),

  //   actions: {
  //     async get() {
  //       this.items = await $fetch("https://fakestoreapi.com/products/");

  //       //
  //     },
  //   },
});
