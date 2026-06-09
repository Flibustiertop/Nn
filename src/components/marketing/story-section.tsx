import Image from "next/image";

import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandStory, storyMoments } from "@/data/site-content";

export function StorySection() {
  return (
    <section id="story" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell">
        <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="space-y-4">
              <SectionHeading
                eyebrow="История бренда"
                title="Tiggi строится вокруг идеи радостной энергии, а не просто сладкого момента."
                description="История бренда должна работать как scrollytelling: мягко вести от эмоции к рациональному доверию и усиливать ощущение, что продукт уже занял свое место в современной семье."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {storyMoments.slice(0, 2).map((item, index) => (
                  <Reveal key={item.id} delay={0.08 * (index + 1)}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-card)]">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 38vw"
                      />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            {brandStory.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <article className="glass-card rounded-[2rem] px-5 py-5 text-base leading-8 text-[color:var(--chocolate-700)] md:px-7 md:py-6 md:text-lg">
                  {paragraph}
                </article>
              </Reveal>
            ))}
            <Reveal delay={0.28}>
              <div className="grid gap-4 md:grid-cols-[1fr_0.9fr]">
                <div className="glass-card rounded-[2rem] px-5 py-5 md:px-7 md:py-6">
                  <div className="text-[0.68rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">
                    Брендовый контекст
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[color:var(--chocolate-700)] md:text-base">
                    Дополнительные lifestyle-кадры делают историю не абстрактной, а живой:
                    продукт уже выглядит частью реального ритма семьи, школы, прогулок и дома.
                  </p>
                </div>
                <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-card)]">
                  <Image
                    src={storyMoments[2].image}
                    alt={storyMoments[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 24vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
