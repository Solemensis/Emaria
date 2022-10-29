<template lang="">
  <div class="grid page-format">
    <img
      class="img"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
      src="@/assets/images/big2.png"
      alt=""
    />
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
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
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
      class="flex-column"
    >
      <h3>Exchange Like a Boss!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ullam.
        At aspernatur nobis numquam error tempora non!
      </p>
    </div>
    <img
      data-aos="fade-left"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
      class="second-img img"
      src="@/assets/images/big3.png"
      alt=""
    />
    <img
      class="img"
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
      src="@/assets/images/big4.png"
      alt=""
    />
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
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
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
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
      data-aos-duration="1500"
      data-aos-easing="ease-out-back"
      src="@/assets/images/big.png"
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
    margin-bottom: 2rem !important;
  }
  .flex-column h3 {
    font-size: 2.1rem;
  }
  .flex-column p {
    font-size: 1.4rem;
    width: 100%;
  }
}

.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 40rem;
  margin-bottom: 5rem;
}

h3 {
  font-size: 4rem;
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
  width: 60%;
  line-height: 1.43;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
}
</style>
