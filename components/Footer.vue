<template>
  <div class="footer-container">
    <h2 class="copyright">2022 @Solemensis</h2>
    <div>
      <a href="#">
        <img class="logo" src="@/assets/images/logo2.webp" alt="" />
      </a>
    </div>

    <div class="socials-container">
      <a href="https://github.com/Solemensis" target="_blank"
        ><img class="github-img" src="@/assets/images/github.webp" alt="" /></a
      ><a href="https://www.instagram.com/ulassacli/" target="_blank">
        <img class="instagram-img" src="@/assets/images/instagram.webp" alt=""
      /></a>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  background-color: #000000;
  background-image: linear-gradient(315deg, #212121 0%, #313131 74%);
  height: 15rem;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10rem;
}

.copyright {
  color: #ededed;
}

.logo {
  height: 8rem;
  width: 8rem;
  animation: turn 3s linear infinite;
  cursor: pointer;
}

.socials-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
}
.github-img {
  height: 4rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.instagram-img {
  height: 3.5rem;
  margin-top: 0.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (hover: hover) {
  .github-img:hover {
    transform: translateY(-0.35rem);
  }
  .instagram-img:hover {
    transform: translateY(-0.35rem);
  }
}
@media (orientation: portrait) {
  .copyright {
    font-size: 1.2rem;
  }
  .socials-container {
    width: 10rem !important;
  }
  .footer-container {
    height: 10rem;
    padding: 0 1rem;
  }
  .logo {
    height: 5rem;
    width: 5rem;
  }
  .github-img {
    height: 3rem !important;
  }
  .instagram-img {
    height: 2.5rem !important;
  }
}
</style>
