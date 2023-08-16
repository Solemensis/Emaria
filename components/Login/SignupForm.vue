<script setup>
// const userName = ref("");
const email = ref("");
const password = ref("");

const signUp = async () => {
  const { data, error } = await client().auth.signUp({
    email: email.value,
    password: password.value,
  });
  if (data) {
    show1.value = true;
    setTimeout(hideModal1, 4000);
  }
  if (error) {
    show2.value = true;
    setTimeout(hideModal2, 4000);
  }
};

const show1 = ref(false);
const show2 = ref(false);
function hideModal1() {
  if (show1.value == true) show1.value = false;
}
function hideModal2() {
  if (show2.value == true) show2.value = false;
}
</script>
<template>
  <div style="height: 50vh">
    <div class="container">
      <transition name="my-transition">
        <div v-show="show1" class="alert1">
          <h3 class="modal-text">Confirm Your E-mail.</h3>
        </div>
      </transition>
      <transition name="my-transition">
        <div v-show="show2" class="alert2">
          <h3 class="modal-text">There was an Error.</h3>
        </div>
      </transition>
      <p>
        Already have an account?
        <NuxtLink to="/login" class="login">Login</NuxtLink>
      </p>
      <h2>
        Create Your <br />
        <span>Emaria</span> Account
      </h2>
      <FormKit
        messages-class="messages"
        type="form"
        submit-label="Sign Up"
        @submit="() => signUp()"
      >
        <!-- <FormKit
          :classes="{ input: 'input4', messages: 'messages' }"
          v-model="userName"
          label="Username"
          validation="required|length:3"
          type="text"
          placeholder="☺️ Username"
        /> -->
        <FormKit
          :classes="{
            input: 'input5',
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
            input: 'input6',
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
      <!-- <teleport to="body">
      <NuxtLink to="/">
        <img src="@/assets/images/arrow.svg" alt="" class="entity-arrow" />
      </NuxtLink>
    </teleport> -->
    </div>
  </div>
</template>
<style>
.formkit-label {
  display: none;
}
.input4,
.input5,
.input6 {
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
.input6 {
  margin-bottom: 2rem !important;
}
.messages {
  position: absolute;
  display: none !important;
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
.input4:focus,
.input5:focus,
.input6:focus {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
button:hover {
  background-color: rgb(161, 21, 110);
}
button:active {
  background-color: rgb(134, 16, 91);
}
[data-invalid] .input4,
[data-invalid] .input5,
[data-invalid] .input6 {
  border: 2px solid rgb(251, 126, 126);
}
[data-complete] .input4,
[data-complete] .input5,
[data-complete] .input6 {
  border: 2px solid rgb(87, 220, 87);
}
</style>
<style scoped>
@media (orientation: portrait) {
  h2 {
    font-size: 3.4rem !important;
  }
  .entity-arrow {
    top: 4rem !important;
    left: 5rem !important;
    width: 5.5rem !important;
  }
}
.entity-arrow {
  width: 6rem;
  opacity: 0.8;
  /* border-left: 3px rgb(143, 143, 143) solid; */
  position: absolute;
  left: 5%;
  top: 25%;
  cursor: pointer;
}
.entity-arrow:active {
  animation: button-pop 0.3s ease-out;
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
.login {
  color: #ca14ca;
  cursor: pointer;
  text-decoration: none;
  position: relative;
}
.login:after {
  content: "";
  position: absolute;
  background-color: rgb(255, 106, 255);
  height: 2px;
  width: 0%;
  left: 0;
  bottom: -0.5rem;
  transition: 0.2s;
}
.login:hover:after {
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
.alert1 {
  width: 25rem;
  height: 5rem;
  padding: 0.5rem 1rem;
  background-color: rgba(123, 248, 123, 0.859);
  border-radius: 1.5rem;
  position: absolute;
  right: 2.5rem;
  bottom: -7rem;
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
