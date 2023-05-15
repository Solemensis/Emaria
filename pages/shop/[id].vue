<script setup>
const user = useSupabaseUser();

const show = ref(false);
</script>

<template>
  <div style="height: 50vh">
    <ProductInfo />
    <transition name="my-transition">
      <div>
        <div v-show="show" v-if="user" class="alert1">
          <h3 class="modal-text">Item added to the cart!</h3>
        </div>
        <div v-show="show" v-else class="alert2">
          <h3 class="modal-text">You need to login.</h3>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.alert1 {
  width: 25rem;
  height: 5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(123, 248, 123, 0.859);
  border-radius: 1.5rem;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}
.alert2 {
  width: 25rem;
  height: 5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 112, 112, 0.859);
  border-radius: 1.5rem;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}
.modal-text {
  color: rgb(52, 52, 52);
  font-size: 1.8rem;
  font-weight: 600;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
