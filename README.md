# Nuxt, TailwindCSS and Drizzle with pg

# Adding Drizzle

```bash
# Add drizzle with postgres driver
yarn add drizzle-orm pg

# Add drizzle tools
yarn add -D drizzle-kit @types/pg dotenv

# .env example
DB_URL="postgres://user:password@host:5432/dbName?sslmode=require"

```
```javascript
// Add drizzle.config.ts

import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL!,
  },
  verbose: true,
  strict: true,
})
```

```javascript
// Add ./db/schema.ts 

import type { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { serial, text, timestamp, pgTable, uniqueIndex } from "drizzle-orm/pg-core";

export const UsersTable = pgTable('users',
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
```
```javascript
// Add ./db/migrate.ts

import { migrate } from "drizzle-orm/node-postgres/migrator";
import 'dotenv/config'

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  max: 1
});

const db = drizzle(pool);

async function main() {
  console.log("Connection String : ", process.env.DB_URL);
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "./db/drizzle" });
  console.log("migration ended...");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});

```
```javascript
// Add ./db/index.ts

import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import 'dotenv/config'

const { Client } = pg;

const client = new Client({
  connectionString: process.env.DB_URL,
  ssl: true
});

client.connect();
export const db = drizzle(client, { schema: schema });

```
### Endpoints
```javascript 
// Add nuxt endpoint ./server/api/users.get.ts
// endpoint : http://localhost:3001/api/users

import { db } from "@/db";
import { User, UsersTable } from "@/db/schema";

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

// Add nuxt endpoint ./server/api/users/[id].get.ts
// endpoint : http://localhost:3001/api/users/7

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
```



```javascript
// Add new scripts to package scripts
"gen": "drizzle-kit generate:pg",
"gen:push": "node -r esbuild-register db/migrate.ts"
```

```bash
# To run drizzle studio
yarn drizzle-kit studio
```