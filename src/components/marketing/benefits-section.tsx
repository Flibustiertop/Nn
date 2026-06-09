import type { LucideIcon } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type BenefitsSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Benefit[];
};

export function BenefitsSection({ id, eyebrow, title, description, items }: BenefitsSectionProps) {
  return (
    <section id={id} className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="glass-card group h-full rounded-[2rem] p-5 transition-transform duration-300 hover:-translate-y-1 md:p-6">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(145deg,rgba(255,140,90,0.22),rgba(255,205,87,0.2))] text-[color:var(--chocolate-700)]">
                    <Icon className="size-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl leading-none tracking-[-0.05em] text-[color:var(--chocolate-900)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[color:var(--muted)]">{item.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
