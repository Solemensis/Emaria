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

// ******

let { data: hahha } = await supabase
  .from("anan")
  .select("user_id")
  .eq("user_id", userId());

onMounted(() => {
  watchEffect(() => {
    if (hahha) {
      onMounted(() => {
        watchEffect(() => {
          if (user.value) {
            user.value.id = hahha.value;
          }
        });
      });
    }
  });
});

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
html,
body {
  max-width: 100vw;
  overflow-x: hidden !important;
}
</style>
