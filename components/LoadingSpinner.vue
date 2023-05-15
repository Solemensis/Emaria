<script setup>
import { vIntersectionObserver } from "@vueuse/components";

const isVisible = ref(false);
const route = useRoute();

//infinite scroll implementation
let onIntersectionObserver = async ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = isIntersecting;

    //if subCategory, fetch under the name of that subCategory with limit of 12.
    if (route.query.subCategory) {
      const query = groq`*[category == "${route.query.subCategory}"][${
        useProductsStore().products.length
      }...${useProductsStore().products.length + 12}]`;

      const { data: fetchedProducts } = await useSanityQuery(query);

      useProductsStore().products.push(...fetchedProducts.value);

      //if category, fetch under the name of that category with limit of 12.
    } else if (route.query.category) {
      const query = groq`*[category == "${route.query.category}"][${
        useProductsStore().products.length
      }...${useProductsStore().products.length + 12}]`;

      const { data: fetchedProducts } = await useSanityQuery(query);

      useProductsStore().products.push(...fetchedProducts.value);

      //if no category nor subCategory, fetch any product with limit of 12.
    } else {
      const query = groq`*[_type == "product"][${
        useProductsStore().products.length
      }...${useProductsStore().products.length + 12}]`;

      const { data: fetchedProducts } = await useSanityQuery(query);

      useProductsStore().products.push(...fetchedProducts.value);
    }
  }
};
</script>

<template>
  <div
    v-if="
      useProductsStore() &&
      useProductsStore().products &&
      useProductsStore().products.length &&
      isVisible == false
    "
    class="loading-ico"
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
