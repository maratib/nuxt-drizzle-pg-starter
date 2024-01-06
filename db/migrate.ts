import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
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

