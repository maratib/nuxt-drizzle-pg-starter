import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'
// console.log('FFFFFFF :', process.env.DB_URL);
export default defineConfig({
  schema: "./db/schema.ts",
  out: "./db/drizzle",
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DB_URL as string,
  },
  verbose: true,
  strict: true,
})

