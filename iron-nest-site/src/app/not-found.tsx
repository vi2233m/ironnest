import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="flex flex-1 items-center justify-center">
        <section className="mx-auto max-w-2xl px-4 py-24 text-center md:px-6">
          <div className="text-6xl">🎯</div>
          <p className="mt-6 font-[var(--font-share-tech-mono)] text-5xl font-400 text-[var(--color-amber)]">
            404
          </p>
          <h1 className="mt-4 text-3xl font-700 uppercase md:text-4xl">
            Target Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg text-[var(--color-moon-dim)]">
            The coordinates you entered don&apos;t match any known position on the tactical map.
            Check your bearing and try again, Operator.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/" className="btn-primary">
              Return to Base
            </Link>
            <Link href="/guide" className="btn-ghost">
              Browse Guides
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
