"use server";
import { isValidHandle } from "@atproto/syntax";
import { redirect } from "next/navigation";
import { client } from "@/lib/oauth";

export async function login(_message: string, payload: FormData) {
  const handle = payload.get("handle");
  if (typeof handle !== "string" || !isValidHandle(handle)) {
    return "invalid handle";
  }

  try {
    const url = await client.authorize(handle);
    redirect(url.href);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : error?.toString() || "";
    return message?.trim().toLowerCase();
  }
}
