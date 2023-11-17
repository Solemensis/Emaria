<script setup>
const signOut = async () => {
  const { error } = await client().auth.signOut();
  navigateTo("/");
};
</script>

<template>
  <ul class="user-panel">
    <p class="user-mail">{{ user().value?.email }}</p>
    <NuxtLink @click="$emit('closeUserPanel')" class="nav-link" to="/cart"
      ><li class="user-panel-links">Cart</li>
    </NuxtLink>
    <NuxtLink @click="$emit('closeUserPanel')" class="nav-link" to="/profile">
      <li class="user-panel-links">Profile</li>
    </NuxtLink>

    <li @click="signOut()" class="user-panel-links">Logout</li>
  </ul>
</template>

<style scoped>
.user-panel {
  position: absolute;
  top: 7rem;
  right: 0;
  flex-direction: column;
  background-color: #ff004413;
  border-radius: 0.5rem;
  padding: 1rem 1rem;
  list-style: none;
  text-align: center;
  z-index: 1500;
  border: 2px solid #ddd;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.show-user-panel {
  width: 4rem;
  margin-left: 1rem;
  border: 2px solid #2d2d2d5c;
  border-radius: 0.7rem;
  transition: 0.2s;
}
.show-user-panel:hover {
  background-color: #ff00440b;
}
.user-mail {
  min-width: 7rem;
  font-size: 1.4rem;
  color: #1faf24;
  text-align: center;
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.user-panel-links {
  font-size: 1.8rem;
  margin-bottom: -0.1rem;
  cursor: pointer;
  transition: 0.2s;
  font-family: "Barlow Condensed";
  color: black;
}

.user-panel-links:hover {
  color: orangered;
}

.nav-link {
  color: #000000;
  cursor: pointer;
  text-decoration: none;
  font-family: "Barlow Condensed";
  font-size: 2.5rem;
}

@media (orientation: portrait) {
  .nav-link {
    font-size: 2rem;
  }
}
</style>
