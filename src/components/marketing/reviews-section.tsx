import { Star } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { reviews } from "@/data/site-content";

export function ReviewsSection() {
  return (
    <section id="reviews" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Отзывы"
            title="Отзывы родителей закрепляют ощущение, что Tiggi уже стал правильным выбором."
            description="Короткие, конкретные и эмоционально точные цитаты усиливают восприятие бренда сильнее, чем длинные маркетинговые обещания."
          />
        </Reveal>
        <div className="glass-card overflow-x-auto rounded-[2rem] p-3 md:p-4">
          <div className="flex min-w-max gap-4">
            {reviews.map((review, index) => (
              <Reveal key={review.id} delay={index * 0.08} className="w-[18rem] shrink-0 md:w-[22rem]">
                <article className="h-full rounded-[1.7rem] border border-[color:var(--border)] bg-white/70 p-5 shadow-[0_18px_45px_rgba(73,36,25,0.06)]">
                  <div className="flex items-center gap-1 text-[color:var(--accent)]">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-4 fill-current" />
                    ))}
                  </div>
                  <div className="mt-5 rounded-[1.3rem] bg-[linear-gradient(135deg,rgba(255,140,90,0.15),rgba(255,205,87,0.14))] px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[color:var(--chocolate-700)]">
                    {review.highlight}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[color:var(--chocolate-700)] md:text-base">“{review.quote}”</p>
                  <div className="mt-6">
                    <div className="font-semibold text-[color:var(--chocolate-900)]">{review.author}</div>
                    <div className="text-sm text-[color:var(--muted)]">{review.city}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
