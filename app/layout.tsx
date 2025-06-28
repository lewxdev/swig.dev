import "@/app/globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Geist_Mono } from "next/font/google";
import { getSession, logout } from "@/app/oauth/_actions";

export const metadata: Metadata = {
  title: "swig.dev",
};

const geistMono = Geist_Mono({
  subsets: ["latin"],
});

export default async function RootLayout(props: React.PropsWithChildren) {
  const session = await getSession();

  return (
    <html lang="en" className={geistMono.className}>
      <body className="min-h-screen">
        <nav className="border-b border-gray-200">
          <div className="mx-auto flex max-w-4xl items-center justify-between p-4">
            <Link href="/" className="text-amber-600">
              swig.dev
            </Link>
            <div className="space-x-4">
              <Link href="/create" className="hover:text-amber-600">
                create
              </Link>
              {session.did ? (
                <a
                  onClick={logout}
                  className="cursor-pointer hover:text-amber-600"
                >
                  logout
                </a>
              ) : (
                <Link href="/oauth/login" className="hover:text-amber-600">
                  login
                </Link>
              )}
            </div>
          </div>
        </nav>
        <main className="mx-auto max-w-4xl p-4">{props.children}</main>
      </body>
    </html>
  );
}
