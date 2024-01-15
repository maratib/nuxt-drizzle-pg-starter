// Add ~server/routes/me.get.ts
// END-POINT-GET: http://localhost:3001/auth/me

import { UserWithoutPassword } from "~/types";

export default defineEventHandler(async (event) => {
  const userWithPassword = event.context.user;
  if (!userWithPassword) {
    return {
      user: null,
    };
  }
  // const { password: _password, ...userWithoutPassword } = userWithPassword;

  const userWithoutPassword: UserWithoutPassword = ({
    id: userWithPassword.id,
    name: userWithPassword.name,
    roles: userWithPassword.roles,
    avatar: userWithPassword.image,
  })

  return { user: userWithoutPassword }
});
