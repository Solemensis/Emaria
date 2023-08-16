// export const useFoo = () => {
//     return useState('foo', () => 'bar')
//   }

export const user = () => {
  return useSupabaseUser();
};

export const client = () => {
  return useSupabaseClient();
};

export const cartStore = () => {
  return useCartStore();
};
