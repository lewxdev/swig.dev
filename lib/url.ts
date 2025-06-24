export const url = (url = "/") => {
  let baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL?.trim();
  if ((baseUrl &&= `https://${baseUrl}`)) {
    return new URL(url, baseUrl).toString();
  }

  throw new Error("missing NEXT_PUBLIC_VERCEL_URL");
};
