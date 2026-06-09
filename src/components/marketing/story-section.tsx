import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandStory } from "@/data/site-content";

export function StorySection() {
  return (
    <section id="story" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="История бренда"
              title="Tiggi строится вокруг идеи радостной энергии, а не просто сладкого момента."
              description="История бренда должна работать как scrollytelling: мягко вести от эмоции к рациональному доверию и усиливать ощущение, что продукт уже занял свое место в современной семье."
            />
          </Reveal>
          <div className="grid gap-4">
            {brandStory.map((paragraph, index) => (
              <Reveal key={paragraph} delay={index * 0.08}>
                <article className="glass-card rounded-[2rem] px-5 py-5 text-base leading-8 text-[color:var(--chocolate-700)] md:px-7 md:py-6 md:text-lg">
                  {paragraph}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
