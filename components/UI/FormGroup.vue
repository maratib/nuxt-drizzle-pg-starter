<template>
  <div>
    <label v-bind="$attrs" class="block my-3">{{ label ? label : name }}</label>
    <slot />
    <div v-if="errors?.[name]" class="text-red-600 text-sm">
      <span v-for="error in errors?.[name]?._errors"> {{ error }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ name: string, label?: string }>();
const errors: any = inject('_formErrors')
</script>

