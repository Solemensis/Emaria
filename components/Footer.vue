<template>
  <div>
    <div class="footer-container">
      <h2 class="copyright">2022 @Solemensis</h2>

      <div>
        <!-- <div class="links">
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Contact</a>
        </div> -->
        <a href="#">
          <img class="logo" src="@/assets/images/logo2.webp" alt="" />
        </a>
      </div>

      <div class="social-container">
        <a href="https://github.com/Solemensis" target="_blank"
          ><img class="github" src="@/assets/images/github.webp" alt="" /></a
        ><a href="https://www.instagram.com/ulassacli/" target="_blank">
          <img class="instagram" src="@/assets/images/instagram.webp" alt=""
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 8rem;
  width: 8rem;
  animation: turn 3s linear infinite;
  cursor: pointer;
}

@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.links {
  display: flex;
  justify-content: space-between;
  width: 20rem;
}
.links a {
  color: white;
  font-size: 1.4rem;
}
.copyright {
  color: #ededed;
}
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
@media (orientation: portrait) {
  .footer-container {
    height: 10rem;
    padding: 0 1rem;
  }
  .logo {
    height: 7rem;
    width: 7rem;
  }
  .github {
    height: 3.5rem !important;
  }
  .instagram {
    height: 3rem !important;
  }
}
.social-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 12rem;
}
.github {
  height: 4rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.github:hover {
  transform: translateY(-0.35rem);
}
.instagram {
  height: 3.5rem;
  margin-top: 0.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}
.instagram:hover {
  transform: translateY(-0.35rem);
}
</style>
