<script setup>
definePageMeta({
  middleware: "auth",
});
// definePageMeta({
//   middleware: ["auth"]
// })
</script>

<template>
  <div>
    <LoginForm />
  </div>
</template>
