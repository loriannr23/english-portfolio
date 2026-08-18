import Image from "next/image";
import Link from "next/link";
import { entry001 } from "@/lib/entries";

const profile = [
  ["NAME", "Lorian"],
  ["AGE", "17"],
  ["LOCATION", "Switzerland, Wetzikon, Bäretswil"],
  ["ROLE", "Programming Apprentice / Student"],
  ["INTERESTS", "Programming, Football, Music, Music Production, Writing, Basketball, Gaming"]
];

const summerMoments = [
  {
    label: "PLACEHOLDER 01",
    title: "A week that needs a real title",
    note: "Replace this with one short reflection, a detail, or a photograph from summer 2026."
  },
  {
    label: "PLACEHOLDER 02",
    title: "Something that changed the pace",
    note: "This slot is built for a specific memory: travel, training, music, family, work, or a quiet day."
  },
  {
    label: "PLACEHOLDER 03",
    title: "A sound, a match, a sentence",
    note: "Add one object from the moment and one honest sentence about why it mattered."
  },
  {
    label: "PLACEHOLDER 04",
    title: "End of summer, start of year two",
    note: "Use this as the bridge into the school year once the real text is ready."
  }
];

export const metadata = {
  title: "001 About Me / Summer '26"
};

export default function Entry001Page() {
  return (
    <main id="content">
      <article>
        <header className="relative min-h-[100svh] overflow-hidden bg-ink text-paper">
          <Image
            src={entry001.image}
            alt="Editorial placeholder photograph for the summer 2026 entry: notebook, headphones, football, and Swiss landscape."
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-74"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,22,20,0.86),rgba(22,22,20,0.25)_52%,rgba(22,22,20,0.78))]" />
          <div className="relative mx-auto grid min-h-[100svh] max-w-archive content-end px-4 pb-8 pt-28 md:px-6">
            <div className="grid gap-6 md:grid-cols-[0.2fr_1fr] md:items-end">
              <div className="space-y-4">
                <p className="meta-label text-paper/70">Entry {entry001.number}</p>
                <p className="max-w-[14rem] text-xs uppercase tracking-widecopy text-paper/62">
                  Placeholder photograph. Replace when real summer images are supplied.
                </p>
              </div>
              <div>
                <p className="mb-3 text-xs uppercase tracking-widecopy text-accent">{entry001.date}</p>
                <h1 className="editorial-title max-w-[11ch] text-[clamp(4.4rem,16vw,16.5rem)]">
                  About Me / Summer &apos;26
                </h1>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="mx-auto grid max-w-archive gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.6fr_1fr] lg:py-28">
          <div data-reveal className="border-t border-ink pt-4">
            <p className="meta-label mb-6">About Me</p>
            <h2 className="font-editorial text-[clamp(3.3rem,9vw,9.5rem)] font-bold uppercase leading-[0.86]">
              A profile before the archive starts moving.
            </h2>
          </div>
          <div className="grid gap-10">
            <p data-reveal className="max-w-2xl text-xl leading-snug md:text-3xl">
              This first entry introduces the person behind the English portfolio. It is a
              starting point: partly biography, partly summer notebook, and partly a system for
              collecting better details as the year continues.
            </p>
            <dl data-reveal className="grid border-t border-line sm:grid-cols-2">
              {profile.map(([label, value]) => (
                <div key={label} className="border-b border-line py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                  <dt className="meta-label">{label}</dt>
                  <dd className="mt-2 text-lg leading-snug">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-ink py-16 text-paper md:py-24" aria-labelledby="summer-title">
          <div className="mx-auto max-w-archive px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-[0.42fr_1fr] md:items-end">
              <p className="meta-label text-paper/62">Summer Log</p>
              <h2 id="summer-title" className="font-editorial text-[clamp(3.8rem,10vw,10rem)] font-bold uppercase leading-[0.86]">
                What actually happened this summer?
              </h2>
            </div>

            <div className="mt-12 overflow-x-auto pb-5" aria-label="Experimental summer timeline">
              <ol className="grid min-w-[920px] grid-cols-4 border-y border-paper/24">
                {summerMoments.map((moment, index) => (
                  <li
                    key={moment.label}
                    data-reveal
                    className="group min-h-[26rem] border-r border-paper/24 p-5 last:border-r-0"
                  >
                    <div className="flex h-full flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widecopy text-accent">{moment.label}</p>
                        <h3 className="mt-8 font-editorial text-5xl font-bold uppercase leading-[0.9] transition-transform duration-300 group-hover:-translate-y-2">
                          {moment.title}
                        </h3>
                      </div>
                      <div>
                        <div className="mb-5 aspect-[4/3] border border-dashed border-paper/38 p-3 text-[10px] uppercase tracking-widecopy text-paper/55 transition-colors group-hover:border-accent group-hover:text-paper">
                          Photo slot {String(index + 1).padStart(2, "0")}
                        </div>
                        <p className="max-w-xs text-sm text-paper/68">{moment.note}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-archive gap-10 px-4 py-16 md:px-6 lg:grid-cols-[0.5fr_1fr] lg:py-24">
          <div data-image-mask className="relative min-h-[26rem] overflow-hidden border border-ink lg:min-h-[42rem]">
            <Image
              src={entry001.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div data-reveal className="self-end border-t border-ink pt-5">
            <p className="meta-label mb-5">Reflection Draft</p>
            <p className="max-w-2xl text-xl leading-snug md:text-3xl">
              Real reflections will go here once the memories, images, and exact wording are ready.
              For now, the design keeps space for a personal voice without inventing one.
            </p>
          </div>
        </section>

        <footer className="border-t border-ink bg-paper">
          <div className="mx-auto max-w-archive px-4 py-8 md:px-6">
            <dl className="grid gap-px bg-line sm:grid-cols-3 lg:grid-cols-6">
              {[
                ["ENTRY NUMBER", entry001.number],
                ["DATE", entry001.date],
                ["WORDS", entry001.words],
                ["PHOTOS", entry001.photos],
                ["SOURCES", entry001.sources],
                ["AI USED", entry001.aiUsed]
              ].map(([label, value]) => (
                <div key={label} className="bg-paper p-4">
                  <dt className="meta-label">{label}</dt>
                  <dd className="mt-2 text-sm">{value}</dd>
                </div>
              ))}
            </dl>
            <nav className="mt-8 grid grid-cols-2 border-y border-ink text-sm uppercase tracking-widecopy" aria-label="Entry navigation">
              <Link className="py-4 text-muted" href="/archive">
                Previous / Archive
              </Link>
              <Link className="py-4 text-right text-muted" href="/archive">
                Next / Awaiting Entry 002
              </Link>
            </nav>
          </div>
        </footer>
      </article>
    </main>
  );
}
