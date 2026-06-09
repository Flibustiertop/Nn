"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/animation/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryItems } from "@/data/site-content";
import { cn } from "@/lib/utils";

const sizeMap = {
  sm: "md:col-span-1 md:row-span-1",
  md: "md:col-span-1 md:row-span-2",
  lg: "md:col-span-2 md:row-span-2",
};

export function GallerySection() {
  const [activeId, setActiveId] = useState("");
  const activeIndex = useMemo(
    () => galleryItems.findIndex((item) => item.id === activeId),
    [activeId],
  );
  const activeItem =
    (activeIndex >= 0 ? galleryItems[activeIndex] : undefined) ?? galleryItems[0];

  const showPrev = () => setActiveId(galleryItems[(activeIndex - 1 + galleryItems.length) % galleryItems.length].id);
  const showNext = () => setActiveId(galleryItems[(activeIndex + 1) % galleryItems.length].id);

  return (
    <section id="gallery" className="section-shell px-3 py-8 md:px-6 md:py-12">
      <div className="container-shell space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Галерея продукта"
            title="Визуальная подача, которая продает еще до чтения характеристик."
            description="Галерея объединяет masonry layout, touch-friendly slider, lightbox и перетаскиваемую mobile-ленту, чтобы продукт выглядел как премиальный lifestyle-объект."
          />
        </Reveal>
        <div className="grid auto-rows-[12rem] gap-4 md:grid-cols-3 md:auto-rows-[11rem]">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.06} className={cn(sizeMap[item.size])}>
              <Dialog.Root open={activeId === item.id} onOpenChange={(open) => setActiveId(open ? item.id : "") }>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="group relative h-full w-full overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-card)]"
                  >
                    <Image src={item.image} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(38,19,15,0.6))]" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-4 text-left text-white">
                      <div>
                        <div className="text-[0.65rem] uppercase tracking-[0.22em] text-white/70">галерея</div>
                        <div className="mt-2 font-display text-2xl tracking-[-0.05em]">{item.title}</div>
                      </div>
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/18 backdrop-blur-md">
                        <Maximize2 className="size-4" />
                      </span>
                    </div>
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <AnimatePresence>
                    {activeId === item.id ? (
                      <Dialog.Overlay asChild forceMount>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-[80] bg-[rgba(20,10,8,0.75)] backdrop-blur-xl"
                        />
                      </Dialog.Overlay>
                    ) : null}
                  </AnimatePresence>
                  <Dialog.Content asChild forceMount>
                    <AnimatePresence>
                      {activeId === item.id ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.98, y: 12 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.98, y: 12 }}
                          className="fixed inset-x-3 top-1/2 z-[90] mx-auto flex max-w-5xl -translate-y-1/2 flex-col gap-4 rounded-[2rem] border border-white/15 bg-[rgba(30,15,12,0.72)] p-4 text-white shadow-[0_40px_100px_rgba(0,0,0,0.35)] md:inset-x-6 md:p-6"
                        >
                          <div className="flex items-center justify-between gap-4">
                            <div>
                              <Dialog.Title className="font-display text-3xl tracking-[-0.05em]">{activeItem.title}</Dialog.Title>
                              <Dialog.Description className="mt-2 text-sm text-white/70">{activeItem.alt}</Dialog.Description>
                            </div>
                            <Dialog.Close className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
                              <X className="size-5" />
                            </Dialog.Close>
                          </div>
                          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                            <Image src={activeItem.image} alt={activeItem.alt} fill className="object-cover" sizes="100vw" />
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <button type="button" onClick={showPrev} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm transition-colors hover:bg-white/10">
                              <ChevronLeft className="size-4" />
                              Назад
                            </button>
                            <div className="flex gap-2 overflow-x-auto py-1">
                              {galleryItems.map((thumb) => (
                                <button key={thumb.id} type="button" onClick={() => setActiveId(thumb.id)} className={cn("relative h-14 w-20 overflow-hidden rounded-2xl border border-white/10", thumb.id === activeItem.id && "ring-2 ring-white/70")}>
                                  <Image src={thumb.image} alt={thumb.alt} fill className="object-cover" sizes="80px" />
                                </button>
                              ))}
                            </div>
                            <button type="button" onClick={showNext} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm transition-colors hover:bg-white/10">
                              Вперед
                              <ChevronRight className="size-4" />
                            </button>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </Reveal>
          ))}
        </div>
        <div className="glass-card overflow-x-auto rounded-[2rem] p-3">
          <div className="flex min-w-max gap-3">
            {galleryItems.map((item) => (
              <button key={item.id} type="button" onClick={() => setActiveId(item.id)} className="relative h-40 w-52 shrink-0 overflow-hidden rounded-[1.5rem] md:h-44 md:w-60">
                <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="240px" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
