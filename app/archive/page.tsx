import Image from "next/image";
import Link from "next/link";
import { entries } from "@/lib/entries";

export const metadata = {
  title: "Archive / Lorian J."
};

export default function ArchivePage() {
  return (
    <main id="content" className="mx-auto max-w-archive px-4 pb-20 pt-28 md:px-6">
      <header className="grid gap-8 border-b border-ink pb-8 md:grid-cols-[0.4fr_1fr] md:items-end">
        <p className="meta-label">Archive</p>
        <h1 className="editorial-title text-[clamp(4rem,16vw,16rem)]">2026-2027</h1>
      </header>

      <div className="divide-y divide-line">
        {entries.map((entry) => (
          <article key={entry.number} className="grid gap-5 py-8 md:grid-cols-[0.16fr_0.22fr_1fr_0.28fr] md:items-start">
            <p className="font-editorial text-6xl font-bold leading-none">{entry.number}</p>
            <div className="space-y-2">
              <p className="meta-label">{entry.date}</p>
              <p className="text-sm uppercase tracking-widecopy text-accent">{entry.status}</p>
            </div>
            <div>
              <h2 className="font-editorial text-5xl font-bold uppercase leading-[0.9] md:text-7xl">
                <Link className="nav-link" href={entry.href}>
                  {entry.title}
                </Link>
              </h2>
              <p className="mt-4 max-w-2xl text-muted">{entry.description}</p>
            </div>
            <Link href={entry.href} className="relative block aspect-[4/3] overflow-hidden border border-ink">
              <Image src={entry.image} alt="" fill sizes="(min-width: 768px) 28vw, 100vw" className="object-cover grayscale transition duration-500 hover:grayscale-0" />
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
