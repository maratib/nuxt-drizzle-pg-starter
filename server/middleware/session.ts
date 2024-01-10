// Add ~/server/middleware/session.ts

export default defineEventHandler(async (event) => {
  const path = event?.path
  console.log("Passing through API session : ", path);
  const user = await getUserFromSession(event);
  if (user) event.context.user = user;

  if (path.startsWith('/api') && !user) {
    return UNAUTHORIZED(event)
  }

})