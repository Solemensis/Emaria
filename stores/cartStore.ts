export const useCartStore = defineStore("cart-store", {
  state: () => ({
    items: [] as any[],
  }),

  actions: {
    addToCart(item: any) {
      const existingItem = this.items.find((i) => i.item.id == item.id);
      if (existingItem) {
        existingItem.amount++;
      } else {
        this.items.push({ item, amount: 1 });
      }
    },
  },

  getters: {
    totalCount: (state) =>
      state.items.reduce((acc, item) => acc + item.amount, 0),
    subTotal: (state) =>
      state.items.reduce((acc, item) => acc + item.item.price * item.amount, 0),
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
