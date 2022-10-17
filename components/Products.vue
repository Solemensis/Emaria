<script setup>
const { data: products } = await useFetch("https://fakestoreapi.com/products/");
// function handleFilter() {
//   products.value.filter((e) => e.category == 2);
// }
</script>

<template>
  <div>
    <!-- <h2>{{ useProductStore().items.get() }}</h2> -->
    <!-- <h2 class="shop-heading">Shop</h2> -->

    <div data-aos="zoom-in" class="categories">
      <img src="@/assets/images/cat0.png" alt="" />
      <img @click="handleFilter()" src="@/assets/images/cat1.png" alt="" />
      <img src="@/assets/images/cat2.png" alt="" />
      <img src="@/assets/images/cat3.png" alt="" />
      <img src="@/assets/images/cat4.png" alt="" />
    </div>

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
            ><button>View Item</button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  flex-direction: column;

  align-items: center;
  position: fixed;
  left: 5rem;
  top: 20rem;
}
.categories img {
  width: 6rem;
  border: rgb(186, 186, 186) 2px solid;
  transition: 0.1s;
  margin-bottom: 3px;
}

.categories img:hover {
  border: rgb(238, 116, 116) 2px solid;
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

.shop-heading {
  margin-bottom: 3rem;
  text-align: center;
  font-size: 5rem;
  font-weight: 700;
  padding-top: 15rem;
}

.grid {
  display: grid;
  grid-row-gap: 4rem;
  grid-column-gap: 2.5rem;
  width: 70%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 10rem auto;

  /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1rem)); */
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1rem));

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
