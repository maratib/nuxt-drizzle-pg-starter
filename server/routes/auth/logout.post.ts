// Add ~server/routes/logout.post.ts
// END-POINT-POST: http://localhost:3001/auth/logout

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  deleteCookie(event, config.private.cookieName, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });

  return {
    user: null,
  };
});
