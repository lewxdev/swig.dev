"use client";
import { login } from "@/app/oauth/_actions";
import { useActionState } from "react";

export default function LoginPage() {
  const [message, action, pending] = useActionState(login, undefined);

  return (
    <div className="max-w-md space-y-8">
      <form action={action} className="space-y-4">
        <input
          type="text"
          name="handle"
          placeholder="your.handle.bsky.social"
          className="w-full border-b border-gray-200 py-2 focus-visible:border-amber-600 focus-visible:outline-none"
        />
        <button
          disabled={pending}
          className="w-full bg-amber-600 p-2 text-white transition-colors hover:bg-amber-600/90 disabled:opacity-50"
          type="submit"
        >
          {pending ? "logging in..." : "login with bluesky"}
        </button>
        {message && <div className="text-sm text-red-600">{message}</div>}
      </form>

      <div className="space-y-2 text-sm text-gray-600">
        <p>
          we use bluesky oauth to authenticate. your credentials stay with
          bluesky.
        </p>
        <p>
          <a href="https://bsky.app" className="text-amber-600 hover:underline">
            create a bluesky account
          </a>
        </p>
      </div>
    </div>
  );
}
