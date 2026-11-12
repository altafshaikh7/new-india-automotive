import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold">404</h1>

        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, the page you are looking for could not be found.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-md bg-red-700 px-6 py-3 text-white transition hover:bg-red-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}