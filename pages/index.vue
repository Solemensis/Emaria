<script setup>
const gridElements = [
  {
    image:
      "https://res.cloudinary.com/dyur9xfhi/image/upload/v1692171097/Emaria_assets/grid_image_1_ijexvm.webp",
    heading: "Visit Shops To Get Coupons!",
    description:
      "Come to our place, share your location on social media via GPS to get discount and product coupons!",
  },
  {
    image:
      "https://res.cloudinary.com/dyur9xfhi/image/upload/v1692171115/Emaria_assets/grid_image_2_iemq3i.webp",
    heading: "Earn Points In Monthly Events!",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ullam. At!",
  },
  {
    image:
      "https://res.cloudinary.com/dyur9xfhi/image/upload/v1692171122/Emaria_assets/grid_image_3_r6hetm.webp",
    heading: "Exchange Like a Boss!",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sunt numquam accusamus.",
  },
  {
    image:
      "https://res.cloudinary.com/dyur9xfhi/image/upload/v1692171131/Emaria_assets/grid_image_4_tofydu.webp",
    heading: "Gain Coupons With Every Purchase!",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident earum sit commodi illo aspernatur adipisci non.",
  },
];
</script>
<template lang="">
  <div>
    <div v-once class="container">
      <div
        data-aos="zoom-out"
        data-aos-duration="1200"
        class="hero-section page-format-normal"
      >
        <!-- <div style="position: absolute; top: -3rem; left: 0">
          <PreferredProducts />
        </div> -->
        <img
          class="mobile-hero-image"
          src="@/assets/images/hero-scene-mobile.webp"
          alt=""
        />
        <div class="hero-left">
          <h1>Welcome To <br /><span class="span">Emaria!</span></h1>
          <p>Our own mini e-commerce store at your service.</p>
          <div class="buttons">
            <NuxtLink to="/shop">
              <button class="shop-button">Go Shop</button></NuxtLink
            ><a href="#cards"
              ><button class="learn-button">Learn More ⬇</button></a
            >
          </div>
          <p class="extra-content">
            Up to <span class="span2">20%</span> off on weekends!
          </p>
          <div id="cards"></div>
        </div>
        <img class="hero-image" src="@/assets/images/hero-scene5.webp" alt="" />
      </div>
    </div>
    <section class="page-format-normal square-cards-section">
      <h2 class="square-cards-heading">Thousands of people use our store!</h2>
      <div class="square-cards">
        <SquareCard
          data-aos="fade-down"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          card-color="#38c59f38"
          card-heading="Free Shipping"
          card-img="https://res.cloudinary.com/dyur9xfhi/image/upload/v1692133990/Emaria_assets/card_image_1_io2t0x.webp"
        />
        <SquareCard
          data-aos="fade-down"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          data-aos-delay="300"
          card-color="#38c59f38"
          card-heading="24/7 Hour Support"
          card-img="https://res.cloudinary.com/dyur9xfhi/image/upload/v1692134307/Emaria_assets/card_image_2_t84nfe.webp"
        />
        <SquareCard
          class="card-3"
          data-aos="fade-down"
          data-aos-duration="1800"
          data-aos-easing="ease-out-back"
          data-aos-delay="450"
          card-color="#38c59f38"
          card-heading="100% Moneyback"
          card-img="https://res.cloudinary.com/dyur9xfhi/image/upload/v1692134306/Emaria_assets/card_image_3_pdupma.webp"
        />
      </div>
    </section>
    <InformativeGrid :grid-elements="[...gridElements]" />
    <Footer />
  </div>
</template>

<style scoped>
/* Hero section */
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
  margin-top: 0 !important;
  transition: 0.5s;
  background-size: 200% auto;
  color: black;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
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
  margin-top: 0 !important;
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
  top: 54%;
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
  margin-bottom: 5rem;
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

@media (hover: hover) {
  .learn-button:hover {
    background-position: right center; /* change the direction of the change here */
    color: black;
    text-decoration: none;
  }
  .shop-button:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
}
@media (max-width: 844px) {
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
    padding: 1rem 2.7rem;
  }
  .learn-button {
    padding: 1rem 2.7rem;
  }
}
@media (max-width: 669px) {
  .hero-image {
    width: 50rem;
  }
  h1 {
    font-size: 5rem;
  }
}

@media (orientation: portrait) {
  .hero-section {
    flex-direction: column;
    top: 58% !important;
  }
  .hero-left {
    margin-top: 2rem;
  }
  .mobile-hero-image {
    width: 18vh;

    display: inline-block;
    /* position: absolute;
    top: -4%;
    left: 50%;
    transform: translateX(-50%); */
    /* animation: turn 4.5s linear infinite; */
  }
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
/* Hero section ends */

/* SquareCards section */
#cards {
  position: absolute;
  margin-top: -3.4rem;
  opacity: 0;
}
.square-cards-section {
  margin-top: 5rem;
  margin-bottom: 17rem;
}
.square-cards {
  display: flex;
  justify-content: space-evenly;
}
.square-cards-heading {
  font-weight: 500;
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 6rem;
  color: rgb(36, 36, 36);
}
@media (orientation: portrait) {
  .square-cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    grid-row-gap: 2.2rem;
  }
  .square-cards-heading {
    font-size: 3.5rem;
  }
  .card-3 {
    grid-column: 1 / 3;
  }
}
/* SquareCards section ends */
</style>
