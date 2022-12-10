<template>
  <div>
    <div class="footer-container">
      <h2 class="copyright">2022 @Solemensis</h2>
      <div>
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

@media (hover: hover) {
  .github:hover {
    transform: translateY(-0.35rem);
  }
  .instagram:hover {
    transform: translateY(-0.35rem);
  }
}
@media (orientation: portrait) {
  .copyright {
    font-size: 1.2rem;
  }
  .social-container {
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
  .github {
    height: 3rem !important;
  }
  .instagram {
    height: 2.5rem !important;
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

.instagram {
  height: 3.5rem;
  margin-top: 0.1rem;
  cursor: pointer;
  transition: transform 0.2s;
}
</style>
