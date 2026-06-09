"use client";

import { ArrowDownRight, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

import { PremiumButton } from "@/components/ui/premium-button";
import { heroStats, shopUrl } from "@/data/site-content";
import { createT2IUrl } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const heroImage = createT2IUrl(
  "hero shot of premium kids chocolate package, floating chocolate squares, caramel cream liquid shapes, glossy highlights, playful luxury branding, premium food ad, warm beige background, depth, modern ecommerce visual",
  "portrait_16_9",
);

const floatingBits = [
  { size: "h-18 w-18", top: "12%", left: "2%", delay: 0.2 },
  { size: "h-14 w-14", top: "20%", right: "8%", delay: 0.6 },
  { size: "h-10 w-10", bottom: "18%", left: "8%", delay: 1.1 },
  { size: "h-12 w-12", bottom: "10%", right: "14%", delay: 1.5 },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const productRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !sectionRef.current || !productRef.current || !badgeRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(productRef.current, {
        yPercent: -8,
        rotate: -3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        badgeRef.current,
        { y: 0 },
        {
          y: 18,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  return (
    <section id="top" ref={sectionRef} className="section-shell noise-overlay px-3 pb-10 pt-4 md:px-6 md:pb-14">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/70 bg-[linear-gradient(140deg,rgba(255,252,247,0.95),rgba(255,244,232,0.9)_42%,rgba(249,227,205,0.92))] px-5 pb-8 pt-8 shadow-[var(--shadow-soft)] md:px-8 md:pb-12 md:pt-10 lg:min-h-[46rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,188,128,0.45),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,141,90,0.18),transparent_35%)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-6 pt-3 md:space-y-8 lg:pt-10">
              <motion.div
                ref={badgeRef}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-[color:var(--chocolate-700)] shadow-[0_10px_25px_rgba(90,47,34,0.08)]"
              >
                <Sparkles className="size-4 text-[color:var(--accent)]" />
                Premium playful luxury
              </motion.div>
              <div className="space-y-5">
                <motion.h1
                  initial={reduceMotion ? false : { opacity: 0, y: 26 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.08 }}
                  className="max-w-3xl font-display text-5xl leading-[0.93] tracking-[-0.07em] text-[color:var(--chocolate-900)] sm:text-6xl md:text-7xl"
                >
                  Шоколад, который дети хотят сразу, а родители выбирают спокойно.
                </motion.h1>
                <motion.p
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.72, delay: 0.16 }}
                  className="max-w-xl text-base leading-8 text-[color:var(--muted)] md:text-lg"
                >
                  Tiggi Kids Chocolate превращает обычный перекус в современный premium-опыт: с
                  яркой эмоцией для ребенка, понятной пользой для родителей и визуалом уровня лучших D2C-брендов.
                </motion.p>
              </div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <PremiumButton href={shopUrl} external className="px-6 py-4 text-sm">
                  Купить сейчас
                </PremiumButton>
                <PremiumButton href="#why-kids" variant="secondary" className="px-6 py-4 text-sm">
                  Узнать больше
                </PremiumButton>
              </motion.div>
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="grid grid-cols-3 gap-3"
              >
                {heroStats.map((stat) => (
                  <div key={stat} className="glass-card rounded-[1.4rem] px-4 py-4 text-center shadow-[0_18px_38px_rgba(75,35,25,0.06)]">
                    <div className="text-[0.62rem] uppercase tracking-[0.24em] text-[color:var(--muted)]">внутри</div>
                    <div className="mt-2 text-sm font-semibold text-[color:var(--chocolate-900)] md:text-base">
                      {stat}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="relative min-h-[24rem] lg:min-h-[38rem]">
              {floatingBits.map((bit, index) => (
                <motion.div
                  key={index}
                  animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: bit.delay }}
                  className={`${bit.size} absolute rounded-[1.75rem] bg-[linear-gradient(135deg,#5d2f24,#8f5b48)] shadow-[0_20px_40px_rgba(56,28,19,0.18)]`}
                  style={{ top: bit.top, right: bit.right, bottom: bit.bottom, left: bit.left }}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 h-28 rounded-full bg-[radial-gradient(circle,rgba(82,42,29,0.18),transparent_68%)] blur-3xl" />
              <div ref={productRef} className="relative mx-auto h-full max-w-[34rem]">
                <div className="absolute inset-x-2 top-4 bottom-0 rounded-[2.5rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.55),rgba(255,255,255,0.15))] blur-2xl" />
                <div className="absolute inset-0 rounded-[2.4rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.62),rgba(255,246,236,0.38))] backdrop-blur-2xl" />
                <div className="absolute inset-6 overflow-hidden rounded-[2rem] border border-white/60 shadow-[0_40px_80px_rgba(73,36,25,0.16)]">
                  <Image
                    src={heroImage}
                    alt="Упаковка и шоколадные плитки Tiggi Kids в премиальной hero-сцене"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                </div>
                <div className="absolute right-0 top-4 glass-card max-w-[14rem] rounded-[1.7rem] px-4 py-4 shadow-[0_18px_42px_rgba(82,42,29,0.1)] md:right-4">
                  <div className="text-[0.65rem] uppercase tracking-[0.26em] text-[color:var(--muted)]">
                    почему работает
                  </div>
                  <div className="mt-3 text-sm font-semibold leading-6 text-[color:var(--chocolate-900)]">
                    Один экран сочетает эмоцию, доказательства доверия и быстрый путь к покупке.
                  </div>
                </div>
                <a
                  href="#why-kids"
                  className="absolute bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-medium text-[color:var(--chocolate-700)] shadow-[0_14px_28px_rgba(82,42,29,0.08)]"
                >
                  Скролл к выгодам
                  <ArrowDownRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
