// import { $fetch } from "ohmyfetch";

export const useClickedStore = defineStore("clicked-store", {
  state: () => ({
    clicked1: false,
    clicked2: false,
    clicked3: false,
    clicked4: false,
    clicked5: false,
    specClicked1: false,
    specClicked2: false,
    specClicked3: false,
    specClicked4: false,
    specClicked5: false,
  }),

  //   actions: {
  //     get() {
  //       this.clicked1 = !this.clicked1;
  //     },
  //   },
});
