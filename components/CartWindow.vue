<script setup>
const subTotal = useCartStore().subTotal;
const taxes = subTotal * 0.1;
const total = subTotal + taxes;

const cartStore = useCartStore();

// function removeFromCart(item) {
//   cartStore.removeFromCart(item);
// }
const user = useSupabaseUser();
const supabase = useSupabaseClient();

function userId() {
  if (user.value) {
    return user.value.id;
  } else return;
}

let { data: anan, error } = await supabase
  .from("anan")
  .select("product_id")
  .eq("user_id", userId());

function handledb() {}
if (user.value) {
  cartStore.items = anan;
}
</script>

<template>
  <h2>{{ cartStore.items }}</h2>
  <div class="wrapper page-format" data-aos="zoom-in">
    <h2 v-if="cartStore.items" class="heading">Your Cart</h2>
    <h2 v-else class="heading2">Your cart is empty.</h2>
    <div class="flex">
      <table v-if="cartStore.items">
        <tr>
          <th class="delete-button"></th>
          <th>Image</th>
          <th>Title</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
        <tr v-for="(item, index) in cartStore.items">
          <td @click="removeFromCart(item)">&#10006;</td>
          <td>
            <img :src="item.item.image" />
          </td>

          <td class="title-table">
            <NuxtLink
              class="title"
              :to="{ name: 'shop-id', params: { id: item.item.id } }"
            >
              {{ item.item.title }}</NuxtLink
            >
          </td>
          <td>${{ (item.item.price * item.amount).toFixed(2) }}</td>
          <td class="amount-table">
            <input
              min="0"
              type="number"
              v-model="cartStore.items[index].amount"
            />
          </td>
        </tr>
      </table>

      <button @click="handledb()">anan</button>
      <div v-if="cartStore.items" class="price-box">
        <ul>
          <li>Subtotal: ${{ subTotal.toFixed(2) }}</li>
          <li>Estimated Taxes: ${{ taxes.toFixed(2) }}</li>
          <li>Total: ${{ total.toFixed(2) }}</li>
        </ul>
        <button class="checkout">checkout</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
input {
  width: 5rem;
}
.title-table {
  width: 50%;
}
.title {
  font-weight: 600;
  color: black;
  cursor: pointer;
}

table {
  width: 70%;
}
th {
  text-align: start;
  font-size: 2.5rem;
  height: 10rem;
}
td {
  font-size: 2rem;
  height: 10rem;
}
td img {
  width: 6rem;
}

.flex {
  display: flex;

  justify-content: space-between;
}
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
.heading2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
}
.price-box {
  color: red;
  font-size: 2rem;

  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}
.price-box ul {
  list-style: none;
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
