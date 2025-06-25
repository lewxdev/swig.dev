import { getSession } from "@/app/oauth/_actions";
import { redirect } from "next/navigation";

export async function GET() {
  const ironSession = await getSession();
  ironSession.destroy();
  redirect("/");
}
