<script setup>
// const { data: products } = await useFetch("https://fakestoreapi.com/products/");
// import InfiniteLoading from "vue-infinite-loading";
// import { useIntersectionObserver } from "@vueuse/core";
import { vIntersectionObserver } from "@vueuse/components";

const isVisible = ref(false);

// this went
// function onIntersectionObserver([{ isIntersecting }]) {
//   if (isIntersecting) {
//     isVisible.value = isIntersecting;

//     let anan = async () => {
//       const newUsers = await getUsers(usersToShow, products.value.length);

//       products.value.push(...newUsers);
//     };
//     anan();
//   }
// }

// to this
let onIntersectionObserver = async ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = isIntersecting;

    const newUsers = await getUsers(
      usersToShow,
      // useProductStore().items.length
      useIsStore().items.length
    );
    useIsStore().items.push(...newUsers);
    // useProductStore().items.push(...newUsers);
  }
};

let getUsers = async (limit, skip) => {
  let { data: products } = await useFetch(
    `https://9a9bfolc.directus.app/items/products?limit=${limit}&offset=${skip}`,
    {
      initialCache: false,
    }
  );

  return products.value.data;
};

const usersToShow = 12;

if (useProductStore().items.length == 0) {
  let { data: wholeFetch } = await useFetch(
    `https://9a9bfolc.directus.app/items/products?limit=155`
  );
  useProductStore().items = wholeFetch.value.data;
}

// useProductStore().items = await getUsers(usersToShow, 0);

// const getUsersOnScroll = async () => {
//   const newUsers = await getUsers(usersToShow, products.value.length);

//   products.value.push(...newUsers);
// };

// useInfiniteScroll(
//   listEl,
//   async () => {
//     await getUsersOnScroll();
//   },
//   {
//     distance: 10,
//   }
// );

// if (useIsStore().items.length === 0) {
//   useIsStore().items = await getUsers(usersToShow, 0);
//   save2 = useIsStore().items;
// } else {
//   useIsStore().items = save2;
// }

// if (useProductStore().items.length < 20) {
// const { data: products } = await useFetch("https://fakestoreapi.com/products/");

// const { data: products } = await useFetch(
//   // "https://9a9bfolc.directus.app/items/products?sort=-type&limit=150"
//   "https://9a9bfolc.directus.app/items/products?sort=-type&limit=2&page=1"
// );

const assetsEndpoint = "https://9a9bfolc.directus.app/assets/";
// useProductStore().items = products;
// useProductStore().items = products.value.data;
// save2 = products.value.data;

// }

if (useIsStore().itemsSave1.length === 0) {
  useIsStore().items = await getUsers(usersToShow, 0);
  useIsStore().itemsSave1 = useIsStore().items;
  // } else {

  //    useIsStore().items =useIsStore().itemsSave1
}

