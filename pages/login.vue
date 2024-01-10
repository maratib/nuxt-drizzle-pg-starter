<template>
  <div class="grid place-content-center h-screen">
    <div>
      <h1>Login form</h1>
    </div>
    <form>
      Email
      <input type="text" v-model="formState.email" />

      <input type="password" v-model="formState.password" />

    </form>





  </div>
</template>
<script setup lang="ts">

const formState = ref({
  email: '',
  password: ''
})

</script>