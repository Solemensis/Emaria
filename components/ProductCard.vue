<script setup>
onMounted(() => {
  setTimeout(async () => {
    const query = groq`*[_type == "product"][0...12]`;
    const { data: fetchedProducts } = await useSanityQuery(query);

    useProductsStore().products = fetchedProducts.value;
  }, 0);
});
</script>

<template>
  <div
    data-aos="zoom-in"
    data-aos-duration="500"
    data-aos-easing="in-out-sine"
    v-if="useProductsStore().products && useProductsStore().products.length"
    v-for="(product, index) in useProductsStore().products"
    :key="product._id"
    class="card"
  >
    <NuxtLink :to="{ name: 'shop-id', params: { id: product._id } }">
      <div class="ghost-link"></div>
    </NuxtLink>
    <img
      :class="'product-img product-img-' + index"
      :src="
        `https://cdn.sanity.io/images/vsiu2eyv/production/` +
        removePrefix(product.image.asset._ref) +
        `.webp`
      "
    />

    <p class="title">
      {{ product.name }}
    </p>
    <div class="price-flex">
      <p class="price">${{ product.price }}</p>
      <button>View Item</button>
    </div>
  </div>
</template>

<style scoped>
p {
  text-align: center;
}

.card:hover {
  transform: translateY(-0.3rem);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
}
.product-img {
  max-width: 70%;
  position: absolute;
  top: 36%;
  transform: translate(0, -50%);
  transition: 0.4s;
}
.title {
  position: absolute;
  bottom: 19%;
  font-weight: bold;
  width: 80%;
  font-size: 1.7rem;
}
.price-flex {
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 23rem; */
  width: 90%;
  position: absolute;
  bottom: 2%;
  padding-top: 0.2rem;
}
.price {
  font-weight: 700;
  font-size: 2.1rem;
  margin-left: 1rem;
}
button {
  background-image: linear-gradient(
    to right,
    #ff8008 0%,
    #ffc837 51%,
    #ff8008 100%
  );
  margin: 1rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: background-position 0.4s, color 0.4s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}
button:active {
  animation: button-pop 0.3s ease-out;
}
.card {
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28rem;
  height: 36rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.12) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.12) 0px 2px 6px 2px;
  border: rgb(218, 218, 218) 2px solid;
  transition: 0.2s;
}
.ghost-link {
  width: 100%;
  height: 100%;
  z-index: 9999;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.card:active button {
  animation: button-pop 0.3s ease-out;
}
.absolute-ghost {
  width: 100%;
  height: 100%;
}
@media (orientation: portrait) {
  .price {
    font-size: 1.5rem !important;
  }
  .price-flex button {
    padding: 0.5rem 1rem !important;
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    font-size: 1rem !important;
    border-radius: 5px;
  }
  .title {
    font-size: 1.2rem !important;
  }
  .card {
    width: 18rem !important;
    height: 24rem !important;
    padding: 1rem !important;
  }
}
</style>
