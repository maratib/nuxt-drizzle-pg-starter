<template>
  <div>
    <div class="title">
      <h1>Login</h1>
      <img src="~/assets/img/joystick.svg" alt="JoyStick">
      <button @click="onLogin">Login</button>
      <button @click="onLogout">Logout</button>
      <button @click="onMe">Me</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
const { login, logout, me } = useAuth();

const form = reactive({
  data: {
    email: 'admin@mail.com',
    password: 'Admin322',
    rememberMe: false
  },
  error: '',
  pending: false
})

const onLogin = async () => {
  console.log("Login clicked");
  form.error = ''
  form.pending = true

  await login(form.data.email, form.data.password, form.data.rememberMe);


};
const onLogout = async () => {
  console.log("Logout clicked");
  logout()
}

const onMe = async () => {
  console.log("Me clicked");
  me()
}

</script>