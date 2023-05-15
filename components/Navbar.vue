<script setup>
const signOut = async () => {
  const { error } = await client.auth.signOut();

  navigateTo("/");
};

const client = useSupabaseAuthClient();
const user = useSupabaseUser();

const slide = ref(false);
const showList = ref(false);

const hideList = function () {
  showList.value = !showList.value;
};

const cartStore = useCartStore();
</script>
<template lang="">
  <header class="page-format2">
    <div class="logo-container">
      <img class="logo" src="@/assets/images/logo2.webp" alt="" />
      <NuxtLink to="/"> <h2>Emaria</h2></NuxtLink>
    </div>
    <ul
      class="nav-ul"
      :class="{
        slide: slide,
      }"
    >
      <li class="nav-li">
        <NuxtLink class="nav-link" to="/">Home</NuxtLink>
      </li>
      <li class="nav-li">
        <NuxtLink class="nav-link" to="/shop">Shop</NuxtLink>
      </li>
      <li class="nav-li">
        <NuxtLink class="nav-link" to="/contact">Contact</NuxtLink>
      </li>
    </ul>
    <img
      @click="slide = !slide"
      src="@/assets/images/menu.svg"
      alt=""
      class="menu-button"
    />
    <div class="user-logged" v-if="user">
      <NuxtLink to="/cart">
        <div class="cart-box">
          <img class="cart-img" src="@/assets/images/shopping-cart.svg" />
          <p v-if="cartStore.items.length" class="cart-counter">&#9679;</p>
        </div>
      </NuxtLink>
      <img
        @click="hideList()"
        class="user-profile-button"
        src="@/assets/images/user-icon.png"
        alt=""
      />
      <transition name="my-transition-2">
        <ul v-show="showList" class="user-profile-list">
          <p class="usermail">{{ user.email }}</p>
          <NuxtLink @click="hideList()" class="nav-link" to="/cart"
            ><li class="user-profile-link">Cart</li>
          </NuxtLink>
          <NuxtLink @click="hideList()" class="nav-link" to="/profile">
            <li class="user-profile-link">Profile</li>
          </NuxtLink>

          <li @click="signOut()" class="user-profile-link">Logout</li>
        </ul>
      </transition>
    </div>
    <div v-else class="login-signup">
      <NuxtLink class="li" to="/login"
        ><button class="login-button">Login</button></NuxtLink
      >
      <NuxtLink class="li" to="/signup"
        ><button class="register-button">Register</button></NuxtLink
      >
    </div>
  </header>
</template>
<style scoped>
.cart-counter {
  position: absolute;
  color: red !important;
  font-size: 1.5rem !important;
  top: -0.8rem;
  right: 0;
  font-weight: 800 !important;
  z-index: 999;
}
.cart-box {
  z-index: 999;
  /* border: 3px solid rgb(255, 156, 255); */
  padding: 0.2rem;
  margin-right: 4rem;
  border-radius: 1rem;
  transition: 0.1s;
  cursor: pointer;
  position: absolute;
  right: 4rem;
  bottom: 0.4rem;
}
.cart-img {
  width: 2.7rem;
  margin-top: 0.2rem;
}
.username {
  min-width: 7rem;
  font-size: 2rem;
  color: #1faf24;
  text-align: center;
  margin-bottom: 0.8rem;
  font-weight: 600;
}
.usermail {
  min-width: 7rem;
  font-size: 1.4rem;
  color: #1faf24;
  text-align: center;
  margin-bottom: 0.8rem;
  font-weight: 600;
}
.user-profile-button {
  width: 4rem;
  margin-left: 1rem;
  border: 2px solid #2d2d2d5c;
  border-radius: 0.7rem;
  transition: 0.2s;
}
.user-profile-button:hover {
  background-color: #ff00440b;
}
.user-profile-list {
  position: absolute;
  top: 7rem;
  right: 0;
  flex-direction: column;
  background-color: #ff004413;
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  list-style: none;
  text-align: center;
  z-index: 999;
  border: 2px solid #ddd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.user-logged {
  position: relative;
  padding-left: 10rem;
}
.user-profile-link {
  font-size: 1.8rem;
  margin-bottom: -0.1rem;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Barlow Condensed";
  color: black;
}
.user-profile-link:hover {
  color: orangered;
}

