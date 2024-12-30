import { signIn } from "next-auth/react";

export default function SignIn() {
  return (
    <>
      <button
        onClick={() => signIn("google")}
        className="px-6 py-2 bg-blue-800  text-md text-white rounded-lg hover:bg-blue-600"
      >
        Sign in
      </button>
    </>
  );
}
