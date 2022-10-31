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

function handleFilter1() {
  if (clicked1.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Desktop"
    );
  } else {
    save = save2;
    useProductStore().items = save;
  }
  clicked1.value = !clicked1.value;
  clicked2.value = false;
  clicked3.value = false;
  clicked4.value = false;
  clicked5.value = false;

  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function handleFilter2() {
  if (clicked2.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Men's Hoodie" ||
        e.type == "Men's T-shirt" ||
        e.type == "Men's Hat"
    );
  } else {
    save = save2;
    useProductStore().items = save;
  }

  clicked2.value = !clicked2.value;
  clicked1.value = false;
  clicked3.value = false;
  clicked4.value = false;
  clicked5.value = false;

  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked5.value = false;
}
function handleFilter3() {
  if (clicked3.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Women's Dress" || e.type == "Women's T-shirt"
    );
  } else {
    save = save2;
    useProductStore().items = save;
  }

  clicked3.value = !clicked3.value;
  clicked1.value = false;
  clicked2.value = false;
  clicked4.value = false;
  clicked5.value = false;

  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function handleFilter4() {
  if (clicked4.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) => e.type == "Bag"
    );
  } else {
    save = save2;
    useProductStore().items = save;
  }

  clicked4.value = !clicked4.value;
  clicked1.value = false;
  clicked2.value = false;
  clicked3.value = false;
  clicked5.value = false;

  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function handleFilter5() {
  if (clicked5.value == false) {
    save = save2;
    useProductStore().items = save;
    useProductStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Alcohol" ||
        e.type == "Trading Card Game" ||
        e.type == "Gaming Chair"
    );
  } else {
    save = save2;
    useProductStore().items = save;
  }

  clicked5.value = !clicked5.value;
  clicked1.value = false;
  clicked2.value = false;
  clicked3.value = false;
  clicked4.value = false;

  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter1_1() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Television"
  );
  specClicked1.value = !specClicked1.value;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter1_2() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Desktop"
  );
  specClicked2.value = !specClicked2.value;
  specClicked1.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter1_3() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Notebook"
  );
  specClicked3.value = !specClicked3.value;
  specClicked1.value = false;
  specClicked2.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter1_4() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "OEM"
  );
  specClicked4.value = !specClicked4.value;
  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked5.value = false;
}
function specificFilter1_5() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Pc Accessory"
  );
  specClicked5.value = !specClicked5.value;
  specClicked1.value = false;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
}
function specificFilter2_1() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Men's T-shirt"
  );
  specClicked1.value = !specClicked1.value;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter2_2() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Men's Hoodie"
  );
  specClicked2.value = !specClicked2.value;
  specClicked1.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter2_3() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Men's Hat"
  );
  specClicked3.value = !specClicked3.value;
  specClicked1.value = false;
  specClicked2.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter3_1() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Women's T-shirt"
  );
  specClicked1.value = !specClicked1.value;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter3_2() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Women's Dress"
  );
  specClicked2.value = !specClicked2.value;
  specClicked1.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter3_3() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Women's Accessory"
  );
  specClicked3.value = !specClicked3.value;
  specClicked1.value = false;
  specClicked2.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter4_1() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Shoe"
  );
  specClicked1.value = !specClicked1.value;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter4_2() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Bag"
  );
  specClicked2.value = !specClicked2.value;
  specClicked1.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter5_1() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Gaming Chair"
  );
  specClicked1.value = !specClicked1.value;
  specClicked2.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter5_2() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Trading Card Game"
  );
  specClicked2.value = !specClicked2.value;
  specClicked1.value = false;
  specClicked3.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}
function specificFilter5_3() {
  save = save2;
  useProductStore().items = save;
  useProductStore().items = useProductStore().items.filter(
    (e) => e.type == "Alcohol"
  );
  specClicked3.value = !specClicked3.value;
  specClicked1.value = false;
  specClicked2.value = false;
  specClicked4.value = false;
  specClicked5.value = false;
}

let clicked1 = ref(false);
let clicked2 = ref(false);
let clicked3 = ref(false);
let clicked4 = ref(false);
let clicked5 = ref(false);

let specClicked1 = ref(false);
let specClicked2 = ref(false);
let specClicked3 = ref(false);
let specClicked4 = ref(false);
let specClicked5 = ref(false);
</script>

