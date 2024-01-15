// middleware/auth.ts


export default defineNuxtRouteMiddleware(async (to, from) => {
  const res = to?.name as string;
  // console.log('From auth client middleware : ', res)
  const authUser = useAuthUser();
  if (!authUser.value) {
    console.log('LOADING USER');
    const { me } = useAuth();
    await me();
  }

  if (authUser.value && res.startsWith('login')) {
    return navigateTo('/')
  }
})







// if (authUser.value) {
//   if (authUser.value.roles.includes('ADMIN')) {
//     if (!res.includes('admin')) return navigateTo({ name: 'admin' })
//     return
//   } else {
//     if (!res.includes('user')) return navigateTo({ name: 'user' })
//     return
//   }


// } else {
//   return navigateTo({ name: 'login' })
// }


// if (!authUser.value && res !== 'login') {
//   return navigateTo({ name: "login" });
// } else {
//   return navigateTo('/user/');
// }




// const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive
// const token = useCookie('token'); // get token from cookies

// if (token.value) {
//   // check if value exists
//   authenticated.value = true; // update the state to authenticated
// }

// // if token exists and url is /login redirect to homepage
// if (token.value && to?.name === 'login') {
//   return navigateTo('/');
// }

// // if token doesn't exist redirect to log in
// if (!token.value && to?.name !== 'login') {
//   abortNavigation();
//   return navigateTo('/login');
// }