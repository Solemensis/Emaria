<script setup>
// import { useProducts } from "@/stores/product";
const { data: products } = await useFetch("https://fakestoreapi.com/products/");

// const { data: products } = useProducts;
const shoppingCart = reactive([]);

// function addToCart(product) {
//   if (shoppingCart.includes(product.title && product.price)) {
//     return;
//   } else {
//     shoppingCart.push({ title: product.title, price: product.price });
//   }
// }
</script>

<template>
  <!-- <h2>Shop</h2>
  <div class="filter page-format">
    <div class="categories">
      <img src="@/assets/images/123.png" alt="" />
      <img src="@/assets/images/123.png" alt="" />
      <img src="@/assets/images/123.png" alt="" />
      <img src="@/assets/images/123.png" alt="" />
    </div>
  </div> -->

  <div class="grid">
    <div
      v-for="(product, index) in products"
      :key="product.id"
      class="card"
      data-aos="zoom-in"
    >
      <img :class="'product-img product-img-' + index" :src="product.image" />
      <p class="title">
        {{ product.title }}
      </p>

      <div class="price-flex">
        <p class="price">${{ product.price }}</p>
        <NuxtLink :to="{ name: 'shop-id', params: { id: product.id } }"
          ><button @click="addToCart(product)">View Item</button>
        </NuxtLink>
      </div>
    </div>
  </div>
  <div>
    <h2>shopping cart</h2>
    <p>{{ shoppingCart }}</p>
  </div>
</template>

<style scoped>
.filter {
  background-color: rgb(240, 206, 255);
  display: flex;
  justify-content: center;
}
.categories {
  display: flex;

  align-items: center;
}
.categories img {
  width: 8rem;
}
.product-img {
  max-width: 50%;
  position: absolute;
  top: 32%;
  transform: translate(0, -50%);
}

.title {
  position: absolute;
  bottom: 23%;
  font-weight: bold;
  width: 80%;
  font-size: 1.52rem;
}
.price-flex {
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 21rem;
  position: absolute;
  bottom: 2%;
  padding-top: 0.5rem;
}
.price {
  font-weight: 700;
  font-size: 2rem;
  margin-left: 1rem;
}

button {
  background-image: linear-gradient(
    to right,
    #ff8008 0%,
    #ffc837 51%,
    #ff8008 100%
  );
  margin: 10px;
  padding: 5px 15px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.4s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

button:active {
  animation: button-pop 0.3s ease-out;
}

button:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

h2 {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 5rem;
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
  margin-top: 10rem;
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
  height: 40rem;
  padding: 2rem 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.12) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.12) 0px 2px 6px 2px;
  border: rgb(179, 179, 179) 2px solid;
}

p {
  text-align: center;
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
