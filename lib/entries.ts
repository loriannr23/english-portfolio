export type EntryStatus = "published" | "draft" | "awaiting material";

export type PortfolioEntry = {
  number: string;
  slug: string;
  date: string;
  title: string;
  description: string;
  status: EntryStatus;
  href: string;
  image: string;
  words: string;
  photos: string;
  sources: string;
  aiUsed: string;
};

export const entries: PortfolioEntry[] = [
  {
    number: "001",
    slug: "about-me-summer-26",
    date: "18 August 2026",
    title: "About Me / Summer '26",
    description:
      "An opening chapter for the English portfolio: identity, interests, and a placeholder framework for the summer archive.",
    status: "published",
    href: "/entry/001",
    image: "/images/summer-26-placeholder.png",
    words: "Placeholder draft",
    photos: "1 placeholder image",
    sources: "Personal notes to be added",
    aiUsed: "Layout, code, placeholder visual"
  },
  {
    number: "002",
    slug: "future-entry",
    date: "School year 2026-2027",
    title: "Next Entry",
    description:
      "A reserved space for the next English portfolio chapter, ready for a different rhythm and visual system.",
    status: "awaiting material",
    href: "/archive",
    image: "/images/summer-26-placeholder.png",
    words: "0",
    photos: "0",
    sources: "To be confirmed",
    aiUsed: "Not started"
  }
];

export const entry001 = entries[0];
