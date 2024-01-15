export default defineNuxtRouteMiddleware(async () => {
  const isUser = useAuthUser();

  if (isUser.value) {
    const isAdmin = isUser.value.roles.includes('ADMIN')
    if (isAdmin) return navigateTo({ name: "admin" });
    else return;
  } else return navigateTo({ name: "login" });

});
