<template>
  <!-- <Header /> -->
  <main>
    <nuxt-link to="/" class="mr-8">Home</nuxt-link>
    <nuxt-link to="/admin" class="mr-8">Admin Home</nuxt-link>
    <nuxt-link to="/admin/about">Admin About</nuxt-link>
    <h2>Admin layout</h2>

    <slot />
  </main>
  <!-- <Footer /> -->
  <!-- <CookieConsent /> -->
</template>

<script lang="ts" setup>
</script>
<style></style>