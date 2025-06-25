export const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : error?.toString();

export const url = (pathname: string) =>
  // see: https://vercel.com/docs/environment-variables/framework-environment-variables#NEXT_PUBLIC_VERCEL_URL
  process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}${pathname}`
    : `http://localhost:3000${pathname}`;
