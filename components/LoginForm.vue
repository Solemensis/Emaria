<script setup>
const email = ref("");
const password = ref("");

const client = useSupabaseClient();
const login = async () => {
  const { user, error } = await client.auth.signIn({
    email: email.value,
    password: password.value,
  });
  console.log("user", user);
  console.log("error", error);
};

const user = useSupabaseUser();
onMounted(() => {
  watchEffect(() => {
    if (user.value) {
      navigateTo("/");
    }
  });
});
</script>

<template>
  <div class="container">
    <p>
      Don't have an account?
      <NuxtLink to="/SignupPage" class="register">Register</NuxtLink>
    </p>
    <h2>
      Login to
      <span>Emaria</span>
    </h2>
    <FormKit
      messages-class="messages"
      type="form"
      submit-label="Sign In"
      @submit="() => login()"
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
  </div>
</template>

<style>
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
* {
  text-align: center;
}
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
}
.register:hover {
  border-bottom: 1px solid #ca14ca;
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
</style>
