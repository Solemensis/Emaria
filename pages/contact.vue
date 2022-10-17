<script setup></script>

<template>
  <div>
    <Navbar />
    <div data-aos="zoom-in" class="contact">
      <h1>This is a contact page</h1>
    </div>
    <!-- <Footer class="footer" /> -->
  </div>
</template>

<style scoped>
/* .footer {
  position: absolute;
  bottom: 0;
  left: 0;
} */

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

  font-size: 2rem;

  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px rgb(105, 105, 105) solid;

  padding: 3rem 5rem;
}
</style>
