"use client";

import { motion } from "framer-motion";
import { useContent } from "@/context/LanguageContext";
import BotanicalDeco from "@/components/BotanicalDeco";
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

function Starburst({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className={`deco-starburst ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 3L66.4 39.3L96.1 16.6L79.8 49.9L117 60L79.8 70.1L96.1 103.4L66.4 80.7L60 117L53.6 80.7L23.9 103.4L40.2 70.1L3 60L40.2 49.9L23.9 16.6L53.6 39.3L60 3Z"
        stroke="#E26A8A"
        strokeWidth="3"
      />
      <circle cx="60" cy="60" r="8" fill="#BF1B59" />
    </svg>
  );
}

export default function HeroSection() {
  const content = useContent();
  const reduceMotion = useStableReducedMotion();

  const fadeInLeft = {
    initial: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    initial: reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-x-hidden px-4 pb-16 pt-16 sm:px-6 sm:pt-20 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(226,106,138,0.25),transparent_40%),radial-gradient(circle_at_84%_18%,rgba(171,176,57,0.18),transparent_38%),radial-gradient(circle_at_70%_80%,rgba(191,27,89,0.12),transparent_35%)]"
      />

      <div className="hidden lg:block">
        <BotanicalDeco
          className="absolute left-3 top-[8%] w-[108px] opacity-90 xl:left-5 xl:w-[132px]"
          label="Leaf 01"
          duration={8.9}
          delay={0.2}
          priority
        />
      </div>
      
      <div className="hidden lg:block">
        <BotanicalDeco
          className="absolute right-[4%] top-[7%] w-[112px] opacity-90 xl:w-[138px]"
          label="Flower 02"
          duration={9.6}
          delay={0.65}
          priority
        />
      </div>
      
      <div className="hidden lg:block">
        <BotanicalDeco
          className="absolute bottom-[9%] right-[8%] w-[116px] opacity-85 xl:w-[142px]"
          label="Leaf 03"
          duration={9.4}
          delay={0.55}
        />
      </div>
      
      <div className="hidden lg:block">
        <BotanicalDeco
          className="absolute bottom-[22%] left-[48%] w-[108px] opacity-80 xl:w-[132px]"
          label="Botanical A"
          duration={8.8}
          delay={1.1}
        />
      </div>

      <Starburst className="absolute left-[4%] top-[30%] hidden h-14 w-14 opacity-55 lg:block" />
      <Starburst className="absolute right-[8%] top-[18%] hidden h-12 w-12 opacity-45 md:block" />
      <Starburst className="absolute bottom-24 right-[42%] hidden h-10 w-10 opacity-50 md:block" />

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center">
        <div className="relative z-10">
          <motion.div
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.whileInView}
            transition={{ ...SCROLL_SPRING, delay: reduceMotion ? 0 : 0.02 }}
            viewport={SCROLL_VIEWPORT}
            className="inline-flex items-center rounded-full border border-[var(--olive-dark)]/30 bg-[var(--cream)]/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--olive-dark)] shadow-[0_12px_24px_rgba(112,23,50,0.12)]"
          >
            {content.hero.badge}
          </motion.div>

          <motion.h1
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.whileInView}
            transition={{ ...SCROLL_SPRING, delay: reduceMotion ? 0 : 0.08 }}
            viewport={SCROLL_VIEWPORT}
            className="mt-6 max-w-[14ch] font-hero text-[2.55rem] leading-[0.95] text-[var(--burgundy)] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.5rem]"
          >
            <span className="block font-light italic text-[var(--burgundy)]/88">
              {content.hero.headline[0]}
            </span>
            <span className="block font-bold italic text-[var(--pink-primary)] drop-shadow-[0_0_12px_rgba(226,106,138,0.6)]">
              {content.hero.headline[1]}
            </span>
            <span className="block font-normal text-[var(--burgundy)]">
              {content.hero.headline[2]}
            </span>
          </motion.h1>

          <motion.p
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.whileInView}
            transition={{ ...SCROLL_SPRING, delay: reduceMotion ? 0 : 0.14 }}
            viewport={SCROLL_VIEWPORT}
            className="mt-6 max-w-xl text-base font-light text-[var(--burgundy)]/90 sm:text-lg"
          >
            {content.hero.subtext}
          </motion.p>

          <motion.div
            initial={fadeInLeft.initial}
            whileInView={fadeInLeft.whileInView}
            transition={{ ...SCROLL_SPRING, delay: reduceMotion ? 0 : 0.2 }}
            viewport={SCROLL_VIEWPORT}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#program"
              className="cta-gradient-btn px-6 py-3 font-subheading text-sm font-semibold tracking-[0.09em]"
            >
              {content.hero.ctaPrimary}
            </a>
            <a
              href="#tentang-kami"
              className="ghost-btn px-6 py-3 font-subheading text-sm font-semibold tracking-[0.09em]"
            >
              {content.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={fadeInRight.initial}
          whileInView={fadeInRight.whileInView}
          transition={{ ...SCROLL_SPRING, delay: reduceMotion ? 0 : 0.12 }}
          viewport={SCROLL_VIEWPORT}
          className="interactive-card relative mx-auto w-full max-w-[560px] rounded-[2rem] border border-[rgba(112,23,50,0.18)] bg-[linear-gradient(140deg,rgba(255,255,255,0.68),rgba(244,248,222,0.85))] p-4 shadow-[0_20px_40px_rgba(112,23,50,0.14)]"
        >
          <div className="deco-botanical relative grid min-h-[360px] place-items-center overflow-hidden rounded-[1.5rem] border-2 border-dashed border-[var(--pink-light)]/70 bg-[radial-gradient(circle_at_20%_20%,rgba(226,106,138,0.22),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(171,176,57,0.24),transparent_38%),rgba(244,248,222,0.9)] px-6 py-10 text-center">
            <div className="deco-starburst absolute left-8 top-8 h-10 w-10" />
            <div className="deco-starburst absolute bottom-10 right-10 h-12 w-12" />
            <p className="font-subheading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--pink-primary)]/85">
              {content.hero.collageLabel}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
