import type {
  NodeSavedSession,
  NodeSavedState,
} from "@atproto/oauth-client-node";
import { json, pgTable, text } from "drizzle-orm/pg-core";

export const authSession = pgTable("auth_session", {
  key: text().primaryKey(),
  value: json().$type<NodeSavedSession>().notNull(),
});

export const authState = pgTable("auth_state", {
  key: text().primaryKey(),
  value: json().$type<NodeSavedState>().notNull(),
});
