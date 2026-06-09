import { ArrowRight, Sparkles } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { shopUrl } from "@/data/site-content";

export function CtaSection() {
  return (
    <section className="section-shell px-3 py-10 md:px-6 md:py-14">
      <div className="container-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(145deg,#3a1c15,#8c553f_55%,#ff9e63)] px-5 py-8 text-white shadow-[0_40px_100px_rgba(73,36,25,0.2)] md:px-8 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,216,112,0.3),transparent_32%)]" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/90">
                  <Sparkles className="size-4" />
                  Финальный CTA
                </div>
                <h2 className="mt-5 font-display text-4xl leading-none tracking-[-0.06em] text-white md:text-6xl">
                  Сделай перекус ярче, а выбор родителей спокойнее вместе с Tiggi.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
                  Визуально желанный продукт, современная коммуникация пользы и путь к покупке без
                  лишнего трения. Именно так должен работать брендовый D2C-сайт в 2026 году.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <PremiumButton href={shopUrl} external className="bg-white text-[color:var(--chocolate-900)]">
                  Купить сейчас
                  <ArrowRight className="ml-2 size-4" />
                </PremiumButton>
                <PremiumButton href="#top" variant="secondary" className="border-white/20 bg-white/10 text-white">
                  Вернуться к hero
                </PremiumButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
