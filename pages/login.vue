<template>
  <div class="grid place-content-center min-h-screen">
    <pre> User : {{ authUser }}</pre>
    <UICard class="bg-slate-300 w-[300px] p-4">
      <template #header>
        <h2 class="bg-blue-300 p-2">Login</h2>
      </template>
      <UIForm :formState="formState" :formSchema="formSchema" :onSubmit="onSubmit">

        <UIFormGroup label="User" name="user">
          <UIInput v-model="formState.user" type="text" />
        </UIFormGroup>

        <UIFormGroup label="Password" name="password">
          <UIInput v-model="formState.password" type="password" class="text-green-500" />
        </UIFormGroup>


        <UIButton>Login</UIButton>


      </UIForm>
    </UICard>


  </div>
</template>
<script setup lang="ts">
import { z } from 'zod';
import type { LoginForm } from '~/types';
definePageMeta({
  layout: false,
});


const { login, me } = useAuth();
me();
const authUser = useAuthUser();

const formState = ref<LoginForm>({
  user: '',
  password: ''
})

const formSchema = ref(z.object({
  user: z.string().min(3, { message: 'User must be at least 3 characters' }).max(50),
  password: z.string().min(3, { message: 'Password must be at least 3 characters' }).max(50)
}))

const onSubmit = async (form: LoginForm) => {
  console.log('from onSubmitted');
  // console.log(form?.user);
  // console.log(form?.password);
  const authUser = await login(form?.user, form?.password, false)
  if (!authUser) {
    return navigateTo({ name: 'login' })
  } else {
    if (authUser.value?.roles.includes('ADMIN')) {
      navigateTo({ name: 'admin' })
    } else {
      navigateTo({ name: 'user' })
    }
  }



};

</script>