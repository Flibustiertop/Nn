import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ingredientCards } from "@/data/site-content";

export function IngredientsSection() {
  return (
    <section id="ingredients" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Состав и преимущества"
            title="Рациональная причина купить Tiggi находится прямо в составе."
            description="Польза должна считываться быстро: простыми словами, аккуратными карточками и так, чтобы родители понимали ценность без лишнего когнитивного шума."
          />
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {ingredientCards.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <article className="glass-card rounded-[2rem] p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[linear-gradient(160deg,rgba(255,140,90,0.22),rgba(255,205,87,0.18))] text-[color:var(--chocolate-700)]">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full border border-[color:var(--border)] bg-white/65 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {item.badge}
                    </span>
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
