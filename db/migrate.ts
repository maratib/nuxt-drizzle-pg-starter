import 'dotenv/config'
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const { Pool } = pg;

const db_url = process.env.DB_URL;

const pool = new Pool({
  connectionString: db_url,
  max: 1
});

const db = drizzle(pool);

async function main() {
  console.log("Connection String : ", db_url);
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "./db/drizzle" });
  console.log("migration ended...");
  process.exit(0);
}

main().catch((err) => {
  console.log(err);
  process.exit(0);
});

