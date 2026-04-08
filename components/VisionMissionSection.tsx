"use client";

import { motion } from "framer-motion";
import { ListOrdered, Target } from "lucide-react";
import { useContent } from "@/context/LanguageContext";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

const SCROLL_SPRING = {
  type: "spring",
  damping: 20,
  stiffness: 100,
} as const;

const SCROLL_VIEWPORT = {
  once: true,
  margin: "-100px",
} as const;

export default function VisionMissionSection() {
  const content = useContent();
  const reduceMotion = useStableReducedMotion();

  const reveal = (direction: "left" | "right", delay = 0) => ({
    initial: reduceMotion
      ? { opacity: 1, x: 0 }
      : { opacity: 0, x: direction === "left" ? -60 : 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: SCROLL_VIEWPORT,
    transition: {
      ...SCROLL_SPRING,
      delay: reduceMotion ? 0 : delay,
    },
  });

  return (
    <section id="visi-misi" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.h2
          {...reveal("left")}
          className="text-center font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl"
        >
          {content.visionMission.sectionTitle}
        </motion.h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <motion.article
            {...reveal("left", 0.05)}
            className="interactive-card shimmer-border relative overflow-hidden rounded-3xl border border-white/35 bg-[linear-gradient(135deg,var(--pink-primary),var(--burgundy))] p-7 text-[var(--cream)] shadow-[0_22px_38px_rgba(112,23,50,0.28)]"
          >
            <motion.div
              {...reveal("left", 0.08)}
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--olive-light)]/30 text-[var(--olive-dark)]"
            >
              <Target className="h-8 w-8" />
            </motion.div>
            <motion.h3
              {...reveal("left", 0.12)}
              className="font-subheading text-2xl font-semibold uppercase tracking-[0.12em]"
            >
              {content.visionMission.visionTitle}
            </motion.h3>
            <motion.p
              {...reveal("right", 0.16)}
              className="mt-4 text-[15px] leading-relaxed text-[var(--cream)]/92 sm:text-base"
            >
              {content.visionMission.visionBody}
            </motion.p>
          </motion.article>

          <motion.article
            {...reveal("right", 0.08)}
            className="interactive-card shimmer-border relative rounded-3xl border border-[rgba(87,97,0,0.35)] bg-[rgba(244,248,222,0.92)] p-7 text-[var(--burgundy)] shadow-[0_18px_30px_rgba(112,23,50,0.12)]"
          >
            <motion.div
              {...reveal("right", 0.1)}
              className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--olive-light)]/30 text-[var(--olive-dark)]"
            >
              <ListOrdered className="h-8 w-8" />
            </motion.div>
            <motion.h3
              {...reveal("right", 0.14)}
              className="font-subheading text-2xl font-semibold uppercase tracking-[0.12em] text-[var(--olive-dark)]"
            >
              {content.visionMission.missionTitle}
            </motion.h3>

            <ol className="mt-4 space-y-3">
              {content.visionMission.missionPoints.map((point, index) => (
                <motion.li
                  key={point}
                  {...reveal(index % 2 === 0 ? "left" : "right", 0.16 + index * 0.04)}
                  className="flex gap-3 text-[15px] leading-relaxed sm:text-base"
                >
                  <span className="mt-0.5 inline-grid size-6 shrink-0 place-items-center rounded-full bg-[var(--olive-light)] text-xs font-semibold text-[var(--olive-dark)]">
                    {index + 1}
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ol>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
