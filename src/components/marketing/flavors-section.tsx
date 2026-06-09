import Image from "next/image";

import { Reveal } from "@/components/animation/reveal";
import { PremiumButton } from "@/components/ui/premium-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { flavors, shopUrl } from "@/data/site-content";

export function FlavorsSection() {
  return (
    <section id="flavors" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Вкусы"
            title="Два вкуса, два повода купить прямо сейчас."
            description="Визуальный язык вкусов помогает мгновенно считать разницу между нежным ежедневным вариантом и более насыщенным шоколадным характером."
          />
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-2">
          {flavors.map((flavor, index) => (
            <Reveal key={flavor.id} delay={index * 0.08}>
              <article className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/75 p-5 shadow-[var(--shadow-card)] md:p-7">
                <div className={`absolute inset-0 bg-gradient-to-br ${flavor.accent} opacity-70`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(255,255,255,0.08))]" />
                <div className="relative grid gap-5 md:grid-cols-[1fr_0.95fr] md:items-center">
                  <div>
                    <div className="inline-flex rounded-full border border-white/70 bg-white/55 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--chocolate-700)]">
                      {flavor.subtitle}
                    </div>
                    <h3 className="mt-4 font-display text-4xl leading-none tracking-[-0.06em] text-[color:var(--chocolate-900)] md:text-5xl">
                      {flavor.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-[color:var(--chocolate-700)] md:text-base">
                      {flavor.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {flavor.benefits.map((benefit) => (
                        <span key={benefit} className="rounded-full border border-white/70 bg-white/65 px-3 py-2 text-xs font-medium text-[color:var(--chocolate-700)]">
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <PremiumButton href={shopUrl} external className="mt-6 px-6 py-3.5">
                      Выбрать вкус
                    </PremiumButton>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] border border-white/65 shadow-[0_24px_50px_rgba(73,36,25,0.12)]">
                    <Image src={flavor.image} alt={`Вкус ${flavor.title} для Tiggi Kids`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
