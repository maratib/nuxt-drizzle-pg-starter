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