function handleFilter1() {
  if (useClickedStore().clicked1 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Desktop" ||
        e.type == "Television" ||
        e.type == "Notebook" ||
        e.type == "OEM" ||
        e.type == "Pc Accessory"
    );
  } else {
    useIsStore().items = useIsStore().itemsSave1;
  }
  useClickedStore().clicked1 = !useClickedStore().clicked1;
  useClickedStore().clicked2 = false;
  useClickedStore().clicked3 = false;
  useClickedStore().clicked4 = false;
  useClickedStore().clicked5 = false;

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function handleFilter2() {
  if (useClickedStore().clicked2 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Men's Hoodie" ||
        e.type == "Men's T-shirt" ||
        e.type == "Men's Hat"
    );
  } else {
    useIsStore().items = useIsStore().itemsSave1;
  }

  useClickedStore().clicked1 = false;
  useClickedStore().clicked2 = !useClickedStore().clicked2;
  useClickedStore().clicked3 = false;
  useClickedStore().clicked4 = false;
  useClickedStore().clicked5 = false;

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function handleFilter3() {
  if (useClickedStore().clicked3 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Women's Dress" ||
        e.type == "Women's T-shirt" ||
        e.type == "Women's Accessory"
    );
  } else {
    useIsStore().items = useIsStore().itemsSave1;
  }

  useClickedStore().clicked1 = false;
  useClickedStore().clicked2 = false;
  useClickedStore().clicked3 = !useClickedStore().clicked3;
  useClickedStore().clicked4 = false;
  useClickedStore().clicked5 = false;

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function handleFilter4() {
  if (useClickedStore().clicked4 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Bag" || e.type == "Shoes"
    );
  } else {
    useIsStore().items = useIsStore().itemsSave1;
  }

  useClickedStore().clicked1 = false;
  useClickedStore().clicked2 = false;
  useClickedStore().clicked3 = false;
  useClickedStore().clicked4 = !useClickedStore().clicked4;
  useClickedStore().clicked5 = false;

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function handleFilter5() {
  if (useClickedStore().clicked5 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Alcohol" ||
        e.type == "Trading Card Game" ||
        e.type == "Gaming Chair"
    );
  } else {
    useIsStore().items = useIsStore().itemsSave1;
  }

  useClickedStore().clicked1 = false;
  useClickedStore().clicked2 = false;
  useClickedStore().clicked3 = false;
  useClickedStore().clicked4 = false;
  useClickedStore().clicked5 = !useClickedStore().clicked5;

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter1_1() {
  if (useClickedStore().specClicked1 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Television"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Desktop" ||
        e.type == "Television" ||
        e.type == "Notebook" ||
        e.type == "OEM" ||
        e.type == "Pc Accessory"
    );
  }
  useClickedStore().specClicked1 = !useClickedStore().specClicked1;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter1_2() {
  if (useClickedStore().specClicked2 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Desktop"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Desktop" ||
        e.type == "Television" ||
        e.type == "Notebook" ||
        e.type == "OEM" ||
        e.type == "Pc Accessory"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = !useClickedStore().specClicked2;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter1_3() {
  if (useClickedStore().specClicked3 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Notebook"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Desktop" ||
        e.type == "Television" ||
        e.type == "Notebook" ||
        e.type == "OEM" ||
        e.type == "Pc Accessory"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = !useClickedStore().specClicked3;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter1_4() {
  if (useClickedStore().specClicked4 == false) {
    useIsStore().items = useProductStore().items.filter((e) => e.type == "OEM");
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Desktop" ||
        e.type == "Television" ||
        e.type == "Notebook" ||
        e.type == "OEM" ||
        e.type == "Pc Accessory"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = !useClickedStore().specClicked4;
  useClickedStore().specClicked5 = false;
}
// function specificFilter1_5() {
//   useIsStore().items = useProductStore().items.filter(
//     (e) => e.type == "Pc Accessory"
//   );
//   useClickedStore().specClicked1 = false;
//   useClickedStore().specClicked2 = false;
//   useClickedStore().specClicked3 = false;
//   useClickedStore().specClicked4 = false;
//   useClickedStore().specClicked5 = !useClickedStore().specClicked5;
// }
function specificFilter2_1() {
  if (useClickedStore().specClicked1 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Men's T-shirt"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Men's Hoodie" ||
        e.type == "Men's T-shirt" ||
        e.type == "Men's Hat"
    );
  }

  useClickedStore().specClicked1 = !useClickedStore().specClicked1;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter2_2() {
  if (useClickedStore().specClicked2 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Men's Hoodie"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Men's Hoodie" ||
        e.type == "Men's T-shirt" ||
        e.type == "Men's Hat"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = !useClickedStore().specClicked2;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter2_3() {
  if (useClickedStore().specClicked3 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Men's Hat"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Men's Hoodie" ||
        e.type == "Men's T-shirt" ||
        e.type == "Men's Hat"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = !useClickedStore().specClicked3;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter3_1() {
  if (useClickedStore().specClicked1 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Women's T-shirt"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Women's Dress" ||
        e.type == "Women's T-shirt" ||
        e.type == "Women's Accessory"
    );
  }

  useClickedStore().specClicked1 = !useClickedStore().specClicked1;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter3_2() {
  if (useClickedStore().specClicked2 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Women's Dress"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Women's Dress" ||
        e.type == "Women's T-shirt" ||
        e.type == "Women's Accessory"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = !useClickedStore().specClicked2;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter3_3() {
  if (useClickedStore().specClicked3 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Women's Accessory"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Women's Dress" ||
        e.type == "Women's T-shirt" ||
        e.type == "Women's Accessory"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = !useClickedStore().specClicked3;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter4_1() {
  if (useClickedStore().specClicked1 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Shoes"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Bag" || e.type == "Shoes"
    );
  }

  useClickedStore().specClicked1 = !useClickedStore().specClicked1;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter4_2() {
  if (useClickedStore().specClicked2 == false) {
    useIsStore().items = useProductStore().items.filter((e) => e.type == "Bag");
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Bag" || e.type == "Shoes"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = !useClickedStore().specClicked2;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter5_1() {
  if (useClickedStore().specClicked1 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Gaming Chair"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Alcohol" ||
        e.type == "Trading Card Game" ||
        e.type == "Gaming Chair"
    );
  }

  useClickedStore().specClicked1 = !useClickedStore().specClicked1;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter5_2() {
  if (useClickedStore().specClicked2 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Trading Card Game"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Alcohol" ||
        e.type == "Trading Card Game" ||
        e.type == "Gaming Chair"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = !useClickedStore().specClicked2;
  useClickedStore().specClicked3 = false;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}
function specificFilter5_3() {
  if (useClickedStore().specClicked3 == false) {
    useIsStore().items = useProductStore().items.filter(
      (e) => e.type == "Alcohol"
    );
  } else {
    useIsStore().items = useProductStore().items.filter(
      (e) =>
        e.type == "Alcohol" ||
        e.type == "Trading Card Game" ||
        e.type == "Gaming Chair"
    );
  }

  useClickedStore().specClicked1 = false;
  useClickedStore().specClicked2 = false;
  useClickedStore().specClicked3 = !useClickedStore().specClicked3;
  useClickedStore().specClicked4 = false;
  useClickedStore().specClicked5 = false;
}

function allClickedFalse() {
  if (
    useClickedStore().clicked1 == false &&
    useClickedStore().clicked2 == false &&
    useClickedStore().clicked3 == false &&
    useClickedStore().clicked4 == false &&
    useClickedStore().clicked5 == false &&
    useClickedStore().specClicked1 == false &&
    useClickedStore().specClicked2 == false &&
    useClickedStore().specClicked3 == false &&
    useClickedStore().specClicked4 == false &&
    useClickedStore().specClicked5 == false
  ) {
    return true;
  }
}
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
          :class="{ 'get-bigger': useClickedStore().clicked1 }"
          @click="handleFilter1()"
          src="@/assets/images/cat1.png"
          alt=""
        />

        <transition name="my-transition">
          <div class="absText" v-show="useClickedStore().clicked1">
            <h2 class="spec-head">Electronic</h2>
            <p
              :class="{ 'get-red': useClickedStore().specClicked1 }"
              class="specs"
              @click="specificFilter1_1()"
            >
              TV
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked2 }"
              class="specs"
              @click="specificFilter1_2()"
            >
              Desktop
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked3 }"
              class="specs"
              @click="specificFilter1_3()"
            >
              Notebook
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked4 }"
              class="specs"
              @click="specificFilter1_4()"
            >
              OEM
            </p>
            <!-- <p
              :class="{ 'get-red': specClicked5 }"
              class="specs"
              @click="specificFilter1_5()"
            >
              Pc Accessory
            </p> -->
          </div>
        </transition>
      </div>
      <div class="cat-flex">
        <img
          class="filter"
          :class="{ 'get-bigger': useClickedStore().clicked2 }"
          @click="handleFilter2()"
          src="@/assets/images/cat2.png"
          alt=""
        />
        <transition name="my-transition">
          <div class="absText" v-show="useClickedStore().clicked2">
            <h2 class="spec-head">Men's</h2>
            <p
              :class="{ 'get-red': useClickedStore().specClicked1 }"
              class="specs"
              @click="specificFilter2_1()"
            >
              T-shirt
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked2 }"
              class="specs"
              @click="specificFilter2_2()"
            >
              Hoodie
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked3 }"
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
          :class="{ 'get-bigger': useClickedStore().clicked3 }"
          @click="handleFilter3()"
          src="@/assets/images/cat3.png"
          alt=""
        />
        <transition name="my-transition">
          <div class="absText" v-show="useClickedStore().clicked3">
            <h2 class="spec-head">Women's</h2>
            <p
              :class="{ 'get-red': useClickedStore().specClicked1 }"
              class="specs"
              @click="specificFilter3_1()"
            >
              T-shirt
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked2 }"
              class="specs"
              @click="specificFilter3_2()"
            >
              Dress
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked3 }"
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
          :class="{ 'get-bigger': useClickedStore().clicked4 }"
          @click="handleFilter4()"
          src="@/assets/images/cat4.png"
          alt=""
        /><transition name="my-transition">
          <div class="absText" v-show="useClickedStore().clicked4">
            <h2 class="spec-head">General</h2>
            <p
              :class="{ 'get-red': useClickedStore().specClicked1 }"
              class="specs"
              @click="specificFilter4_1()"
            >
              Shoes
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked2 }"
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
          :class="{ 'get-bigger': useClickedStore().clicked5 }"
          @click="handleFilter5()"
          src="@/assets/images/cat5.png"
          alt=""
        /><transition name="my-transition">
          <div class="absText" v-show="useClickedStore().clicked5">
            <h2 class="spec-head">Stuff</h2>
            <p
              :class="{ 'get-red': useClickedStore().specClicked1 }"
              class="specs gaming-ch"
              @click="specificFilter5_1()"
            >
              Gaming Ch.
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked2 }"
              class="specs"
              @click="specificFilter5_2()"
            >
              TCG
            </p>
            <p
              :class="{ 'get-red': useClickedStore().specClicked3 }"
              class="specs"
              @click="specificFilter5_3()"
            >
              Alcohol
            </p>
          </div></transition
        >
      </div>
      <h2 class="listed-info">{{ useIsStore().items.length }} items listed.</h2>
    </div>

    <div class="grid">
      <div
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-easing="in-out-sine"
        v-for="(product, index) in useIsStore().items"
        :key="product.id"
        class="card"
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
    <div
      class="loading-ico"
      v-if="useIsStore().items.length && allClickedFalse()"
      v-show="useIsStore().items.length != useProductStore().items.length"
      v-intersection-observer="onIntersectionObserver"
    >
      <div class="loadingio-spinner-eclipse-3nrzga94szj">
        <div class="ldio-j4mceyzrqbg">
          <div></div>
        </div>
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
  transform-origin: 0 0; /* see note above */
}
.ldio-j4mceyzrqbg div {
  box-sizing: content-box;
}

.absText {
  position: absolute;
  left: 70%;
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

.spec-head {
  color: rgb(108, 108, 108);
  font-size: 1.9rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgb(179, 179, 179);
}
.specs {
  transition: 0.3s;
}
.gaming-ch {
  width: 150%;
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
