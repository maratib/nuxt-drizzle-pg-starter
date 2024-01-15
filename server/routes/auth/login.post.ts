// Add ~server/routes/login.post.ts
// END-POINT-POST: http://localhost:3001/auth/login

import { User } from "~/server/model/user";
import { verify } from "~/server/utils/encrypt";
import { INVALID_CREDENTIALS } from "~/server/utils/exceptions";

export default defineEventHandler(async (event) => {

  const body = await readBody<{ email: string; password: string; rememberMe: boolean }>(event);

  const { email, password, rememberMe } = body;

  const user = new User(event)

  // console.log(body);

  const userWithPassword = await user.findByEmail(email);
  if (!userWithPassword) return INVALID_CREDENTIALS(event)

  console.log(userWithPassword);

  const verified = await verify(userWithPassword.password, password);
  if (!verified) return INVALID_CREDENTIALS(event)


  const config = useRuntimeConfig();

  const session = serialize({ userId: userWithPassword.id });
  const signedSession = sign(session, config.private.cookieSecret);

  setCookie(event, config.private.cookieName, signedSession, {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    expires: rememberMe
      ? new Date(Date.now() + config.private.cookieRememberMeExpires)
      : new Date(Date.now() + config.private.cookieExpires),
  });

  const userWithoutPassword = ({
    id: userWithPassword.id,
    name: userWithPassword.name,
    roles: userWithPassword.roles
  })

  // const { password: _password, ... } = userWithPassword;

  return {
    user: userWithoutPassword
  }
})