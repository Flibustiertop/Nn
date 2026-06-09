import { Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="section-shell px-3 pb-10 pt-8 md:px-6">
      <div className="container-shell">
        <div className="glass-card grid gap-6 rounded-[2rem] px-5 py-8 md:grid-cols-[1.3fr_1fr_1fr] md:px-8">
          <div className="space-y-4">
            <div>
              <div className="font-display text-3xl tracking-[-0.05em]">Tiggi Kids Chocolate</div>
              <p className="mt-3 max-w-md text-sm leading-7 text-[color:var(--muted)]">
                Современный сайт для бренда детского шоколада, который соединяет эмоцию,
                доверие и mobile-first конверсию в одном премиальном опыте.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm text-[color:var(--muted)]">
              <Instagram className="size-4" />
              Соцсети и lifestyle-коммуникация легко масштабируются в эту систему позже.
            </div>
          </div>
          <div className="space-y-3 text-sm text-[color:var(--muted)]">
            <div className="font-semibold uppercase tracking-[0.2em] text-[color:var(--chocolate-700)]">Контакты</div>
            <a href="tel:+78007003531" className="flex items-center gap-3 transition-colors hover:text-[color:var(--chocolate-900)]">
              <Phone className="size-4" />
              +7 (800) 700-35-31
            </a>
            <a href="mailto:tiggi.kids@gmail.com" className="flex items-center gap-3 transition-colors hover:text-[color:var(--chocolate-900)]">
              <Mail className="size-4" />
              tiggi.kids@gmail.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-4" />
              119019, Москва, ул. Новый Арбат, д. 21
            </div>
          </div>
          <div className="space-y-3 text-sm text-[color:var(--muted)]">
            <div className="font-semibold uppercase tracking-[0.2em] text-[color:var(--chocolate-700)]">Навигация</div>
            <a href="#top" className="block transition-colors hover:text-[color:var(--chocolate-900)]">Наверх</a>
            <a href="#gallery" className="block transition-colors hover:text-[color:var(--chocolate-900)]">Галерея</a>
            <a href="#faq" className="block transition-colors hover:text-[color:var(--chocolate-900)]">FAQ</a>
            <a href="https://tiggi-kids.com/magazin" className="block transition-colors hover:text-[color:var(--chocolate-900)]">
              Официальный магазин
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
