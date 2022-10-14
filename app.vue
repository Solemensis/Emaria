<script setup>
const supabase = useSupabaseClient();
const user = useSupabaseUser();

const cartStore = useCartStore();

function userId() {
  if (user.value) {
    return user.value.id;
  } else return;
}

let { data: anann } = await supabase
  .from("anan")
  .select("item")
  .eq("user_id", userId());

if (user.value && anann[0]) {
  // if (anann[0]) {
  cartStore.items = anann[0].item;
  // }
}
</script>
<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");

@media (min-width: 1920px) {
  html {
    font-size: 70% !important;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand";
  user-select: none;
}
@keyframes button-pop {
  0% {
    transform: scale(0.95);
  }
  40% {
    transform: scale(1.02);
  }
  100% {
    transform: scale(1);
  }
}
a {
  text-decoration: none;
  cursor: default;
}
.page-format {
  width: 85%;
  margin: 0 auto;
}
.page-format2 {
  width: 95%;
  margin: 0 auto;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  user-select: none;
}
</style>
