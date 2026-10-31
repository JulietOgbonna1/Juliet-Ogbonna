import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center pt-32 text-center">
      <div className="container-x">
        <p className="font-display text-8xl font-bold text-accent sm:text-9xl">404</p>
        <h1 className="mt-4 font-display text-3xl font-semibold">This page wandered off.</h1>
        <p className="mt-3 text-ink-soft">Let&apos;s get you back to something beautiful.</p>
        <Link href="/" className="btn-primary mt-8">Back home</Link>
      </div>
    </section>
  );
}
