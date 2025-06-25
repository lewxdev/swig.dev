import { NodeOAuthClient } from "@atproto/oauth-client-node";
import type { SimpleStore, Key, Value } from "@atproto-labs/simple-store";
import { eq } from "drizzle-orm";
import type { AnyPgTable, AnyPgColumn } from "drizzle-orm/pg-core";
import { db, authState, authSession } from "@/db";
import { config } from "@/lib/config";

function makeStore<K extends Key, V extends Value>(
  table: AnyPgTable & {
    key: AnyPgColumn<{ data: K }>;
    value: AnyPgColumn<{ data: V; notNull: true }>;
  },
): SimpleStore<K, V> {
  return {
    async get(key) {
      const result = await db
        .select({ value: table.value })
        .from(table)
        .where(eq(table.key, key))
        .limit(1);

      return result.at(0)?.value;
    },
    async set(key, value) {
      await db.insert(table).values({ key, value }).onConflictDoUpdate({
        target: table.key,
        set: { value },
      });
    },
    async del(key) {
      await db.delete(table).where(eq(table.key, key));
    },
  };
}

export const client = new NodeOAuthClient({
  // see: https://docs.bsky.app/docs/advanced-guides/oauth-client#client-and-server-metadata
  clientMetadata: {
    client_name: "swig.dev",
    client_uri: config.url,
    get client_id() {
      return config.vercelUrl
        ? `${config.vercelUrl}/oauth/client-metadata.json`
        : `http://localhost?${new URLSearchParams({ scope: this.scope, redirect_uri: this.redirect_uris[0] })}`;
    },
    grant_types: ["authorization_code", "refresh_token"],
    scope: "atproto transition:generic",
    response_types: ["code"],
    redirect_uris: [`${config.url}/oauth/callback`],
    dpop_bound_access_tokens: true,
    token_endpoint_auth_method: "none",
  },
  sessionStore: makeStore(authSession),
  stateStore: makeStore(authState),
});
