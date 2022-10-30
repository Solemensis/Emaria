<script setup>
// const { data: products } = await useFetch("https://fakestoreapi.com/products/");

let save = null;
let save2 = null;

// if (useProductStore().items.length < 20) {
// const { data: products } = await useFetch("https://fakestoreapi.com/products/");
const { data: products } = await useFetch(
  "https://9a9bfolc.directus.app/items/products/"
);

const assetsEndpoint = "https://9a9bfolc.directus.app/assets/";
useProductStore().items = products.value.data;
save2 = products.value.data;

// }
save = useProductStore().items;

// function handleFilter0() {
//   save = save2;
//   useProductStore().items = save;
//   clicked1.value = false;
//   clicked2.value = false;
//   clicked3.value = false;
//   clicked4.value = false;
// }

function handleFilter1() {
  if (clicked1.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Desktop"
    );
    spec1.value = true;
  } else {
    save = save2;
    useProductStore().items = save;
    spec1.value = false;
  }
  clicked1.value = !clicked1.value;
  clicked2.value = false;
  clicked3.value = false;
  clicked4.value = false;
  spec2.value = false;
  spec3.value = false;
  spec4.value = false;
}
function handleFilter2() {
  if (clicked2.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Men's Hoodie" || e.type == "Men's T-shirt"
    );
    spec2.value = true;
  } else {
    save = save2;
    useProductStore().items = save;
    spec2.value = false;
  }

  clicked2.value = !clicked2.value;
  clicked1.value = false;
  clicked3.value = false;
  clicked4.value = false;
  spec1.value = false;
  spec3.value = false;
  spec4.value = false;
}
function handleFilter3() {
  if (clicked3.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Women's Dress" || e.type == "Women's T-shirt"
    );
    spec3.value = true;
  } else {
    save = save2;
    useProductStore().items = save;
    spec3.value = false;
  }

  clicked3.value = !clicked3.value;
  clicked1.value = false;
  clicked2.value = false;
  clicked4.value = false;
  spec1.value = false;
  spec2.value = false;
  spec4.value = false;
}
function handleFilter4() {
  if (clicked4.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Hat"
    );
    spec4.value = true;
  } else {
    save = save2;
    useProductStore().items = save;
    spec4.value = false;
  }

  clicked4.value = !clicked4.value;
  clicked1.value = false;
  clicked2.value = false;
  clicked3.value = false;
  spec1.value = false;
  spec2.value = false;
  spec3.value = false;
}
function specificFilter1() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Desktop"
  );
}
function specificFilter2() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Laptop"
  );
}
function specificFilter3() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Men's Hoodie"
  );
}
function specificFilter4() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Men's T-shirt"
  );
}

let clicked1 = ref(false);
let clicked2 = ref(false);
let clicked3 = ref(false);
let clicked4 = ref(false);
let spec1 = ref(false);
let spec2 = ref(false);
let spec3 = ref(false);
let spec4 = ref(false);

// let showCat = ref(false);

// function showFunction() {
//   showCat.value = !showCat.value;
// }
// function hideFunction() {
//   showCat.value = !showCat.value;
// }
</script>

