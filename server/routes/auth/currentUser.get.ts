// Add ~server/routes/me.get.ts
// END-POINT-GET: http://localhost:3001/auth/me

export default defineEventHandler(async (event) => {
  const userWithPassword = event.context.user;
  if (!userWithPassword) {
    return {
      user: null,
    };
  }
  const { password: _password, ...userWithoutPassword } = userWithPassword;
  return { user: userWithoutPassword }
});
