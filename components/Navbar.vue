<script setup>
const user = useSupabaseUser();

const supabase = useSupabaseClient();

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    window.location.reload();
  }
};

const slide = ref(false);
</script>

<template lang="">
  <header class="page-format2">
    <div class="logo-container">
      <img class="logo" src="@/assets/images/logo2.webp" alt="" />
      <NuxtLink to="/"> <h2>Emaria</h2></NuxtLink>
    </div>

    <ul
      :class="{
        slide: slide,
      }"
    >
      <li><NuxtLink class="nav-link" to="/">Home</NuxtLink></li>
      <li><NuxtLink class="nav-link" to="/shop">Shop</NuxtLink></li>
      <li><NuxtLink class="nav-link" to="/contact">Contact</NuxtLink></li>
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
          <p v-if="useCartStore().totalCount" class="cart-counter">
            <!-- {{ useCartStore().totalCount }} -->
            &#9679;
          </p>
        </div>
      </NuxtLink>

      <p>Hello, {{ user.user_metadata.user_name }}!</p>
      <button class="logout-button" @click="signOut()">Logout</button>
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
.menu-button {
  display: none;
}

.cart-counter {
  position: absolute;
  color: red !important;
  font-size: 1.5rem !important;
  top: -0.5rem;
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
  position: relative;
}

.cart-img {
  width: 3rem;
  margin-top: 0.2rem;
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
li:after,
.login-button:after,
.logout-button:after {
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
.user-logged p {
  margin-right: 1rem;
  font-size: 2rem;

  color: rgb(43, 185, 50);
  padding: 1rem 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: -1.5rem;
}
.user-logged {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.user-logged button {
  position: absolute;
  right: 1rem;
  bottom: -1.5rem;
  cursor: pointer;
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
  padding: 1.5rem 5rem;
  position: relative;
  border-bottom: rgb(197, 197, 197) 1px solid;
  /* background-color: #f8d8bc;
  border-bottom-left-radius: 3rem;
  border-bottom-right-radius: 3rem; */
}
ul {
  display: flex;
  list-style: none;
  z-index: 900;

  /* position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%); */
}
li {
  text-decoration: none;
  color: black;
  font-size: 2rem;
  font-weight: 500;
  margin-right: 5rem;
  position: relative;
}
li:last-child {
  margin-right: 0 !important;
}

@media (hover: hover) {
  .cart-box:hover {
    transform: scale(0.95);
  }
  li:hover:after,
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
  .login-button:hover {
    background-color: transparent;
  }
}

@media (orientation: portrait) {
  .nav-link {
    font-size: 2rem;
  }

  .login-button {
    font-size: 1.5rem;
  }
  .register-button {
    font-size: 1.6rem;
  }
  .login-signup,
  .logo-container {
    width: 12rem;
  }

  .user-logged p {
    margin-top: -0.8rem;
  }

  .user-logged button {
    padding-bottom: 0.5rem;
  }
  .cart-box {
    position: fixed;
    bottom: 2.9rem;
    right: -1rem;
    background-color: rgb(203, 255, 189);
    padding: 1.3rem;
    border-radius: 20rem;
    z-index: 9999;
  }
  .cart-counter {
    z-index: 999;
    font-size: 2.1rem !important;
    top: -0.4rem;
    font-weight: 600 !important;
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
    /* display: none; */
  }
  ul {
    top: 7.5rem;
    left: 50%;
    transform: translate(-50%, -450%);
    position: absolute;
    /* display: none; */
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
