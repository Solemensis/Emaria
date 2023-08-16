export default defineNuxtRouteMiddleware((to, _from) => {
  if (!user().value) {
    return navigateTo("/");
  }
});
