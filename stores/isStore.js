export const useIsStore = defineStore("is-store", {
  state: () => ({
    items: [],
    itemsSave1: [],
  }),
});
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIsStore, import.meta.hot));
}
