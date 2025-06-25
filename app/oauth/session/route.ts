import { client } from "@/app/oauth/_client";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getSession = async () => {
  const cookieStore = await cookies();
  return getIronSession<{ did: string }>(cookieStore, {
    password: process.env.COOKIE_PASSWORD!,
    cookieName: "sid",
  });
};

export async function GET() {
  return getSession();
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const ironSession = await getSession();
  const { session } = await client.callback(url.searchParams);

  ironSession.did = session.did;
  await ironSession.save();
  redirect("/");
}