<template>
  <div>
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      data-aos-easing="in-out-sine"
      class="categories"
    >
      <div class="cat-flex">
        <img
          class="filter"
          :class="{ 'get-bigger': clicked1 }"
          @click="handleFilter1()"
          src="@/assets/images/cat1.png"
          alt=""
        /><transition name="my-transition">
          <div v-show="clicked1">
            <h2 class="spec-head">Electronic</h2>
            <p
              :class="{ 'get-red': specClicked1 }"
              class="specs"
              @click="specificFilter1_1()"
            >
              TV
            </p>
            <p
              :class="{ 'get-red': specClicked2 }"
              class="specs"
              @click="specificFilter1_2()"
            >
              Desktop
            </p>
            <p
              :class="{ 'get-red': specClicked3 }"
              class="specs"
              @click="specificFilter1_3()"
            >
              Notebook
            </p>
            <p
              :class="{ 'get-red': specClicked4 }"
              class="specs"
              @click="specificFilter1_4()"
            >
              OEM
            </p>
            <p
              :class="{ 'get-red': specClicked5 }"
              class="specs"
              @click="specificFilter1_5()"
            >
              Pc Accessory
            </p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter"
          :class="{ 'get-bigger': clicked2 }"
          @click="handleFilter2()"
          src="@/assets/images/cat2.png"
          alt=""
        />
        <transition name="my-transition">
          <div v-show="clicked2">
            <h2 class="spec-head">Men's</h2>
            <p
              :class="{ 'get-red': specClicked1 }"
              class="specs"
              @click="specificFilter2_1()"
            >
              T-shirt
            </p>
            <p
              :class="{ 'get-red': specClicked2 }"
              class="specs"
              @click="specificFilter2_2()"
            >
              Hoodie
            </p>
            <p
              :class="{ 'get-red': specClicked3 }"
              class="specs"
              @click="specificFilter2_3()"
            >
              Hat
            </p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter"
          :class="{ 'get-bigger': clicked3 }"
          @click="handleFilter3()"
          src="@/assets/images/cat3.png"
          alt=""
        />
        <transition name="my-transition">
          <div v-show="clicked3">
            <h2 class="spec-head">Women's</h2>
            <p
              :class="{ 'get-red': specClicked1 }"
              class="specs"
              @click="specificFilter3_1()"
            >
              T-shirt
            </p>
            <p
              :class="{ 'get-red': specClicked2 }"
              class="specs"
              @click="specificFilter3_2()"
            >
              Dress
            </p>
            <p
              :class="{ 'get-red': specClicked3 }"
              class="specs"
              @click="specificFilter3_3()"
            >
              Accessory
            </p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter"
          :class="{ 'get-bigger': clicked4 }"
          @click="handleFilter4()"
          src="@/assets/images/cat4.png"
          alt=""
        /><transition name="my-transition">
          <div v-show="clicked4">
            <h2 class="spec-head">General</h2>
            <p
              :class="{ 'get-red': specClicked1 }"
              class="specs"
              @click="specificFilter4_1()"
            >
              Shoe
            </p>
            <p
              :class="{ 'get-red': specClicked2 }"
              class="specs"
              @click="specificFilter4_2()"
            >
              Bag
            </p>
          </div></transition
        >
      </div>
      <div class="cat-flex">
        <img
          class="filter"
          :class="{ 'get-bigger': clicked5 }"
          @click="handleFilter5()"
          src="@/assets/images/cat5.png"
          alt=""
        /><transition name="my-transition">
          <div v-show="clicked5">
            <h2 class="spec-head">Stuff</h2>
            <p
              :class="{ 'get-red': specClicked1 }"
              class="specs"
              @click="specificFilter5_1()"
            >
              <nobr>Gaming Ch.</nobr>
            </p>
            <p
              :class="{ 'get-red': specClicked2 }"
              class="specs"
              @click="specificFilter5_2()"
            >
              TCG
            </p>
            <p
              :class="{ 'get-red': specClicked3 }"
              class="specs"
              @click="specificFilter5_3()"
            >
              Alcohol
            </p>
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
  font-size: 1.9rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgb(179, 179, 179);
}
.specs {
  transition: 0.3s;
}
.specs:hover {
  color: rgb(235, 93, 93);
}
.listed-info {
  position: absolute;
  bottom: -2rem;
  left: 1rem;
}
.get-bigger {
  padding: 3.7rem 0;
  border: rgb(238, 116, 116) 2px solid !important;
}
.get-red {
  color: rgb(235, 93, 93);
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
  font-size: 1.4rem;
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

  transition: transform 0.3s, border 0.6s, padding 0.6s;
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
