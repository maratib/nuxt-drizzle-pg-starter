<template>
  <div>
    <h1>User Home</h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'user-only',
  layout: 'user-layout',
});

</script>

<style></style>