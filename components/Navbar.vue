<script setup>
const user = useSupabaseUser();

const client = useSupabaseClient();

const signOut = async () => {
  const { error } = await client.auth.signOut();
};
</script>

<template lang="">
  <ul>
    <li @click="anan">Home</li>
    <li>Ingredients</li>
    <li>Contact</li>
    <div v-if="user">
      <p>{{ user.user_metadata.userName }}</p>

      <button @click="signOut()">Logout</button>
    </div>

    <NuxtLink v-else class="li" to="/LoginPage"
      ><button>Login</button></NuxtLink
    >
  </ul>
</template>

<style scoped>
ul {
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 50%;
  top: 3.1rem;
  transform: translate(-50%, 0);
  width: 38rem;
  list-style: none;

  padding: 0.5rem 1rem;
  z-index: 900;
}
.li {
  font-size: 2rem;
  text-decoration: none;
  color: black;
}
</style>
