<script setup>
import { vIntersectionObserver } from '@vueuse/components';
const config = useRuntimeConfig();

const isVisible = ref(false);

let onIntersectionObserver = async ([{ isIntersecting }]) => {
	if (isIntersecting) {
		isVisible.value = isIntersecting;
		const newProducts = await fetchNewProducts(productsToShow, useIsStore().items.length);
		useIsStore().items.push(...newProducts);
	}
};

let fetchNewProducts = async (limit, skip) => {
	let { data: products } = await useFetch(
		`${config.DS_EP}/items/products?limit=${limit}&offset=${skip}`,
		{
			initialCache: false
		}
	);
	return products.value.data;
};

const productsToShow = 12;

if (useIsStore().itemsSave1.length === 0) {
	useIsStore().items = await fetchNewProducts(productsToShow, 0);
	useIsStore().itemsSave1 = useIsStore().items;
}
</script>

<template>
	<div
		class="loading-ico"
		v-if="useIsStore().items.length && !useClickedStore().category"
		v-show="useIsStore().items.length != useProductStore().items.length"
		v-intersection-observer="onIntersectionObserver"
	>
		<div class="loadingio-spinner-eclipse-3nrzga94szj">
			<div class="ldio-j4mceyzrqbg">
				<div></div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.loading-ico {
	display: flex;
	width: 100vw;
	justify-content: center;
	align-items: center;
}
@keyframes ldio-j4mceyzrqbg {
	0% {
		transform: rotate(0deg);
	}
	50% {
		transform: rotate(180deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
.ldio-j4mceyzrqbg div {
	position: absolute;
	animation: ldio-j4mceyzrqbg 1s linear infinite;
	width: 160px;
	height: 160px;
	top: 20px;
	left: 20px;
	border-radius: 50%;
	box-shadow: 0 4px 0 0 #e15b64;
	transform-origin: 80px 82px;
}
.loadingio-spinner-eclipse-3nrzga94szj {
	width: 200px;
	height: 200px;
	display: inline-block;
	overflow: hidden;
	background: #ffffff;
}
.ldio-j4mceyzrqbg {
	width: 100%;
	height: 100%;
	position: relative;
	transform: translateZ(0) scale(1);
	backface-visibility: hidden;
	transform-origin: 0 0;
}
.ldio-j4mceyzrqbg div {
	box-sizing: content-box;
}
</style>
