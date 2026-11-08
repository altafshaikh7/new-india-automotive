import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>

        <p className="mt-4 text-lg">
          Sorry, the page you are looking for could not be found.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-black px-6 py-3 text-white"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}