<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products/");
</script>

<template>
  <h2>Shop</h2>
  <div class="grid">
    <div
      v-for="(product, index) in products"
      :key="'product-' + index"
      class="card"
    >
      <img :class="'product-img-' + index" :src="product.image" />
      <p class="title">
        {{ product.title }}
      </p>
      <p class="price">${{ product.price }}</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 700;
  padding-top: 15rem;
}

* {
  font-size: 1.5rem;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.grid {
  display: grid;
  grid-row-gap: 4rem;
  grid-column-gap: 2.5rem;
  width: 70%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 0 auto;

  grid-template-columns: repeat(auto-fit, minmax(30rem, 1rem));

  /* grid-template-columns: 1fr 1fr 1fr; */
}
.card {
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 28rem;
  height: 35rem;
  padding: 2rem 2rem;
  background-color: white;
  border-radius: 3rem;
  box-shadow: rgba(60, 64, 67, 0.12) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.12) 0px 2px 6px 2px;
  border: rgb(179, 179, 179) 1px solid;
}

p {
  text-align: center;
}
.price {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  bottom: 5%;
}
.title {
  position: absolute;
  bottom: 15%;
  font-weight: bold;
  width: 80%;
}
img {
  max-width: 50%;
  position: absolute;
  top: 38%;
  transform: translate(0, -50%);
}

.product-img-2 {
  max-width: 58%;
}
.product-img-4 {
  max-width: 35%;
}

.product-img-6 {
  max-width: 45%;
}
.product-img-8 {
  max-width: 40%;
}
.product-img-11 {
  max-width: 40%;
}

.product-img-16 {
  max-width: 45%;
}
</style>
