import { PremiumButton } from "@/components/ui/premium-button";
import { shopUrl } from "@/data/site-content";

const navItems = [
  { href: "#why-kids", label: "Дети" },
  { href: "#why-parents", label: "Родители" },
  { href: "#gallery", label: "Галерея" },
  { href: "#flavors", label: "Вкусы" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-3 py-3 md:px-6">
      <div className="container-shell">
        <div className="glass-card flex items-center justify-between gap-4 rounded-full px-4 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-full bg-[linear-gradient(145deg,#4b2319,#a86b51)] text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(75,35,25,0.2)]">
              TG
            </div>
            <div>
              <div className="font-display text-lg leading-none tracking-[-0.05em]">Tiggi Kids</div>
              <div className="text-[0.65rem] uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Chocolate
              </div>
            </div>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-[color:var(--muted)] lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-[color:var(--chocolate-900)]">
                {item.label}
              </a>
            ))}
          </nav>
          <PremiumButton href={shopUrl} external className="px-5 py-2.5 text-xs md:text-sm">
            Купить сейчас
          </PremiumButton>
        </div>
      </div>
    </header>
  );
}
