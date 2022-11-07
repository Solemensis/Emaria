// import { $fetch } from "ohmyfetch";

export const useIsStore = defineStore("is-store", {
  state: () => ({
    items: [],
    itemsSave1: [],
  }),

  //   actions: {
  //     async get() {
  //       this.items = await $fetch("https://fakestoreapi.com/products/");

  //       //
  //     },
  //      savee() {
  //       this.items = await $fetch("https://fakestoreapi.com/products/");

  //       //
  //     },

  //   },
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIsStore, import.meta.hot));
}
