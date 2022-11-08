<script setup>
const user = useSupabaseUser();
const supabase = useSupabaseClient();

const cartStore = useCartStore();

// function userId() {
//   if (user.value) {
//     return user.value.id;
//   } else return;
// }

// let { data: anann } = await supabase
//   .from("anan")
//   .select("item")
//   .eq("user_id", userId());
</script>
<template lang="">
  <div>
    <Navbar />
    <div v-once class="container">
      <!-- <div class="arrow-container">
      <img class="arrow" src="@/assets/images/arrow.png" alt="" />
    </div> -->

      <div
        data-aos="zoom-in"
        data-aos-duration="1700"
        class="hero-section page-format"
      >
        <div class="hero-left">
          <h1>Welcome To <br /><span class="span">Emaria!</span></h1>
          <p>Our own mini e-commerce store at your service.</p>
          <div class="buttons">
            <NuxtLink to="/shop">
              <button class="shop-button">Go Shop</button></NuxtLink
            ><a href="#dest"
              ><button class="learn-button">Learn More ⬇</button></a
            >
          </div>
          <p class="extra-content">
            Up to <span class="span2">20%</span> off on weekends!
          </p>
          <p id="dest" class="ghost-content">ghost content</p>
        </div>

        <img class="hero-image" src="@/assets/images/hero-scene5.webp" alt="" />
        <img
          src="@/assets/images/logo2.webp"
          alt=""
          class="mobile-hero-image"
        />
      </div>
    </div>
    <!-- <img class="line-border" src="@/assets/images/lineborder.png" alt="" /> -->

    <EpicCards />

    <EpicZ />
    <Footer />
  </div>
</template>

<style scoped>
.ghost-content {
  position: absolute;
  margin-top: -3.4rem;
  opacity: 0;
}
.buttons {
  display: flex;
  align-items: center;
}
.learn-button {
  background-image: linear-gradient(
    to right,
    #e0eafc 0%,
    #cfdef3 51%,
    #e0eafc 100%
  );

  font-size: 1.6rem;
  padding: 1.5rem 4.5rem;
  text-align: center;

  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}
.learn-button:hover {
  background-position: right center; /* change the direction of the change here */
  color: black;
  text-decoration: none;
}

.learn-button:active {
  background-image: linear-gradient(
    to right,
    #ced6e7 0%,
    #c0cee2 51%,
    #cad9f6 100%
  );

  animation: button-pop 0.3s ease-out;
}
.shop-button:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.shop-button:active {
  background-image: linear-gradient(
    to right,
    #ba21d8 0%,
    #832dcd 51%,
    #b41fd1 100%
  );

  animation: button-pop 0.3s ease-out;
}
.shop-button {
  margin-right: 2rem;

  font-size: 1.7rem;
  font-weight: 600;
  background-image: linear-gradient(
    to right,
    #da22ff 0%,
    #9733ee 51%,
    #da22ff 100%
  );

  padding: 1.5rem 4.5rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}
.line-border {
  width: 98.9vw;
  position: absolute;
  z-index: 999;
  opacity: 0.1;
}

.container {
  height: 100vh;
}
.arrow-container {
  position: absolute;
  height: 50rem;
  width: 10rem;
}
.arrow {
  filter: invert(17%) sepia(49%) saturate(7495%) hue-rotate(317deg)
    brightness(90%) contrast(95%);
  height: 11rem;
  position: absolute;
  left: -5%;
  top: 50%;
  transform: rotate(-10deg);
}
.hero-section {
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  left: 50%;
  top: 53%;
  transform: translate(-50%, -50%) !important;
}
.hero-left {
  margin-top: 15rem;
  width: 40%;
  padding: 0 2rem;
  /* border-left: #9900ff 2px solid; */
}

.extra-content {
  margin-top: 11rem;
  font-size: 1.6rem !important;
  border-left: 3px rgb(173, 173, 173) solid;
  padding-left: 0.7rem;
  color: black;
  display: inline-block;
  font-weight: 700;
}
.span2 {
  color: rgb(240, 21, 112);
}

h1 {
  font-size: 6rem;
  margin-bottom: 2rem;
  letter-spacing: -0.1rem;
  line-height: 1.2;
  color: rgb(21, 21, 21);
  font-family: "Kanit";
  font-weight: 500;
}
span {
  color: #06d6a0;
  font-family: "Kanit";
}
.hero-left p {
  font-size: 2rem;
  margin-bottom: 3.5rem;
  color: rgb(123, 123, 123);
  line-height: 1.4;
}

.hero-image {
  width: 54rem;
  margin-top: 0.5rem;
}
.mobile-hero-image {
  display: none;
}
@media (max-width: 844px) {
  .mobile-hero-image {
    width: 13rem;
    height: 13rem;
    display: inline-block;
    position: absolute;
    top: -12%;
    left: 50%;

    animation: turn 4.5s linear infinite;
  }

  @keyframes turn {
    0% {
      transform: translateX(-50%) rotate(0deg);
    }
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }
  .shop-button {
    padding: 1.2rem 3.5rem;
  }
  .learn-button {
    padding: 1.2rem 3.5rem;
  }
}
@media (max-width: 762px) {
  .shop-button {
    padding: 1rem 2.8rem;
  }
  .learn-button {
    padding: 1rem 2.8rem;
  }
}

@media (orientation: portrait) {
  .hero-section {
    /* flex-direction: column-reverse; */
    justify-content: center;
  }
  .hero-image {
    /* width: 15rem;
    margin-top: 5rem; */
    display: none;
  }
  .hero-left {
    width: 100vw;
    /* margin-top: 5rem; */
    text-align: center;
  }
  .buttons {
    justify-content: center !important;
  }
}
</style>
