import { client } from "@/app/oauth/_client";

export async function GET() {
  return Response.json(client.clientMetadata);
}
