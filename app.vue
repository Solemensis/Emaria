<template>
  <div>
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500&display=swap");

/* Global styles */
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand";
  user-select: none;
}
button {
  border: none;
}

a {
  text-decoration: none;
  cursor: default;
}
.page-format-normal {
  width: 85%;
  margin: 0 auto;
}
.page-format-wide {
  width: 95%;
  margin: 0 auto;
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

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.35s ease-out;
}

.my-transition-2-enter-from,
.my-transition-2-leave-to {
  opacity: 0;
}
.my-transition-2-enter-active,
.my-transition-2-leave-active {
  transition: opacity 0.2s ease-out;
}

/* Global styles ends */

/* Global media queries */
@media (min-width: 1920px) {
  html {
    font-size: 75%;
  }
}
@media (max-width: 1250px) {
  .page-format-normal {
    width: 90%;
  }
  html {
    font-size: 60%;
  }
}
@media (max-width: 1120px) {
  .page-format-normal {
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
@media (max-width: 669px) {
  html {
    font-size: 40%;
  }
}

@media (orientation: portrait) {
  html {
    font-size: 49%;
    overflow-x: hidden !important;
  }
}
@media (max-width: 327px) and (orientation: portrait) {
  html {
    font-size: 47%;
    overflow-x: hidden !important;
  }
  h1 {
    font-size: 5.7rem !important;
  }
}
/* Global media queries ends */

/* Scroll bar  */
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
/* Scroll bar ends */
</style>
