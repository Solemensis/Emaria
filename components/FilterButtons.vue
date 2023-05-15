<script setup>
//object to hold category filtering info
const filters = reactive({});

const router = useRouter();

//handle product filtering
async function handleFilter(category) {
  if (filters.category != category) {
    //push query param to url
    router.push({
      query: {
        category: category,
        subCategory: undefined,
      },
    });

    //category filtering ui animation handling
    filters.category = category;

    //fetch items according to function parameter, which is the category
    const query = groq`*[category == "${category}"][0...12]`;
    const { data: fetchedProducts } = await useSanityQuery(query);

    //write the products store with fetched products
    useProductsStore().products = fetchedProducts.value;
  } else {
    //remove query param from url
    router.push({
      query: {
        category: undefined,
        subCategory: undefined,
      },
    });

    //category filtering ui animation handling
    filters.category = "";

    //fetch all items back.
    const query = groq`*[_type == "product"][0...12]`;
    const { data: fetchedProducts } = await useSanityQuery(query);

    //write the products store with fetched products
    useProductsStore().products = fetchedProducts.value;
  }
}

//handle specific product filtering
async function handleSpecificFilter(category, subCategory) {
  if (filters.subCategory != subCategory) {
    //push query param to url
    router.push({
      query: {
        category: category,
        subCategory: subCategory,
      },
    });

    //category filtering ui animation handling
    filters.subCategory = subCategory;

    //fetch items according to function parameter, which is the subCategory
    const query = groq`*[subCategory == "${subCategory}"][0...12]`;
    const { data: fetchedProducts } = await useSanityQuery(query);

    //write the products store with fetched products
    useProductsStore().products = fetchedProducts.value;
  } else {
    //remove query param from url
    router.push({
      query: {
        category: category,
        subCategory: undefined,
      },
    });

    //category filtering ui animation handling
    filters.subCategory = "";

    //fetch items back, according to general category.
    const query = groq`*[category == "${category}"][0...12]`;
    const { data: fetchedProducts } = await useSanityQuery(query);

    //write the products store with fetched products
    useProductsStore().products = fetchedProducts.value;
  }
}
</script>

