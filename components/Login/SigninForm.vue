<script setup>
const supabase = useSupabaseClient();

const email = ref("");
const password = ref("");

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });
  if (!error) {
    navigateTo("/");
  }
  // if (error) {
  //   errorMessage.value = error;
  //   clearError();
  // }
  if (error) {
    show2.value = true;
    setTimeout(hideModal2, 2000);
  }
}

async function oauthLogin(provider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
  });
}

const show2 = ref(false);
function hideModal2() {
  if (show2.value == true) show2.value = false;
}
</script>
<template>
  <div style="height: 50vh">
    <div class="container">
      <transition name="my-transition">
        <div v-show="show2" class="alert2">
          <h3 class="modal-text">Your Info is Incorrect.</h3>
        </div>
      </transition>

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
      <div class="oauth-box">
        <div @click="oauthLogin('github')" class="git-box">
          <img src="@/assets/images/github.svg" alt="github logo" />
          <p class="git-login">Continue with GitHub</p>
        </div>
        <div @click="oauthLogin('google')" class="google-box">
          <img src="@/assets/images/google.svg" alt="google logo" />
          <p class="google-login">Continue with Google</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.oauth-box {
  position: absolute;
  display: flex;
  gap: 1rem;
  bottom: -10rem;
}
.google-login {
  color: black;
  margin: 0 !important;
  font-size: 1.5rem !important;
  font-weight: 600;
}
.google-box img {
  height: 3rem;
  margin-right: 0.7rem;
}
.google-box {
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  cursor: pointer;
}
.google-box:hover {
  background-color: #ccc;
}
.git-login {
  color: white;
  margin: 0 !important;
  font-size: 1.5rem !important;
  font-weight: 600;
}
.git-box img {
  height: 3rem;
  margin-right: 0.7rem;
  filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(123deg)
    brightness(109%) contrast(110%);
}
.git-box {
  background-color: #24292ed1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;
  cursor: pointer;
}
.git-box:hover {
  background-color: #24292ee8;
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
  h2 {
    font-size: 3.4rem !important;
  }
  .entity-arrow {
    top: 4rem !important;
    left: 5rem !important;
    width: 5.5rem !important;
  }
  .google-login,
  .git-login {
    font-size: 1.3rem;
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
