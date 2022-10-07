<template lang="">
  <div class="grid page-format">
    <img data-aos="fade-right" src="@/assets/images/big2.png" alt="" />
    <div data-aos="fade-left" class="flex-column">
      <h3>Visit Shops To Get Coupons!</h3>
      <p>
        Come to our place, share your location in your social media via GPS to
        get discount and product coupons!
      </p>
    </div>

    <div data-aos="fade-right" class="flex-column">
      <h3>Exchange Like a Boss!</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ullam.
        At aspernatur nobis numquam error tempora non!
      </p>
    </div>
    <img
      data-aos="fade-left"
      class="second-img"
      src="@/assets/images/big3.png"
      alt=""
    />
    <img data-aos="fade-right" src="@/assets/images/big4.png" alt="" />
    <div data-aos="fade-left" class="flex-column">
      <h3>Earn Points In Monthly Events!</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet sunt
        numquam accusamus.
      </p>
    </div>
    <div data-aos="fade-right" class="flex-column">
      <h3>Gain Coupons With Every Purchase!</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae provident
        earum sit commodi illo aspernatur adipisci non, possimus recusandae
        similique autem voluptate.
      </p>
    </div>
    <img data-aos="fade-left" src="@/assets/images/big.png" alt="" />
  </div>
</template>

<style scoped>
.flex-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 40rem;
  margin-bottom: 5rem;
}
/* .second-img {
  width: 45rem;
} */
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
