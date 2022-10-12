<script setup>
// import { createClient } from "@supabase/supabase-js";

// const config = useRuntimeConfig();

// const supabaseUrl = config.SUPABASE_URL;
// const supabaseKey = config.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

const supabase = useSupabaseClient();


const userName = ref("");
const email = ref("");
const password = ref("");


const signUp = async () => {
  const { data, error } = await supabase.auth.signUp(
    {
      email: email.value,
      password: password.value,
      options: {
      data: {
        user_name:userName.value
      }
    }
    }
  );
  console.log("data", data);
  console.log("error", error);
};





</script>

<template>
  <div data-aos="zoom-in" class="container">
    <p>
      Already have an account?
      <NuxtLink to="/login" class="register">Login</NuxtLink>
    </p>
  
    <h2>
      Create Your <br />
      <span>Emaria</span> Account
    </h2>

    <FormKit type="form" submit-label="Sign Up" @submit="() => signUp()">
      <FormKit
        :classes="{ input: 'input4', messages: 'messages' }"
        v-model="userName"
        label="Username"
        validation="required|length:3"
        type="text"
        placeholder="☺️ Username"
      />
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
    <teleport to='body' >
      <NuxtLink to="/"> <p class="entity-arrow">	&#8592</p></NuxtLink>
  </teleport>
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
