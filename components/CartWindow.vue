<script setup>
// const user = useSupabaseUser();
// const supabase = useSupabaseClient();
const config = useRuntimeConfig();

const cartStore = useCartStore();
const assetsEndpoint = `${config.DS_EP}/assets/`;

function subT() {
  return cartStore.subTotal;
}

function removeFromCart(item) {
  cartStore.items = cartStore.items.filter((i) => i !== item);
}

function userId() {
  if (user.value) {
    return user.value.id;
  } else return;
}

async function inputChange() {
  await supabase
    .from("anan")

    .update({ item: cartStore.items })
    .eq("user_id", userId());
}

function decrease(i) {
  if (i.amount > 1) {
    i.amount--;
  }
}
function increase(i) {
  // if (i.amount < 10)
  {
    i.amount++;
  }
}
</script>

<template>
  <div style="height: 100vh; width: 100vh">
    <div class="wrapper page-format">
      <h2 v-if="cartStore.items.length" class="heading">Your Cart</h2>
      <h2 v-else class="heading2">Your cart is empty.</h2>
      <div class="flex">
        <table v-if="cartStore.items.length">
          <tr>
            <th class="delete-head"></th>
            <th class="image-head">Image</th>
            <th>Title</th>
            <th class="price-head">Price</th>
            <th class="bulk">Bulk</th>
          </tr>
          <div class="div"></div>
          <tr v-for="(item, index) in cartStore.items">
            <td class="delete-button">
              <span
                @click="removeFromCart(item), inputChange()"
                class="delete-button-ico"
                >&#10006;</span
              >
            </td>

            <td>
              <img :src="assetsEndpoint + item.item.thumbnail" />
              <!-- <img :src="item.item.item.image" /> -->
            </td>

            <td class="title-table">
              <NuxtLink
                class="title"
                :to="{ name: 'shop-id', params: { id: item.item.id } }"
              >
                {{ item.item.name }}</NuxtLink
              >
            </td>
            <td class="item-price">
              ${{ (item.item.price * item.amount).toFixed(2) }}
            </td>

            <td class="amount-table">
              <div class="input-box">
                <button @click="decrease(item), inputChange()">&#8211;</button>
                <input
                  class="inputum"
                  disabled
                  min="1"
                  type="number"
                  v-model="cartStore.items[index].amount"
                /><button @click="increase(item), inputChange()">+</button>
              </div>
            </td>
          </tr>
        </table>

        <div v-if="cartStore.items.length" class="price-box">
          <ul>
            <li>Subtotal: ${{ subT().toFixed(2) }}</li>
            <li>Taxes: ${{ (subT() * 0.1).toFixed(2) }}</li>
            <li class="total">
              Total: ${{ (subT() + subT() * 0.1).toFixed(2) }}
            </li>
          </ul>
          <button class="checkout">checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.total {
  font-size: 2.8rem;
  margin-top: 3rem;
  border-top: 1px black solid;
  padding-top: 2rem;
  margin-bottom: 5rem;
}

.price-box {
  font-size: 2rem;
  font-weight: 700;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 25rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  background-color: rgba(50, 217, 35, 0.378);
  border: 1px rgba(50, 217, 35, 0.663) solid;
  padding: 3.2rem 2rem;
  padding-bottom: 1.2rem;
  border-radius: 0.5rem;
}
.price-box ul {
  list-style: none;
}
ul li {
  margin-bottom: 0.5rem;
  text-align: end;
}
.delete-button {
  color: red;
  font-size: 2rem;
  border: 1px red;
}
.delete-button-ico {
  cursor: pointer;
}

.div {
  height: 1rem;
}
.price-head {
  padding-right: 5rem;
}
.delete-head {
  padding-right: 4rem;
}
.image-head {
  padding-right: 2rem;
}
.input-box {
  display: flex;
  align-items: space-between;
  justify-content: flex-start;
}
.input-box button {
  margin: 0;
  padding: 0.3rem 0.8rem;
  background-color: transparent;
  color: black;
  border: #f56235b8 2px solid !important;
  font-size: 2.1rem;
  border-radius: 0.7rem;
}

input {
  text-align: center;
  width: 5rem;
  border: none;
  font-size: 2rem;
  font-weight: 600;
  color: black;
  user-select: none;
  background-color: transparent;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.title-table {
  width: 50%;
  padding-right: 10rem;
}
.title {
  font-weight: 500;
  color: black;
  cursor: pointer;
  transition: 0.2s;
}
.title:hover {
  color: rgb(93, 147, 255);
}
.checkout:active {
  animation: button-pop 0.3s ease-out;
}
@media (hover: hover) {
  .input-box button:hover {
    background-color: rgba(245, 98, 53, 0.721);
  }
  .checkout:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }
}
@media (orientation: portrait) {
  .input-box button:active {
    background-color: rgba(245, 98, 53, 0.721);
  }
  tr th {
    font-size: 2.2rem;
    height: 5rem !important;
  }
  tr td {
    font-size: 1.6rem;
    height: 7rem !important;
  }
  tr {
    height: 8rem !important;
  }
  .flex {
    flex-direction: column;
    gap: 1rem;
  }
  .price-box {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding: 0.3rem;
  }
  .price-box ul {
    display: flex;
  }
  .price-box ul li {
    margin: 0;
    display: none;
  }
  .total {
    margin: 0;
    font-size: 2.1rem;
    border: none;
    padding: 0;
    display: inline-block !important;
    margin: 10px auto !important;
  }
  table {
    width: 95% !important;

    margin: 0 !important;
  }

  .title-table {
    padding-right: 1rem !important;
  }
  .title {
    font-size: 1.4rem !important;
  }
  .price-head {
    padding-right: 1.5rem;
  }
  .bulk {
    text-align: center;
  }
  .delete-button {
    text-align: center;
  }
  .inputum {
    width: 3rem;
    font-size: 1.6rem;
  }
  .input-box {
    justify-content: center;
  }
  .input-box button {
    padding: 0 0.3rem;
  }
}

table {
  width: 65%;
  margin-right: 2rem;
  border-collapse: collapse;
}
th {
  text-align: start;
  font-size: 2.5rem;
  height: 6rem;
  border-bottom: pink 2px solid;
}
td {
  font-size: 2rem;
  height: 9rem;
}
td img {
  width: 6rem;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* height: 60vh !important;
  overflow: scroll; */
}
.wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
}

.heading {
  font-size: 4.5rem;
  margin-bottom: 3rem;
  background-color: rgba(255, 168, 182, 0.69);
  display: inline-block;
  padding: 0.7rem 2.5rem;
  border-radius: 1rem;
  display: none;
}
.heading2 {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
  background-color: rgba(136, 255, 0, 0.64);
  padding: 5rem 10rem;
  border-radius: 1rem;
  font-size: 3rem;
}
@media (orientation: portrait) {
  .heading2 {
    width: 90%;
    text-align: center;
    font-size: 3rem;
  }
}
.item-price {
  font-weight: 500;
}
.checkout {
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #f09819 51%,
    #ff512f 100%
  );
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* box-shadow: 0 0 20px #eee; */
  font-weight: 700;
  border-radius: 10px;
  display: block;
}
</style>
