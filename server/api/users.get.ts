import { db } from "@/db";
import { UsersTable } from "@/db/schema";

export default defineEventHandler(async () => {
  try {

    const usersResp = await db.select().from(UsersTable).orderBy(UsersTable.name);
    return { "users": usersResp }

  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message
    })
  }
})