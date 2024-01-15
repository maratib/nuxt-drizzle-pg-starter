<template>
  <div class="border-b-[1px] border-red-500">
    <slot name="header" />
  </div>
  <div v-bind="$attrs">

    <slot />
  </div>
</template>

<script lang="ts" setup>

function handle_event() {
  console.log('Event handled');
}

</script>

<style></style>