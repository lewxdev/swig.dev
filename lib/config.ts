export const config = {
  // see: https://vercel.com/docs/environment-variables/framework-environment-variables#NEXT_PUBLIC_VERCEL_URL
  get vercelUrl() {
    const hostname = process.env.NEXT_PUBLIC_VERCEL_URL;
    return hostname && `https://${hostname}`;
  },

  get url() {
    return this.vercelUrl || "http://127.0.0.1:3000";
  },
};
