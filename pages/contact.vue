<script setup></script>

<template>
  <div>
    <Navbar />
    <div data-aos="zoom-in" class="contact">
      <h1>This is a contact page</h1>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.contact {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
  background-color: rgba(0, 85, 255, 0.64);
  padding: 5rem 10rem;
  border-radius: 1rem;
  font-size: 2rem;
}
</style>
