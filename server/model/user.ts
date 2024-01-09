// Add ~/server/model/user.ts

import { eq } from "drizzle-orm";
import { db } from "~/db";
import { NewUser, UsersTable } from "~/db/schema";
import { BAD_REQUEST, RESOURCE_NOT_FOUND } from "~/server/utils/exceptions";
import { hash } from "~/server/utils/encrypt";

export class User {
  constructor() { }

  async all() {
    try {
      const usersResp = await db.select().from(UsersTable);
      return { users: usersResp };
    } catch (e: any) {
      BAD_REQUEST(e);
    }
  }

  async findById(id: string) {
    try {
      const usersResp = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.id, id));
      return usersResp?.[0];
    } catch (e: any) {
      RESOURCE_NOT_FOUND(e);
    }
  }

  async findByUser(user: string) {
    try {
      const usersResp = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.user, user));
      return { user: usersResp };
    } catch (e: any) {
      RESOURCE_NOT_FOUND(e);
    }
  }

  async findByEmail(email: string) {
    try {
      const usersResp = await db
        .select()
        .from(UsersTable)
        .where(eq(UsersTable.email, email));
      return usersResp?.[0];
    } catch (e: any) {
      RESOURCE_NOT_FOUND(e);
    }
  }

  async create(user: NewUser) {

    try {
      // Hash password
      const hashedPassword = await hash(user.password);
      const newUser: NewUser = { ...user, password: hashedPassword }
      const result = await db.insert(UsersTable).values(newUser).returning();

      return {
        newUser: result
      }

    } catch (e: any) { BAD_REQUEST(e) }


  } // createUser ends



}
