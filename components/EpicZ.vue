<script setup></script>
<template lang="">
  <div class="grid page-format">
    <img
      class="img"
      data-aos="fade-right"
      data-aos-duration="700"
      src="@/assets/images/big2.webp"
      alt=""
    />
    <div
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-delay="200"
      class="flex-column"
    >
      <h3>Visit Shops To Get Coupons!</h3>
      <p>
        Come to our place, share your location on social media via GPS to get
        discount and product coupons!
      </p>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="700"
      data-aos-delay="200"
      class="flex-column"
    >
      <h3>Exchange Like a Boss!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ullam.
        At!
      </p>
    </div>
    <img
      data-aos="fade-left"
      data-aos-duration="700"
      class="second-img img"
      src="@/assets/images/big3.webp"
      alt=""
    />
    <img
      class="img"
      data-aos="fade-right"
      data-aos-duration="700"
      src="@/assets/images/big4.webp"
      alt=""
    />
    <div
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-delay="200"
      class="flex-column"
    >
      <h3>Earn Points In Monthly Events!</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sunt
        numquam accusamus.
      </p>
    </div>
    <div
      data-aos="fade-left"
      data-aos-duration="700"
      data-aos-delay="200"
      class="flex-column"
    >
      <h3>Gain Coupons With Every Purchase!</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident
        earum sit commodi illo aspernatur adipisci non.
      </p>
    </div>
    <img
      class="img"
      data-aos="fade-left"
      data-aos-duration="700"
      src="@/assets/images/big.webp"
      alt=""
    />
  </div>
</template>
<style scoped>
@media (orientation: portrait) {
  .container {
    height: fit-content;
  }
  .img {
    width: 20rem;
    /* margin-bottom: 2rem !important; */
  }
  .flex-column h3 {
    font-size: 1.6rem;
  }
  .flex-column p {
    font-size: 1.25rem;
    width: 100%;
  }
  .grid {
    grid-row-gap: 5rem !important;
  }
}
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
}
img {
  width: 40rem;
}
h3 {
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  padding: 0 1rem;
  width: 80%;
  line-height: 1.1;
}
p {
  font-size: 2.2rem;
  text-align: center;
  padding: 0 1rem;
  width: 70%;
  line-height: 1.35;
  color: #555;
  font-weight: 500;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-row-gap: 1rem;
}
</style>
