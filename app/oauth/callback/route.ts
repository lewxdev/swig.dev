import { getSession } from "@/app/oauth/_actions";
import { client } from "@/app/oauth/_client";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const ironSession = await getSession();
  const { session } = await client.callback(url.searchParams);

  ironSession.did = session.did;
  await ironSession.save();
  redirect("/");
}
