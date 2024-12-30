import { useSession, signIn, signOut } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl mb-4">You must sign in to view this page</h1>
        <button
          onClick={() => signIn()}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Welcome, {session.user.name}!</h1>
      <p>Email: {session.user.email}</p>
      <button
        onClick={() => signOut()}
        className="px-6 py-3 bg-red-500 text-white rounded-lg"
      >
        Sign out
      </button>
    </div>
  );
}
