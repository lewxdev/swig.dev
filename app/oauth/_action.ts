"use server";
import { isValidHandle } from "@atproto/syntax";
import { redirect } from "next/navigation";
import { client } from "@/app/oauth/_client";

export async function action(_message: string, payload: FormData) {
  const handle = payload.get("handle");
  if (typeof handle !== "string" || !isValidHandle(handle)) {
    return "invalid handle";
  }

  let url: URL;
  try {
    url = await client.authorize(handle);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : error?.toString() || "";
    return message?.trim().toLowerCase();
  }
  redirect(url.href);
}
