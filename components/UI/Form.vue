<template>
  <form v-bind="$attrs" @submit="formSubmit">
    <slot />
  </form>
</template>

<script lang="ts" setup>
import { z } from 'zod';
const { formState, formSchema, onSubmit } = defineProps<{ formState: any, formSchema: z.ZodSchema, onSubmit: (any) }>();



type _formSchema = z.infer<typeof formSchema>
const errors = ref<z.ZodFormattedError<_formSchema> | null>(null)

provide('_formErrors', errors)

const formSubmit = async (event: Event) => {

  event.preventDefault();
  console.log('formSubmit ...');
  const valid = formSchema.safeParse(formState)
  if (valid.success) {
    onSubmit(formState)
  } else {
    errors.value = valid.error.format();
    console.log('Form is invalid');
  }



};
</script>

<style></style>