.menu-button {
  display: none;
}

.login-signup {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 16rem;
  z-index: 9999;
}
.nav-link {
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  font-family: "Barlow Condensed";
  font-size: 2.5rem;
}
.nav-link.router-link-active {
  border-bottom: 3px solid rgb(255, 106, 255);
  padding-bottom: 2px;
}
.nav-li:after,
.login-button:after {
  content: "";
  position: absolute;
  background-color: rgb(255, 106, 255);
  height: 2px;
  width: 0%;
  left: 0;
  bottom: -0.5rem;
  transition: 0.2s;
}
.logo-container h2 {
  font-size: 2.6rem;
  font-family: "Abel";
  font-weight: 800;
  color: black;
  cursor: pointer;
}
button {
  margin-top: 0;
  padding: 1rem 2rem;
  border: none;
  background-color: transparent;
  color: black;
  font-size: 1.5rem;
  font-weight: 600;
}

.register-button {
  cursor: pointer;
  margin-top: 0.2rem;
  padding: 0.7rem 1.5rem;
  border: none;
  background-image: linear-gradient(
    to right,
    #da22ff 0%,
    #9733ee 51%,
    #da22ff 100%
  );
  background-size: 200% auto;
  transition: 0.5s;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  transition: 0.3s;
}
.register-button:active {
  background-image: linear-gradient(
    to right,
    #ba21d8 0%,
    #832dcd 51%,
    #b41fd1 100%
  );
  animation: button-pop 0.3s ease-out;
}
.login-button {
  cursor: pointer;
  padding: 0;
  font-size: 1.5rem;
  position: relative;
}
.login-button,
.register-button {
  font-family: "Barlow Condensed";
  font-size: 2rem;
  font-weight: 500;
}
.logout-button {
  cursor: pointer;
  z-index: 999;
  margin: 1rem 2rem;
  padding: 0;
}
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16rem;
}
.logo-container img {
  height: 5.5rem;
  margin-right: 0.3rem;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 4rem;
  position: relative;
  border-bottom: rgb(197, 197, 197) 1px solid;
}
.nav-ul {
  display: flex;
  list-style: none;
  z-index: 900;
}
.nav-li {
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 5rem;
  position: relative;
}
.nav-li:last-child {
  margin-right: 0 !important;
}
@media (hover: hover) {
  .nav-li:hover:after,
  .login-button:hover:after,
  .logout-button:hover:after {
    width: 100%;
  }
  .register-button:hover {
    background-position: right center;
    box-shadow: 0 0 20px #eee;
  }
  .logout-button:hover {
    background: transparent;
  }
  .login-button:hover,
  .login-button:active {
    background-color: transparent !important;
  }
}
@media (orientation: portrait) {
  .cart-box {
    right: 2rem !important;
  }
  .login-button:hover,
  .login-button:active {
    background-color: transparent !important;
  }
  .nav-link {
    font-size: 2rem;
  }
  .login-button {
    font-size: 1.6rem;
  }
  .register-button {
    font-size: 1.7rem;
    padding: 0.6rem 0.9rem;
  }
  .login-signup,
  .logo-container {
    width: 12rem;
  }

  .page-format2 {
    padding: 2rem 0.5rem 2rem 0;
  }
  .menu-button {
    display: flex;
    width: 2.5rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .nav-ul {
    top: 7.5rem;
    left: 50%;
    transform: translate(-50%, -450%);
    position: absolute;
    transition: transform 0.2s;
    margin-left: 1rem;
  }
  .slide {
    transform: translate(-50%, 0);
  }

  header {
    width: 100vw !important;
    padding: 0.6rem 1rem !important;
    z-index: 9999;
  }
}
</style>
