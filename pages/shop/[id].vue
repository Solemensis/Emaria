<script setup>




const supabase = useSupabaseClient();
const user = useSupabaseUser();

const route = useRoute();



// const { data: products } = await useFetch("https://fakestoreapi.com/products/");


if (useProductStore().items.length == 0) {
  const { data: products } = await useFetch(
    // "https://fakestoreapi.com/products/"
     "https://9a9bfolc.directus.app/items/products/"
  );
  useProductStore().items = products;
  
  
}
const assetsEndpoint = "https://9a9bfolc.directus.app/assets/";


const cartStore = useCartStore();

const show = ref(false);

function hideModal(){
  if(show.value==true)
  show.value = false;
}

function showModal(){
  show.value = true;

  setTimeout(hideModal, 2000)
}



// function product() {
   //çalışmıyor niye anlayamadım
//   return products.find((e) => e.id == route.params.id);
// }

 function addToCart(product) {
  if(user.value){
 cartStore.addToCart(product)
}
}



function userId() {
  if (user.value) {
    return (user.value.id);
  } else return;
}

function mail(){
  if (user.value) {
    return (user.value.email);
  } else return;
}


async function insert(){
  let { data: anann} =await supabase
  .from('anan')
  .select("item")
  .eq('user_id', userId())

  // let { data: anannn} =await supabase
  // .from('anan')
  // .select("user_id")
  // .eq('user_id', userId())

  // if( anann.length===0 && anannn.value) 



 
   if( anann.length===0) { await supabase
   .from('anan')
      .insert([
     {  user_id:userId(), 
      //  item:cartStore.items[0]
      item:cartStore.items,
      mail:mail()
     },
   ],
  )}else{
  await supabase
     .from("anan")

     .update({ item:cartStore.items})
     .eq('user_id', userId());
    }
  }
 
  
</script>

<template>
  
<div >

    <Navbar />
 
    
    <div  class="flex">
      <img data-aos="zoom-out"
           data-aos-duration="600"
           data-aos-easing="in-out-sine"
        class="image"
        :src="assetsEndpoint+useProductStore().items.data.find((e) => e.id == route.params.id).thumbnail"
        alt=""
      />
      <div data-aos="zoom-out" data-aos-duration="600"
           data-aos-easing="in-out-sine" 
           data-aos-delay="50"
       class="text-block">
        <p class="category">
          - {{useProductStore().items.data.find((e) => e.id == route.params.id).type}} -
        </p>
        <h2 class="title">
          {{ useProductStore().items.data.find((e) => e.id == route.params.id).name }}
        </h2>

        <h3 class="price">
          <span  class="dollar-sign">$</span
          >{{ useProductStore().items.data.find((e) => e.id == route.params.id).price }}
        </h3>
        <p class="description">
          {{ useProductStore().items.data.find((e) => e.id == route.params.id).description }}
        </p>
        <!-- <p>{{ products.find((e) => e.id == route.params.id).rating.rate }}</p> -->
        <div class="buttons">
          <button class="add-to-fav button">❤️</button
          ><button @click="addToCart(useProductStore().items.data.find((e) => e.id == route.params.id)), insert(), showModal()" class="add-to-cart button">Add To Cart</button>
          <!-- @click="insert()" -->
          
        </div>
      </div>
    </div>
    <transition name="my-transition">
      <div v-show="show" v-if="user"  class="alert1">
        <h3 class="modal-text" >Item added to the cart!</h3>
      </div>
    <div v-show="show" v-else  class="alert2">
      <h3 class="modal-text" >You need to login.</h3>
      </div>
  </transition>
    <NuxtLink to="/shop"
      >
      <p class="entity-arrow">	&#8592</p>
    </NuxtLink>
 

  </div> 
</template>

<style scoped>


.alert1 {
  width:25rem;
 height:5rem;
  padding:0.5rem 1rem;
  background-color:rgba(123, 248, 123, 0.859);
  border-radius:1.5rem;
  position:absolute;
  right:2rem;
  bottom:2rem;
}
.alert2{
  width:25rem;
 height:5rem;
  padding:0.5rem 1rem;
  background-color:rgba(255, 112, 112, 0.859);
  border-radius:1.5rem;
  position:absolute;
  right:2rem;
  bottom:2rem;
}
.modal-text{
  color:rgb(52, 52, 52);
  font-size:1.8rem;
  font-weight:600;
height:100%;
display:flex;
justify-content:center;
align-items:center;
}

.back-arrow {
  width: 7rem;
  position: absolute;
  left: 5%;
  top: 30%;
  transform: translate(0, -50%);
  padding: 1rem 0;
  padding-right: 1rem;
  border-right: rgb(216, 216, 216) 3px solid;
  cursor: pointer;
}

.entity-arrow{
  font-size:5rem;
  color:rgb(130, 130, 130) ;
 border-right:1px rgb(177, 177, 177) solid;
 display:inline-block;
 padding-bottom:1rem;
 position:absolute;
 left:5%;
 top:25%;
 cursor: pointer;
}
.buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.button:active {
  animation: button-pop 0.3s ease-out;
}

.add-to-fav {
  background-color: transparent;
  border: rgb(255, 187, 187) 2px solid !important;
  padding: 0.6rem;
  font-size: 1.8rem;
  margin: 0;
  border-radius: 1rem;
  transition: 0.2s;
}
.add-to-fav:hover {
  background-color: rgb(255, 187, 187) !important;
}
.add-to-cart {
  margin-left: 2rem !important;
  background-image: linear-gradient(
    to right,
    #ff512f 0%,
    #dd2476 51%,
    #ff512f 100%
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
}

.add-to-cart:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}



.image {
  width: 35rem;
  height: 100%;
  margin-right: 3rem;
}
.title {
  margin-bottom: 1.5rem;
  font-size: 3.8rem;
  color: rgb(45, 45, 45);
}
.dollar-sign {
  position: absolute;
  left: 1rem;
  top: 1.7rem;
  font-size: 1.7rem;
  font-weight: 500;
}
.price {
  font-size: 3rem;
  background-color: rgb(245, 245, 255);
  color: rgb(86, 72, 193);
  display: inline-block;
  padding: 1.1rem 1.5rem;
  border-radius: 1rem;
  font-weight: 700;
  margin-bottom: 2rem;
  padding-left: 2.3rem;
  position: relative;
}
.category {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: rgb(117, 117, 117);
}
.description {
  font-size: 1.7rem;
  margin-bottom: 2.5rem;
}

.text-block {
  width: 50%;
}
.flex {
  display: flex;
  position: absolute;
  left: 50%;
  top: 52%;
  transform: translate(-50%, -50%);
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
}
</style>
