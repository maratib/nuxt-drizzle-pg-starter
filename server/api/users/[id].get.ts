import { db } from "@/db";
import { UsersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    const userID = event.context.params?.id as string;
    const usersResp = await db.select().from(UsersTable).where(eq(UsersTable.id, parseInt(userID)));
    return { "user": usersResp }
  } catch (e: any) {
    throw createError({
      statusCode: 400,
      statusMessage: e.message
    })
  }
})