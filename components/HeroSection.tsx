"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useContent } from "@/context/LanguageContext";
import BotanicalDeco from "@/components/BotanicalDeco";
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

const HERO_SLIDES = [
  {
    src: "/images/hero-image-1.jpg",
    alt: "WITH SOERAI Hero Collage 1",
  },
  {
    src: "/images/hero-image-2.jpg",
    alt: "WITH SOERAI Hero Collage 2",
  },
] as const;

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
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    if (HERO_SLIDES.length < 2) {
      return;
    }

    const slideInterval = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, reduceMotion ? 5200 : 3600);

    return () => {
      window.clearInterval(slideInterval);
    };
  }, [reduceMotion]);

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
              href={EXTERNAL_LINKS.registrationForm}
              target="_blank"
              rel="noopener noreferrer"
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
          <div className="neon-orbit-border relative min-h-[360px] overflow-hidden rounded-[1.5rem] p-[3px]">
            <div className="relative z-10 min-h-[354px] overflow-hidden rounded-[1.32rem] bg-[#ecefce]">
              <motion.div
                animate={{ x: `${-activeHeroSlide * 100}%` }}
                transition={{
                  duration: reduceMotion ? 0.45 : 0.85,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex h-full min-h-[354px]"
              >
                {HERO_SLIDES.map((slide) => (
                  <div key={slide.src} className="relative h-auto min-h-[354px] min-w-full">
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(min-width: 1024px) 32vw, (min-width: 640px) 62vw, 88vw"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                ))}
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(112,23,50,0.06)_0%,transparent_30%,rgba(112,23,50,0.2)_100%)]" />

              <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center justify-center gap-2.5 rounded-full bg-[rgba(112,23,50,0.22)] px-3 py-1.5 backdrop-blur-[1px]">
                {HERO_SLIDES.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveHeroSlide(index)}
                    aria-label={`Go to hero slide ${index + 1}`}
                    className={`inline-flex h-3.5 w-3.5 items-center justify-center rounded-full border transition ${
                      activeHeroSlide === index
                        ? "border-[var(--pink-primary)] bg-[var(--pink-primary)] shadow-[0_0_10px_rgba(226,106,138,0.7)]"
                        : "border-[rgba(244,248,222,0.86)] bg-[rgba(244,248,222,0.55)]"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
