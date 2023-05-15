<script setup>
definePageMeta({
  middleware: "no-auth",
});
</script>

<template lang="">
  <div style="height: 60vh">
    <div class="texts-div">
      <h2 style="margin-bottom: 2rem">this is a profile page</h2>
      <h2 style="margin-bottom: 1rem">
        -there will be a little window here, where user can enter his/her home
        address (or addresses), and choose between them on the checkout page.
      </h2>
      <h2>-and some little predefined cute profile avatars to choose from</h2>
    </div>
  </div>
</template>

<style scoped>
.texts-div {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
}
</style>