<template>
  <div>
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="in-out-sine"
      class="categories"
    >
      <!-- <div class="cat-flex">
        <img
          @click="handleFilter0()"
          class="endless-cat filter filter1"
          src="@/assets/images/cat0.png"
          alt=""
        />
      </div> -->
      <div class="cat-flex">
        <img
          class="filter filter2"
          :class="{ 'get-bigger': clicked1 }"
          @click="handleFilter1()"
          src="@/assets/images/cat1.png"
          alt=""
        /><transition name="my-transition">
          <div v-show="spec1">
            <h2 class="spec-head">Electronic</h2>
            <p class="specs" @click="specificFilter1()">Desktop</p>
            <p class="specs" @click="specificFilter2()">Laptop</p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter filter3"
          :class="{ 'get-bigger': clicked2 }"
          @click="handleFilter2()"
          src="@/assets/images/cat2.png"
          alt=""
        />
        <transition name="my-transition">
          <div v-show="spec2">
            <h2 class="spec-head">Men's</h2>
            <p class="specs" @click="specificFilter4()">T-shirt</p>
            <p class="specs" @click="specificFilter3()">Hoodie</p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter filter4"
          :class="{ 'get-bigger': clicked3 }"
          @click="handleFilter3()"
          src="@/assets/images/cat3.png"
          alt=""
        />
        <transition name="my-transition">
          <div v-show="spec3">
            <h2 class="spec-head">Women's</h2>
            <p class="specs">T-shirt</p>
            <p class="specs">Dress</p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter filter5"
          :class="{ 'get-bigger': clicked4 }"
          @click="handleFilter4()"
          src="@/assets/images/cat4.png"
          alt=""
        /><transition name="my-transition">
          <div v-show="spec4">
            <h2 class="spec-head">General</h2>
            <p class="specs">Shoe</p>
            <p class="specs">Hat</p>
            <p class="specs">Accessory</p>
          </div></transition
        >
      </div>
      <h2 class="listed-info">
        {{ useProductStore().items.length }} items listed.
      </h2>
    </div>

    <div class="grid">
      <div
        v-for="(product, index) in useProductStore().items"
        :key="product.id"
        class="card"
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="in-out-sine"
      >
        <img
          :class="'product-img product-img-' + index"
          :src="assetsEndpoint + product.thumbnail"
        />
        <p class="title">
          {{ product.name }}
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
.spec-head {
  color: rgb(108, 108, 108);
  font-size: 2rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(179, 179, 179);
}
.specs {
  transition: 0.3s;
}
.specs:hover {
  color: red;
}
.listed-info {
  position: absolute;
  bottom: -2rem;
  left: 1rem;
}
.get-bigger {
  padding: 3.5rem 0;
  border: rgb(238, 116, 116) 2px solid !important;
}
.cat-flex {
  display: flex;
  align-items: center;
  width: 10rem;
}
.cat-flex div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  /* height: 8rem; */
}
.cat-flex p {
  font-size: 1.6rem;
  margin-bottom: 0.2rem;
  font-weight: 600;
  text-align: start;
}
.filter {
  margin-right: 1rem;
}

.categories {
  display: flex;
  flex-direction: column;
  z-index: 9999;
  gap: 1rem;
  align-items: center;
  position: fixed;
  left: 2.5%;
  top: 18rem;
  /* border: rgb(198, 198, 198) 2px dashed; */
  padding: 2rem 1rem;
}

@media (orientation: portrait) {
  .categories {
    flex-direction: row !important;
    position: absolute !important;
    top: 11rem !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    padding: 1rem 1rem !important;
  }
  .categories img {
    width: 4.5rem !important;
  }
  .price-flex {
    width: 100% !important;
  }
  .price {
    font-size: 1.3rem !important;
  }
  .price-flex button {
    padding: 0.4rem 0.8rem !important;
    margin: 0.2rem !important;
    margin-right: 0.5rem !important;
    font-size: 1rem !important;
  }
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 12rem)) !important;
  }
  .card {
    width: 14rem !important;
    height: 21rem !important;
    padding: 0.4rem 0.4rem !important;
  }
  .title {
    font-size: 1.1rem !important;
  }
}

.categories img {
  width: 6rem;
  border: rgb(186, 186, 186) 2px solid;

  transition: transform 0.2s, border 0.2s, padding 0.3s;
}

.categories img:hover {
  border: rgb(238, 116, 116) 2px solid;
  transform: translateY(-0.35rem);
}

.product-img {
  max-width: 70%;
  position: absolute;
  top: 34%;
  transform: translate(0, -50%);
}

.title {
  position: absolute;
  bottom: 19%;
  font-weight: bold;
  width: 80%;
  font-size: 1.6rem;
}
.price-flex {
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 23rem;
  position: absolute;
  bottom: 2%;
  padding-top: 0.2rem;
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
  height: 36rem;
  padding: 2rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: rgba(60, 64, 67, 0.12) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.12) 0px 2px 6px 2px;
  border: rgb(179, 179, 179) 2px solid;
}

p {
  text-align: center;
}
</style>
