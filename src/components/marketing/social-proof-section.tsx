import Image from "next/image";
import { ShieldCheck, Star, Users } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems, proofPoints } from "@/data/site-content";

const icons = [Users, ShieldCheck, Star];

export function SocialProofSection() {
  return (
    <section id="social-proof" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Социальное доказательство"
            title="Доверие растет, когда сайт показывает реальный контекст использования."
            description="Секция сочетает рейтинги, визуальные proof-моменты, пользовательские сценарии и короткие доводы, которые двигают посетителя ближе к покупке."
          />
        </Reveal>
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="glass-card rounded-[2rem] p-5 md:p-6">
              <div className="grid gap-4 sm:grid-cols-3">
                {proofPoints.map((item, index) => {
                  const Icon = icons[index % icons.length];
                  return (
                    <div key={item.label} className="rounded-[1.5rem] border border-[color:var(--border)] bg-white/60 p-4">
                      <Icon className="size-5 text-[color:var(--accent)]" />
                      <div className="mt-4 font-display text-4xl tracking-[-0.05em] text-[color:var(--chocolate-900)]">
                        {item.value}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-[color:var(--muted)]">{item.label}</div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-4 rounded-[1.6rem] border border-[color:var(--border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,242,224,0.8))] p-5">
                <div className="text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">
                  Родительский trust-layer
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--chocolate-700)] md:text-base">
                  Вместо перегруженной витрины сайт показывает: почему продукт удобен, чем он
                  отличается по составу, как выглядит в жизни и почему решение о покупке кажется
                  безопасным и простым.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {galleryItems.slice(1, 5).map((item) => (
                <div key={item.id} className="relative aspect-square overflow-hidden rounded-[1.8rem] border border-white/70 shadow-[var(--shadow-card)]">
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="(max-width: 1280px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
