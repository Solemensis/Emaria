<script setup>
const props = defineProps({
  gridElements: Array,
});

function isNumberEven(number) {
  return number % 2 == 0 ? true : false;
}
</script>

<template lang="">
  <div
    v-for="(gridElement, index) in gridElements"
    class="grid page-format-normal"
  >
    <nuxt-img
      v-if="isNumberEven(index)"
      class="img"
      data-aos="zoom-out"
      data-aos-duration="700"
      :src="gridElement.image"
      alt="informative image"
    />
    <div
      v-if="isNumberEven(index)"
      data-aos="zoom-out"
      data-aos-duration="700"
      data-aos-delay="200"
      class="heading-and-description"
    >
      <h3>{{ gridElement.heading }}</h3>
      <p>
        {{ gridElement.description }}
      </p>
    </div>

    <div
      v-if="!isNumberEven(index)"
      data-aos="zoom-out"
      data-aos-duration="700"
      data-aos-delay="200"
      class="heading-and-description"
    >
      <h3>{{ gridElement.heading }}</h3>
      <p>
        {{ gridElement.description }}
      </p>
    </div>
    <nuxt-img
      v-if="!isNumberEven(index)"
      class="img"
      data-aos="zoom-out"
      data-aos-duration="700"
      :src="gridElement.image"
      alt="informative image"
    />
  </div>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-row-gap: 1rem;
}
img {
  width: 40rem;
}
.heading-and-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
h3 {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0 1rem;
  width: 80%;
  line-height: 1.1;
}
p {
  font-size: 2.2rem;
  text-align: center;
  padding: 0 1rem;
  width: 70%;
  line-height: 1.35;
  color: #666;
  font-weight: 500;
}

@media (orientation: portrait) {
  .grid {
    grid-row-gap: 5rem;
  }
  img {
    width: 20rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.2rem;
    width: 97%;
  }
}
</style>
