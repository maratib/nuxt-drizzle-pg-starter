import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

const { Client } = pg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();




export const db = drizzle(client, { schema: schema });


// psql "postgres://default:Bml6LaOVHnb1@ep-calm-hill-25737273.us-east-1.postgres.vercel-storage.com:5432/verceldb"