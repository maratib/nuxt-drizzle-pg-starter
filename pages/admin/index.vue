<template>
  <div>
    <h1>Admin Home</h1>

  </div>
</template>
<script setup lang="ts">
definePageMeta({
  middleware: ["admin-only"],
  layout: 'admin-layout'
})
</script>
