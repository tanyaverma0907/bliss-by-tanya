import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function User() {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-extrabold mb-6">👤 Account</h1>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900">
            Sign in / Sign up
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <div className="flex items-center gap-4">
          <UserButton />
          <p className="text-gray-700">You are signed in.</p>
        </div>
      </SignedIn>
    </div>
  );
}
