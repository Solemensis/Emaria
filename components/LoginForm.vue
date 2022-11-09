<script setup>
const cartStore = useCartStore();

const email = ref("");
const password = ref("");

const supabase = useSupabaseClient();
const user = useSupabaseUser();

const login = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
    //    options: {
    //  redirectTo: '/'
    //  }
  });

  if (!error) {
    window.location.reload();
  }
  if (error) {
    show2.value = true;
    setTimeout(hideModal2, 2000);
  }
};

const show2 = ref(false);
function hideModal2() {
  if (show2.value == true) show2.value = false;
}

// const oAuth = async () => {
// const { data, error } = await supabase.auth.signInWithOAuth({
//   provider: 'github',
//   //  options: {
//   //  redirectTo: '/'
//   //  }
// })
//   if (!error) {

//       //  window.location.reload();
//   }
// if (error) {

//       show2.value = true;
//       setTimeout(hideModal2, 2000)
// }

// }

// onMounted(()=>{
//   watchEffect(()=> {
//     if (user.value) {

//       navigateTo("/")
//     }
//   })
// })
</script>

<template>
  <div data-aos="zoom-in" data-aos-duration="900" class="container">
    <transition name="my-transition">
      <div v-show="show2" class="alert2">
        <h3 class="modal-text">Your Info is Incorrect.</h3>
      </div>
    </transition>
    <!-- <div class="git-box">
<img src="@/assets/images/github.png" alt="">
   <p class="git-login" @click="oAuth()">Continue with GitHub</p>
  </div> -->
    <p>
      Don't have an account?
      <NuxtLink to="/signup" class="register">Register</NuxtLink>
    </p>
    <h2>
      Login to
      <span>Emaria</span>
    </h2>
    <FormKit
      messages-class="messages"
      type="form"
      submit-label="Sign In"
      @submit="login()"
    >
      <FormKit
        :classes="{
          input: 'input1',
          messages: 'messages',
        }"
        v-model="email"
        label="Email address"
        validation="required|email"
        type="email"
        placeholder="✉ Email"
      />
      <FormKit
        :classes="{
          input: 'input2',
          messages: 'messages',
        }"
        v-model="password"
        label="Password"
        validation="required|length:6"
        type="password"
        placeholder="⛓ Password"
      />

      <p><NuxtLink class="forgot-pass">Forgot Your Password?</NuxtLink></p>
    </FormKit>
    <!-- <teleport to='body' >
   <NuxtLink to="/"> <p class="entity-arrow">	&#8592</p></NuxtLink>
  </teleport> -->
  </div>
</template>

<style>
.git-login {
  color: white;
  margin: 0 !important;
  font-size: 1.8rem !important;
  font-weight: 600;
}
.git-box img {
  height: 3rem;
  margin-right: 0.2rem;
}
.git-box {
  background-color: #24292ed1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  transition: background-color 0.2s;
}
.git-box:hover {
  background-color: #24292e;
}
.git-box:active {
  /* animation: button-pop 0.3s ease-out; */
  background-color: #131517;
}
.formkit-label {
  display: none;
}

.input1,
.input2 {
  height: 4rem;
  width: 30rem;
  margin-bottom: 1rem;
  border: none;
  background-color: rgb(246, 246, 246);
  border-radius: 1rem;
  font-size: 1.5rem;
  text-align: center;
  border: 1px black solid;
  outline: none;
  transition: 0.3s;
}

.input2 {
  margin-bottom: 2rem !important;
}

.messages {
  position: absolute;
  display: none;
}

button {
  padding: 1rem 3rem;
  background-color: rgb(203, 23, 137);
  color: white;
  font-size: 1.5rem;
  border-radius: 900rem;
  margin-top: 2rem;
  transition: 0.1s;
  outline: none !important;
  border: none !important;
}

.input1:focus,
.input2:focus {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

button:hover {
  background-color: rgb(161, 21, 110);
}
button:active {
  background-color: rgb(134, 16, 91);
}

[data-invalid] .input1,
[data-invalid] .input2 {
  border: 2px solid rgb(251, 126, 126);
}

[data-complete] .input1,
[data-complete] .input2 {
  border: 2px solid rgb(87, 220, 87);
}
</style>

<style scoped>
@media (orientation: portrait) {
  .entity-arrow {
    top: 4rem !important;
    left: 5rem !important;
    font-size: 4rem !important;
  }
}
.entity-arrow {
  font-size: 5rem;
  color: rgb(130, 130, 130);
  border-right: 1px rgb(177, 177, 177) solid;
  display: inline-block;
  padding-bottom: 1rem;
  position: absolute;
  left: 5%;
  top: 25%;
  cursor: pointer;
}
* {
  text-align: center;
}
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) !important;
}

h2 {
  font-weight: 700;
  font-size: 4rem;
  margin-bottom: 3rem;
}

span {
  color: rgb(15, 185, 12);
}

p {
  margin-bottom: 3rem;
  font-size: 2rem;
}
.register {
  color: #ca14ca;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}

.register:after {
  content: "";
  position: absolute;
  background-color: rgb(255, 106, 255);
  height: 2px;
  width: 0%;
  left: 0;
  bottom: -0.5rem;
  transition: 0.2s;
}
.register:hover:after {
  width: 100%;
}
.forgot-pass {
  font-size: 1.8rem;
  color: #2e2b2b;
  cursor: pointer;
  text-decoration: none;
}
.forgot-pass:hover {
  border-bottom: 1px solid #2e2b2b;
}

.alert2 {
  width: 25rem;
  height: 5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(255, 112, 112, 0.859);
  border-radius: 1.5rem;
  position: absolute;
  right: 2.5rem;
  bottom: -7rem;
}

.modal-text {
  color: rgb(52, 52, 52);
  font-size: 1.8rem;
  font-weight: 600;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
