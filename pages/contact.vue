<script setup></script>

<template>
  <div style="height: 100vh; width: 100vw">
    <Navbar />
    <div data-aos="zoom-in" data-aos-duration="1500" class="contact">
      <h2>This is a contact page</h2>
    </div>
    <!-- <Footer class="footer" /> -->
  </div>
</template>

<style scoped>
@media (orientation: portrait) {
  .contact h2 {
    font-size: 2.5rem;
  }
  .contact {
    width: 85% !important;
    padding: 0;
  }
}

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

  font-size: 2rem;

  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border: 1px rgb(105, 105, 105) solid;
  text-align: center;
  padding: 3rem 5rem;
}
</style>
