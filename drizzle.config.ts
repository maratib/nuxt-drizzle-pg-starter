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