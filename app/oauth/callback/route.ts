import { client } from "@/lib/oauth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const params = new URL(request.url);
  const cookieStore = await cookies();
  const { session } = await client.callback(params.searchParams);

  cookieStore.set("did", session.did);
  redirect("/");
}
