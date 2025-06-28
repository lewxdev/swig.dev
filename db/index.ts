import { drizzle } from "drizzle-orm/neon-http";

export * from "@/db/schema";
export const db = drizzle(process.env.DATABASE_URL!);
