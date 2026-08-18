import Image from "next/image";
import Link from "next/link";
import { entries } from "@/lib/entries";

export default function Home() {
  return (
    <main id="content">
      <section className="mx-auto grid min-h-[92svh] max-w-archive content-end px-4 pb-8 pt-28 md:px-6 md:pb-10">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="meta-label mb-4">TBZ English / Lorian J.</p>
            <h1 className="editorial-title max-w-[12ch] text-[clamp(4.6rem,17vw,16.8rem)]">
              Year Two
            </h1>
          </div>
          <div className="grid gap-6 border-t border-ink pt-5 lg:mb-5">
            <p className="max-w-xl font-editorial text-[clamp(2rem,5.6vw,5rem)] font-bold uppercase leading-[0.92]">
              An ongoing archive of work, life & everything in between.
            </p>
            <p className="max-w-md text-sm text-muted md:text-base">
              A personal English portfolio for the 2026-2027 school year by a Swiss ICT
              student. Built as an evolving editorial archive rather than a classroom folder.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-ink text-paper" aria-labelledby="index-title">
        <div className="mx-auto grid max-w-archive gap-8 px-4 py-8 md:px-6 lg:grid-cols-[0.32fr_1fr] lg:py-12">
          <div>
            <h2 id="index-title" className="meta-label text-paper/70">
              Visual Index
            </h2>
            <p className="mt-4 max-w-xs text-sm text-paper/70">
              Entries can change shape over time while keeping the same archive spine.
            </p>
          </div>
          <div className="divide-y divide-paper/18">
            {entries.map((entry) => (
              <Link
                key={entry.number}
                href={entry.href}
                className="group grid gap-5 py-6 outline-offset-[-2px] md:grid-cols-[0.16fr_0.2fr_1fr_0.22fr] md:items-center"
              >
                <span className="font-editorial text-5xl font-bold leading-none text-paper/55 transition-colors group-hover:text-accent">
                  {entry.number}
                </span>
                <span className="text-xs uppercase tracking-widecopy text-paper/55">{entry.date}</span>
                <span>
                  <span className="block font-editorial text-[clamp(2.25rem,6vw,6.4rem)] font-bold uppercase leading-[0.88] transition-transform duration-300 group-hover:translate-x-2">
                    {entry.title}
                  </span>
                  <span className="mt-3 block max-w-2xl text-sm text-paper/65">{entry.description}</span>
                </span>
                <span className="relative block h-28 overflow-hidden border border-paper/25 md:h-36">
                  <Image
                    src={entry.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 22vw, 100vw"
                    className="object-cover opacity-75 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <span className="absolute bottom-2 left-2 bg-accent px-2 py-1 text-[10px] font-bold uppercase tracking-widecopy text-paper">
                    {entry.status}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="info" className="mx-auto grid max-w-archive gap-8 px-4 py-16 md:px-6 lg:grid-cols-[1fr_1fr]">
        <h2 className="font-editorial text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.86]">
          Built to stay unfinished.
        </h2>
        <div className="max-w-xl space-y-5 text-muted">
          <p>
            The portfolio is designed for a full school year of English work: reflections,
            creative writing, presentations, research, personal notes, and experiments.
          </p>
          <p>
            Each new entry can have its own layout and interaction pattern, while the navigation,
            type scale, archival metadata, and restrained red accent keep the whole thing coherent.
          </p>
        </div>
      </section>
    </main>
  );
}
