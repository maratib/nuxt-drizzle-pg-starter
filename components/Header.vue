<template>
  <header>
    <ul class="list-none flex gap-8">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/login">Login</nuxt-link></li>
      <!-- <li><nuxt-link to="/logout">Logout</nuxt-link></li> -->
      <li><nuxt-link to="/user">User</nuxt-link></li>
      <li><nuxt-link to="/admin">Admin</nuxt-link></li>
    </ul>
  </header>
</template>

<script lang="ts" setup>
// import { storeToRefs } from 'pinia';
// import { useAuthStore } from '~/stores/auth';

// const router = useRouter();

// const { logUserOut } = useAuthStore();
// const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive

// const logout = () => {
//   logUserOut();
//   router.push('/login');
// };
</script>
