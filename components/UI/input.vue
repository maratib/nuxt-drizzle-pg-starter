<template>
  <input v-bind="$attrs" :value="modelValue" class="w-full rounded-lg"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
</template>

<script lang="ts" setup>
defineProps<{ modelValue: string | number }>();
</script>

<style></style>

