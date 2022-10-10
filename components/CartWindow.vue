<script setup></script>

<template>
  <div class="wrapper" data-aos="zoom-in">
    <h2 class="heading">Your Cart</h2>
    <div class="price-box">
      <ul>
        <li>Subtotal:</li>
        <li>Estimated Taxes:</li>
        <li>Total:</li>
      </ul>
      <button class="checkout">checkout</button>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
}
.heading {
  font-size: 4rem;
  margin-bottom: 2rem;
}
.price-box {
  background-color: rgb(212, 212, 212);
  color: red;
  font-size: 2rem;
  display: inline-block;
}
.checkout {
  background-image: linear-gradient(
    to right,
    #1d976c 0%,
    #93f9b9 51%,
    #1d976c 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
  font-weight: 800;
}

.checkout:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
