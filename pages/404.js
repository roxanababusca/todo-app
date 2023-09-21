import Link from 'next/link';

export default function PageNotFound() {
    return (
      <main className="bg-primary text-zinc-50 selection:bg-accent/75 selection:text-zinc-50 min-h-[100vh] mx-auto grid place-content-center text-center relative">
        <h2> This isn&apos;t the page you were looking for!</h2>
        <p className="mt-8">Check for typos in your URL or go to the&nbsp;
          <Link href="/" className="text-purple-500 transition hover:text-purple-500/75">Home</Link>
          &nbsp;page
        </p>
      </main>
  );
}