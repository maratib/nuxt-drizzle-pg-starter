<template>
  <header>
    <ul class="list-none flex gap-8">
      <li><nuxt-link to="/">Home</nuxt-link></li>
      <li><nuxt-link to="/about">About</nuxt-link></li>
      <li v-if="!loggedIn"><nuxt-link to="/login">Login</nuxt-link></li>
      <li v-if="loggedIn">
        <a href="#" @click="doLogout">Logout</a>
      </li>
      <!-- <li><nuxt-link to="/logout">Logout</nuxt-link></li> -->
      <li><nuxt-link to="/user">User</nuxt-link></li>
      <li><nuxt-link to="/admin">Admin</nuxt-link></li>
    </ul>

    isLoggedIn : {{ loggedIn }}

    <UIDarkMode class="inline-block right-0" />
  </header>
</template>

<script lang="ts" setup>

const { logout, isLoggedIn } = useAuth();



const loggedIn = computed(() => isLoggedIn())

const doLogout = async () => {
  await logout();
  navigateTo({ name: 'login' })
};
</script>
