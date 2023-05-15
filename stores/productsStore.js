export const useProductsStore = defineStore("products-store", {
  state: () => ({
    products: [],
  }),
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIsStore, import.meta.hot));
}
