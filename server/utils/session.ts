// Add ~/server/utils/session.ts

import type { H3Event } from "h3";
import { User } from "~/server/model/user";
import { deserialize, unsign } from "./cookie";

export async function getUserFromSession(event: H3Event) {

  const user = new User(event);

  const config = useRuntimeConfig();

  const cookie = getCookie(event, config.private.cookieName);
  if (!cookie) return null;

  const unsignedSession = unsign(cookie, config.private.cookieSecret);
  if (!unsignedSession) return null;

  const session = deserialize(unsignedSession);

  return user.findById(session.userId);
}
