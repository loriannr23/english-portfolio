import Link from "next/link";

const navItems = [
  { label: "INDEX", href: "/" },
  { label: "ABOUT", href: "/entry/001#about" },
  { label: "ARCHIVE", href: "/archive" },
  { label: "INFO", href: "/#info" }
];

export function SiteNav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-ink/10 bg-paper">
      <nav
        className="mx-auto grid max-w-archive grid-cols-1 gap-2 px-4 py-3 text-[11px] uppercase tracking-widecopy md:grid-cols-[1fr_auto_1fr] md:items-center md:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-semibold text-ink">
          LJ / ENGLISH PORTFOLIO
        </Link>
        <ul className="flex items-center justify-between gap-3 text-muted md:justify-start md:gap-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link className="nav-link" href={item.href}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="hidden justify-self-end text-muted md:block">2026-2027</p>
      </nav>
    </header>
  );
}
