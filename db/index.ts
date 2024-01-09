import pg from 'pg';
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema";
import 'dotenv/config'

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DB_URL,
  max: 10
});
export const db = drizzle(pool, { schema: schema });