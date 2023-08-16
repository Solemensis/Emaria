<script setup>
const props = defineProps({
  cardHeading: String,
  cardImg: String,
  cardColor: String,
});
</script>

<template lang="">
  <div :style="`background-color:${cardColor}`" class="card">
    <nuxt-img :src="cardImg" alt="informative image" />
    <h3>{{ cardHeading }}</h3>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24rem;
  height: 24rem;
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 1.3rem;
  position: relative;
}
.card img {
  width: 15rem;
  position: absolute;
  top: 3.5rem;
}

.card h3 {
  font-size: 2.1rem;
  position: absolute;
  bottom: 2.3rem;
}
@media (orientation: portrait) {
  .card {
    width: 18rem;
    height: 18rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card img {
    width: 10rem;
    position: static;
    margin-bottom: 2rem;
  }
  .card h3 {
    font-size: 1.5rem;
  }
}
</style>
