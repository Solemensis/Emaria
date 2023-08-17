<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div>
    <LoginSigninForm />
  </div>
</template>