<template>
  <div
    data-aos="zoom-in"
    data-aos-duration="500"
    data-aos-easing="in-out-sine"
    class="categories"
  >
    <div class="cat-flex">
      <img
        class="filter"
        :class="{
          'get-bigger': filters.category == `Tech`,
        }"
        @click="handleFilter(`Tech`)"
        src="@/assets/images/cat1.webp"
        alt=""
      />
      <transition name="my-transition">
        <div class="absText" v-show="filters.category == `Tech`">
          <h2 class="spec-head">Electronic</h2>
          <p
            :class="{
              'get-red': filters.subCategory == `Television`,
            }"
            class="specs"
            @click="handleSpecificFilter('Tech', `Television`)"
          >
            TV
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Desktop`,
            }"
            class="specs"
            @click="handleSpecificFilter('Tech', `Desktop`)"
          >
            Desktop
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Notebook`,
            }"
            class="specs"
            @click="handleSpecificFilter('Tech', `Notebook`)"
          >
            Notebook
          </p>
          <p
            :class="{ 'get-red': filters.subCategory == `OEM` }"
            class="specs"
            @click="handleSpecificFilter('Tech', `OEM`)"
          >
            OEM
          </p>
        </div>
      </transition>
    </div>
    <div class="cat-flex">
      <img
        class="filter"
        :class="{ 'get-bigger': filters.category == `Men's` }"
        @click="handleFilter(`Men's`)"
        src="@/assets/images/cat2.webp"
        alt=""
      />
      <transition name="my-transition">
        <div class="absText" v-show="filters.category == `Men's`">
          <h2 class="spec-head">Men's</h2>
          <p
            :class="{
              'get-red': filters.subCategory == `Men's T-shirt`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Men's`, `Men's T-shirt`)"
          >
            T-shirt
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Men's Hoodie`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Men's`, `Men's Hoodie`)"
          >
            Hoodie
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Men's Hat`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Men's`, `Men's Hat`)"
          >
            Hat
          </p>
        </div></transition
      >
    </div>
    <div class="cat-flex">
      <img
        class="filter"
        :class="{ 'get-bigger': filters.category == `Women's` }"
        @click="handleFilter(`Women's`)"
        src="@/assets/images/cat3.webp"
        alt=""
      />
      <transition name="my-transition">
        <div class="absText" v-show="filters.category == `Women's`">
          <h2 class="spec-head">Women's</h2>
          <p
            :class="{
              'get-red': filters.subCategory == `Women's T-shirt`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Women's`, `Women's T-shirt`)"
          >
            T-shirt
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Women's Dress`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Women's`, `Women's Dress`)"
          >
            Dress
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Women's Accessory`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Women's`, `Women's Accessory`)"
          >
            Accessory
          </p>
        </div></transition
      >
    </div>
    <div class="cat-flex">
      <img
        class="filter"
        :class="{ 'get-bigger': filters.category == `General` }"
        @click="handleFilter(`General`)"
        src="@/assets/images/cat4.webp"
        alt=""
      /><transition name="my-transition">
        <div class="absText" v-show="filters.category == `General`">
          <h2 class="spec-head">General</h2>
          <p
            :class="{
              'get-red': filters.subCategory == `Shoes`,
            }"
            class="specs"
            @click="handleSpecificFilter(`General`, `Shoes`)"
          >
            Shoes
          </p>
          <p
            :class="{ 'get-red': filters.subCategory == `Bag` }"
            class="specs"
            @click="handleSpecificFilter(`General`, `Bag`)"
          >
            Bag
          </p>
        </div></transition
      >
    </div>
    <div class="cat-flex">
      <img
        class="filter"
        :class="{ 'get-bigger': filters.category == `Stuff` }"
        @click="handleFilter(`Stuff`)"
        src="@/assets/images/cat5.webp"
        alt=""
      /><transition name="my-transition">
        <div class="absText" v-show="filters.category == `Stuff`">
          <h2 class="spec-head">Stuff</h2>
          <p
            :class="{
              'get-red': filters.subCategory == `Gaming Chair`,
            }"
            class="specs gaming-ch"
            @click="handleSpecificFilter(`Stuff`, `Gaming Chair`)"
          >
            Gaming Ch.
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Trading Card Game`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Stuff`, `Trading Card Game`)"
          >
            TCG
          </p>
          <p
            :class="{
              'get-red': filters.subCategory == `Alcohol`,
            }"
            class="specs"
            @click="handleSpecificFilter(`Stuff`, `Alcohol`)"
          >
            Alcohol
          </p>
        </div></transition
      >
    </div>
    <h3
      v-if="
        useProductsStore() &&
        useProductsStore().products &&
        useProductsStore().products.length
      "
      class="listed-info"
    >
      {{ useProductsStore().products.length }} items listed.
    </h3>
  </div>
</template>

<style scoped>
.absText {
  position: absolute;
  left: 70%;
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
.listed-info {
  position: absolute;
  bottom: -2rem;
  left: 1rem;
  font-size: 1.5rem;
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
  padding: 2rem 1rem;
}

.categories img {
  width: 6rem;
  border: rgb(186, 186, 186) 2px solid;
  transition: transform 0.3s, border 0.6s, padding 0.6s;
}

@media (orientation: portrait) {
  .cat-flex {
    position: relative;
  }
  .absText {
    left: 50%;
    transform: translateX(-50%);
    top: 6.5rem;
  }
  .get-bigger {
    padding: 0 !important;
  }
  .listed-info {
    display: none;
  }
  .price-flex {
    width: 85% !important;
  }
  .categories {
    flex-direction: row !important;
    position: relative;
    top: 6.5rem !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    padding: 1rem 3rem !important;
    justify-content: center;
  }
  .categories img {
    width: 6rem !important;
    margin: 0 !important;
  }
  .cat-flex {
    flex-direction: column;
  }
}

@media (hover: hover) {
  .specs:hover {
    color: rgb(235, 93, 93);
  }
  .categories img:hover {
    border: rgb(238, 116, 116) 2px solid;
    transform: translateY(-0.35rem);
  }
}
</style>
