import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { serial, text, timestamp, pgTable, uniqueIndex } from "drizzle-orm/pg-core";

import { tableNames } from "./tables";

export const UsersTable = pgTable(tableNames('users'),
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    image: text('image').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
    updatedAt: timestamp('updatedAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    }
  }
)

export type User = InferSelectModel<typeof UsersTable>
export type NewUser = InferInsertModel<typeof UsersTable>
