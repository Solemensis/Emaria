export const useCartStore = defineStore("cart-store", {
  state: () => ({
    items: [] as any[],
  }),

  actions: {
    addToCart(item: any) {
      const existingItem = this.items.find((i) => {
        if (i.sku == item.sku) {
          i.amount++;
          return i;
        }
      });
      if (!existingItem) {
        this.items.push(item);
      }
    },
  },

  // getters: {
  //   totalCount: (state) =>
  //     state.items.reduce((acc, item) => acc + item.amount, 0),
  //   subTotal: (state) =>
  //     state.items.reduce((acc, item) => acc + item.item.price * item.amount, 0),
  // },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot));
}
