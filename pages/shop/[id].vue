<script setup>



const supabase = useSupabaseClient();
const user = useSupabaseUser();

const route = useRoute();
const { data: products } = await useFetch("https://fakestoreapi.com/products/");
const cartStore = useCartStore();




// function product() {
   //çalışmıyor niye anlayamadım
//   return products.find((e) => e.id == route.params.id);
// }

 function addToCart(product) {
 cartStore.addToCart(product)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function userId() {
  if (user.value) {
    return user.value.id;
  } else return;
}



async function insert(){
  let { data: anann} =await supabase
  .from('anan')
  .select("item")
  .eq('user_id', userId())


//   watch(
//   useCartStore().items,
//   () => {
//    anann =  useCartStore().items;
//   },
//   {
//     deep: true,
//   }
// );


   if( anann.length===0) { await supabase
   .from('anan')
      .insert([
     {  row_id:getRandomInt(99999999), user_id:userId(), 
      //  item:cartStore.items[0]
      item:cartStore.items
     },
   ],
  )}else{
  await supabase
     .from("anan")

     .update({ item:cartStore.items})
     .eq('user_id', userId());
    }
  }
// async function insert(){
//   console.log("it runs!")

//   let { data: anann} =await supabase
//   .from('anan')
//   .select("id, amount")
//   .eq('user_id', userId()).eq("id", route.params.id)

//   if( anann.length===0) { await supabase
//   .from('anan')
//   .insert([
//     {  row_id:getRandomInt(99999999), user_id:userId(), 
//       item:(products.value.find((e) => e.id == route.params.id)), amount:1, id:route.params.id
//     },
//   ],
//  )

//  let { data: anannn} = await supabase
//   .from("anan")
//   .select("item")
//   .eq("user_id", userId());


//   if (user.value) {
//     cartStore.items = anannn;
//   }
// }else{
// await supabase
//     .from("anan")

//     .update({ amount:(anann[0].amount)+1})
//     .eq("id", route.params.id);
  
    
// let { data: anannn} = await supabase
//   .from("anan")
//   .select("item")
//   .eq("user_id", userId());


//   if (user.value) {
//     cartStore.items = anannn;
//   }
//   }
// }
 
</script>

<template>
<div >
  
    <Navbar />
 
    
    <div  class="flex">
      <img data-aos="zoom-out"
        class="image"
        :src="products.find((e) => e.id == route.params.id).image"
        alt=""
      />
      <div data-aos="zoom-out" class="text-block">
        <p class="category">
          - {{ products.find((e) => e.id == route.params.id).category }} -
        </p>
        <h2 class="title">
          {{ products.find((e) => e.id == route.params.id).title }}
        </h2>

        <h3 class="price">
          <span>$</span
          >{{ products.find((e) => e.id == route.params.id).price }}
        </h3>
        <p class="description">
          {{ products.find((e) => e.id == route.params.id).description }}
        </p>
        <!-- <p>{{ products.find((e) => e.id == route.params.id).rating }}</p> -->
        <div class="buttons">
          <button class="add-to-fav button">❤️</button
          ><button @click="addToCart(products.find((e) => e.id == route.params.id)), insert()" class="add-to-cart button">Add To Cart</button>
          <!-- @click="insert()" -->
          
        </div>
      </div>
    </div>
    <NuxtLink to="/shop"
      >
      <!-- <img class="back-arrow" src="@/assets/images/left-arrow.png" alt=""/> -->
      <p class="entity-arrow">	&#8592</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
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
  width: 28rem;
  height: 100%;
  margin-right: 3rem;
}
.title {
  margin-bottom: 1.5rem;
  font-size: 3.8rem;
  color: rgb(45, 45, 45);
}
span {
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
