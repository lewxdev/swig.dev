import { client } from "@/lib/oauth";

export async function GET() {
  return Response.json(client.clientMetadata);
}
