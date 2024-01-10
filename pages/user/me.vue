<template>
  <div>
    <h1>User Me</h1>
    <p>
      {{ JSON.stringify(me1) }}
    </p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'user',
});

const { me } = useAuth();

const me1 = await me();

</script>

<style></style>