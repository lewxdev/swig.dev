export const config = {
  // see: https://vercel.com/docs/environment-variables/framework-environment-variables#NEXT_PUBLIC_VERCEL_URL
  get vercelUrl() {
    return process.env.NEXT_PUBLIC_VERCEL_URL;
  },

  get url() {
    return this.vercelUrl
      ? `https://${this.vercelUrl}`
      : `http://127.0.0.1:3000`;
  },
};
