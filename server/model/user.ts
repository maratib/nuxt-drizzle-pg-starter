// Add ~/server/model/user.ts

import { eq } from "drizzle-orm";
import { db } from "~/db";
import { NewUser, UsersTable } from "~/db/schema";
import { BAD_REQUEST, RESOURCE_NOT_FOUND } from "~/server/utils/exceptions";
import { hash } from "~/server/utils/encrypt";

export class User {


  constructor(private event: any) { }


  async all() {
    try {
      const usersResp = await db.select().from(UsersTable);

      return { users: usersResp };
    } catch (e: any) {
      return BAD_REQUEST(this.event);
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
      return RESOURCE_NOT_FOUND(this.event);
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
      return RESOURCE_NOT_FOUND(this.event);
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
      return RESOURCE_NOT_FOUND(this.event);
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

    } catch (e: any) {
      return BAD_REQUEST(this.event)
    }


  } // createUser ends



}
