<script setup>
import nuxtStorage from "nuxt-storage";

//check localstorage to display suggestedProducts further
const vcStorage = ref(nuxtStorage.localStorage.getData("viewedCategories"));

//look to vcStorage to find most viewed category
let highestCategory = "";
let highestValue = 0;
if (vcStorage) {
  for (const key in vcStorage.value) {
    if (vcStorage.value.hasOwnProperty(key)) {
      const value = vcStorage.value[key];
      // console.log(`Key: ${key}, Value: ${value}`);
      if (highestValue <= value) {
        highestValue = value;
        highestCategory = key;
      }
    }
    // console.log(highestCategory);
  }
}

//creating suggestedProducts object
const suggestedProducts = ref();

//fetch products according to mostViewedCategory (highestCategory)
onMounted(() => {
  setTimeout(async () => {
    if (highestCategory) {
      const query = groq`*[subCategory == "${highestCategory}"][0...4]`;
      const { data: fetchedProducts } = await useSanityQuery(query);

      //assign fetched products to suggestedProducts
      suggestedProducts.value = fetchedProducts.value;

      //   console.log(suggestedProducts.value);
    }
  }, 0);
});
</script>

<template>
  <div v-if="suggestedProducts && suggestedProducts.length">
    <h3>You'd like these...</h3>
    <div class="lil-product-cards">
      <NuxtLink
        :to="`/shop/${product._id}`"
        class="lil-product-card"
        v-for="product in suggestedProducts"
      >
        <img
          class="product-img"
          :src="
            `https://cdn.sanity.io/images/vsiu2eyv/production/` +
            removePrefix(product.image.asset._ref) +
            `.webp`
          "
          alt=""
        />

        <h4>{{ product.name }}</h4>
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
h3 {
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}
.lil-product-cards {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 4rem;
}
.lil-product-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.12) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.12) 0px 2px 6px 2px;
  border: rgb(218, 218, 218) 2px solid;
  border-radius: 0.6rem;
  padding: 1rem;
  transition: 0.2s;
  width: 12rem;
  color: black;
}
.lil-product-card:hover {
  transform: translateY(-0.2rem);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.lil-product-card:active button {
  animation: button-pop 0.3s ease-out;
}
.lil-product-card h4 {
  font-size: 0.9rem;
  text-align: center;
}
.product-img {
  width: 7rem;
}
</style>
