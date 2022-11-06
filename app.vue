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
  cartStore.items = anann[0].item;
}

//   watch(
//   useCartStore().items,
//   () => {
//    anann =  useCartStore().items;
//   },
//   {
//     deep: true,
//   }
// );
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

/* .page-enter-from,
.page-leave-to {
  opacity: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease-out;
} */

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.2s ease-out;
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
    transform: scale(0.94);
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

html,
body {
  max-width: 100vw;
  overflow-x: hidden !important;
}
@media (min-width: 1920px) {
  html {
    font-size: 70%;
  }
}
@media (max-width: 1250px) {
  .page-format {
    width: 90%;
  }
  html {
    font-size: 60%;
  }
}
@media (max-width: 1120px) {
  .page-format {
    width: 95%;
  }
}

@media (max-width: 1055px) {
  html {
    font-size: 52%;
  }
}
@media (max-width: 912px) {
  html {
    font-size: 48%;
  }
}
@media (max-width: 790px) {
  html {
    font-size: 44%;
  }
}

@media (orientation: portrait) {
  html {
    font-size: 53%;
  }
}
@media (max-width: 327px) and (orientation: portrait) {
  html {
    font-size: 47%;
  }
  h1 {
    font-size: 5.7rem !important;
  }
}

/* scroll bar  */
::-webkit-scrollbar {
  width: 1rem;
  /* border-radius: 0.5rem; */
  background-color: hsl(0, 0%, 77%);
  /* position: absolute; */
}
::-webkit-scrollbar-thumb {
  /* border-radius: 0.5rem; */
  background-color: hsl(0, 0%, 46%);
}
::-webkit-scrollbar-thumb:active {
  background-color: hsl(0, 0%, 33%);
}
</style>
