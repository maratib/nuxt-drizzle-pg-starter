import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { uuid, timestamp, pgTable, uniqueIndex, varchar, boolean, pgEnum } from "drizzle-orm/pg-core";

import { tableNames } from "./tables";

// declaring enum in database
export const userRoles = pgEnum('roles', ['USER', 'ADMIN']);

export const UsersTable = pgTable(tableNames('users'),
  {
    id: uuid('id').primaryKey().defaultRandom(),
    user: varchar('user').notNull(),
    email: varchar('email').notNull(),
    password: varchar('password').notNull(),

    name: varchar('name'),
    phone: varchar('phone'),
    image: varchar('image'),
    roles: userRoles('roles').default('USER'),
    isActive: boolean('active').default(true),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx_email: uniqueIndex('unique_email').on(users.email),
      uniqueIdx_user: uniqueIndex('unique_user').on(users.user),
    }
  }
)

export type User = InferSelectModel<typeof UsersTable>
export type NewUser = InferInsertModel<typeof UsersTable>
