<template>
  <div>
    <h1 class="text-3xl text-red-600">Hello world!</h1>
    <pre>{{ JSON.stringify(users) }}</pre>
  </div>
</template>
<script setup lang="ts">
// import { db } from '~/db';
// import { UsersTable } from '~/db/schema';
// const usersResp = await db.select().from(UsersTable).orderBy(UsersTable.name);

const { data: users } = await useFetch('/api/users')

</script>
