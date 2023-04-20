// import { $fetch } from "ohmyfetch";

export const useClickedStore = defineStore('clicked-store', {
	state: () => ({
		category: '',
		specificCategory: ''
	})
});
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useClickedStore, import.meta.hot));
}
