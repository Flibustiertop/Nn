"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/data/site-content";

export function FaqSection() {
  return (
    <section id="faq" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Быстрые ответы снимают последние сомнения перед покупкой."
            description="FAQ собран так, чтобы за несколько касаний закрыть вопросы о пользе, вкусе, формате и пути к покупке без длинного прокручивания и перегрузки."
          />
        </Reveal>
        <Reveal delay={0.08}>
          <Accordion.Root type="single" collapsible className="grid gap-4">
            {faqItems.map((item) => (
              <Accordion.Item key={item.id} value={item.id} className="glass-card overflow-hidden rounded-[1.8rem] border border-white/70">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6">
                    <span className="font-display text-2xl leading-none tracking-[-0.05em] text-[color:var(--chocolate-900)] md:text-3xl">
                      {item.question}
                    </span>
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white/60 text-[color:var(--chocolate-700)] transition-transform duration-300 group-data-[state=open]:rotate-180">
                      <ChevronDown className="size-5" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-5 text-sm leading-7 text-[color:var(--muted)] md:px-6 md:text-base">
                  {item.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>
      </div>
    </section>
  );
}
