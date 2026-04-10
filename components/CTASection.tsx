"use client";

import { motion } from "framer-motion";
import BotanicalDeco from "@/components/BotanicalDeco";
import { useContent } from "@/context/LanguageContext";
import { EXTERNAL_LINKS } from "@/lib/links";
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

function CTAStarburst() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className="deco-starburst mx-auto h-16 w-16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 5L66 41L98 20L80 52L115 60L80 68L98 100L66 79L60 115L54 79L22 100L40 68L5 60L40 52L22 20L54 41L60 5Z"
        stroke="#F4F8DE"
        strokeWidth="3"
      />
      <circle cx="60" cy="60" r="8" fill="#F4F8DE" />
    </svg>
  );
}

export default function CTASection() {
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
    <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="gradient-float relative mx-auto w-full max-w-7xl overflow-hidden rounded-[2.3rem] px-6 py-14 text-center text-[var(--cream)] shadow-[0_30px_42px_rgba(112,23,50,0.34)] sm:px-12">
        <BotanicalDeco
          className="absolute left-2 top-4 w-[78px] opacity-75 sm:left-4 sm:top-6 sm:w-[102px] lg:left-6 lg:top-8 lg:w-[128px]"
          label="Botanical A"
          duration={8.8}
          delay={0.4}
        />
        <BotanicalDeco
          className="absolute bottom-4 right-2 w-[82px] opacity-75 sm:bottom-5 sm:right-4 sm:w-[108px] lg:bottom-7 lg:right-7 lg:w-[144px]"
          label="Botanical B"
          duration={10.9}
          delay={1.45}
        />

        <motion.div {...reveal("left", 0.05)}>
          <CTAStarburst />
        </motion.div>
        <motion.h2
          {...reveal("right", 0.1)}
          className="mt-5 font-hero text-4xl italic leading-tight sm:text-5xl"
        >
          {content.cta.title}
        </motion.h2>
        <motion.p
          {...reveal("left", 0.14)}
          className="mx-auto mt-4 max-w-3xl text-base text-[var(--cream)]/90 sm:text-lg"
        >
          {content.cta.subtitle}
        </motion.p>

        <motion.div
          {...reveal("right", 0.2)}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          <a
            href={EXTERNAL_LINKS.registrationForm}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[var(--cream)] px-6 py-3 font-subheading text-sm font-semibold uppercase tracking-[0.09em] text-[var(--pink-primary)] shadow-[0_12px_24px_rgba(0,0,0,0.18)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
          >
            {content.cta.primary}
          </a>
          <a
            href="#tentang-kami"
            className="rounded-full border border-[var(--cream)] px-6 py-3 font-subheading text-sm font-semibold uppercase tracking-[0.09em] text-[var(--cream)] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:bg-white/8"
          >
            {content.cta.secondary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
