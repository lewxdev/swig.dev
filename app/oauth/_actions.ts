"use server";
import { isValidHandle } from "@atproto/syntax";
import { redirect } from "next/navigation";
import { client } from "@/app/oauth/_client";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export async function auth(message: string | undefined, payload: FormData) {
  const handle = payload.get("handle");
  if (typeof handle !== "string" || !isValidHandle(handle)) {
    return "invalid handle";
  }

  // using old school callback because `redirect` throws by design
  // see: https://nextjs.org/docs/app/api-reference/functions/redirect
  return client.authorize(handle).then(
    (url) => redirect(url.href),
    (error) => (error instanceof Error ? error.message : error?.toString()),
  );
}

export async function getSession() {
  const cookieStore = await cookies();
  return getIronSession<{ did: string }>(cookieStore, {
    password: process.env.COOKIE_PASSWORD!,
    cookieName: "sid",
  });
}
