<script setup></script>
<template lang="">
  <div class="container">
    <h2>Thousands of people use our store!</h2>

    <div class="cards page-format">
      <div
        data-aos="fade-down"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        class="card1 card"
      >
        <img src="@/assets/images/epic1.png" alt="" />
        <h3>Free Shipping</h3>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        data-aos-delay="300"
        class="card2 card"
      >
        <img src="@/assets/images/epic2.png" alt="" />
        <h3>24/7 Hour Support</h3>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1800"
        data-aos-easing="ease-out-back"
        data-aos-delay="600"
        class="card3 card"
      >
        <img src="@/assets/images/epic3.png" alt="" />
        <h3>100% Moneyback</h3>
      </div>
    </div>
    <!-- <div class="hero-card page-format">
      <img src="@/assets/images/epic3.png" alt="" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, unde
        facilis quisquam illo at incidunt commodi ratione magnam.
      </p>
    </div> -->
  </div>
</template>

<style scoped>
@media (orientation: portrait) {
  .container {
    height: 100rem;
  }
  .container h2 {
    font-size: 3rem;
    padding: 0 3rem;
    margin-top: -3rem;
  }
  .cards {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    justify-items: center;
    grid-row-gap: 2.2rem;
  }
  .card h3 {
    font-size: 1.5rem;
    position: static !important;
  }
  .card img {
    width: 10rem !important;
    position: static !important;
    margin-bottom: 2rem;
  }
  .card {
    width: 18rem !important;
    height: 18rem !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
  .card3 {
    grid-column-start: 1;
    grid-column-end: 3;
  }
}

.hero-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(214, 30, 6, 0.24);
  border-radius: 1.3rem;
  width: 66.5%;
}
.hero-card img {
  width: 15rem;
  margin-right: 1.5rem;
}
.hero-card p {
  font-size: 2rem;
}
h2 {
  font-weight: 500;
  font-size: 4.5rem;
  text-align: center;
  margin-bottom: 6rem;
  color: rgb(36, 36, 36);
}
.container {
  /* background-color: #bbd0ff2e; */
  position: relative;
  height: 70vh !important;
}
.cards {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5rem;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24rem;
  height: 24rem;
  transition: 0.2s;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: #06d69e38;
  border-radius: 1.3rem;
  position: relative;
}

.cards img {
  width: 15rem;
  position: absolute;
  top: 3.5rem;
}
h3 {
  font-size: 2.1rem;
  position: absolute;
  bottom: 2.3rem;
}
</style>
