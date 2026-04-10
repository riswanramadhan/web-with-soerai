"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useContent } from "@/context/LanguageContext";
import { EXTERNAL_LINKS } from "@/lib/links";
import Logo from "@/components/Logo";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";
import dekatLokalLogo from "../public/image/dekatlokal.png";

const EASING = [0.22, 1, 0.36, 1] as const;
const SCROLL_SPRING = {
  type: "spring",
  damping: 20,
  stiffness: 100,
} as const;

const SCROLL_VIEWPORT = {
  once: true,
  margin: "-100px",
} as const;

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M15.6 3.2c.6 1.8 1.7 2.9 3.4 3.4v2.6a8 8 0 0 1-3.2-.8v5.7a5.5 5.5 0 1 1-5.5-5.5c.3 0 .7 0 1 .1V11a3 3 0 1 0 2 2.8V3.2h2.3Z" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V9h4v2" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
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
    <footer className="relative z-50 mt-6 bg-[var(--burgundy)] px-4 pb-0 pt-12 text-[var(--cream)] sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,var(--pink-primary),var(--olive-light))]" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 pb-8 text-left md:grid-cols-3">
        <motion.div {...reveal("left", 0.02)} className="w-full max-w-sm space-y-4 md:max-w-none">
          <Logo className="block h-auto w-[250px] object-contain" />
          <p className="max-w-sm text-sm text-[var(--cream)]/80">
            {content.footer.missionLine}
          </p>
        </motion.div>

        <motion.div {...reveal("right", 0.08)} className="w-full max-w-sm md:max-w-none">
          <h3 className="font-subheading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--cream)]/88">
            {content.footer.navTitle}
          </h3>
          <nav className="mt-4 flex flex-col items-start gap-2 text-sm">
            {content.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--pink-light)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#galeri"
              className="transition-colors duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:text-[var(--pink-light)]"
            >
              {content.header.joinNow}
            </a>
          </nav>

          <div className="mt-5 flex items-center justify-start gap-3">
            <motion.a
              aria-label={content.footer.socials.instagram}
              href={EXTERNAL_LINKS.withSoeraiInstagram}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: [0, -7, 0],
                scale: [1, 1.1, 1],
                color: "#bf1b59",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.5, ease: EASING }}
              className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[#701732] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <InstagramIcon size={17} />
            </motion.a>
            <motion.a
              aria-label="TikTok"
              href={EXTERNAL_LINKS.withSoeraiTikTok}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: [0, -7, 0],
                scale: [1, 1.1, 1],
                color: "#bf1b59",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.5, ease: EASING }}
              className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[#701732] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <TikTokIcon size={17} />
            </motion.a>
            <motion.a
              aria-label={content.footer.socials.linkedin}
              href={EXTERNAL_LINKS.withSoeraiLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: [0, -7, 0],
                scale: [1, 1.1, 1],
                color: "#bf1b59",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.5, ease: EASING }}
              className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[#701732] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <LinkedInIcon size={17} />
            </motion.a>
            <motion.a
              aria-label={content.footer.socials.email}
              href={`mailto:${content.footer.email}`}
              whileHover={{
                y: [0, -7, 0],
                scale: [1, 1.1, 1],
                color: "#bf1b59",
              }}
              whileTap={{ scale: 0.94 }}
              transition={{ duration: 0.5, ease: EASING }}
              className="grid size-10 place-items-center rounded-full bg-[var(--cream)] text-[#701732] shadow-[0_10px_20px_rgba(0,0,0,0.2)]"
            >
              <Mail size={17} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div {...reveal("left", 0.14)} className="w-full max-w-sm md:max-w-none">
          <h3 className="font-subheading text-sm font-semibold uppercase tracking-[0.14em] text-[var(--cream)]/88">
            {content.footer.contactTitle}
          </h3>
          <div className="mt-4 space-y-2 text-sm text-[var(--cream)]/86">
            <p>{content.footer.email}</p>
            <p>{content.footer.location}</p>
          </div>

          <div className="mt-6">
            <h4
              className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--cream)]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Partner Digital
            </h4>
            <a
              href={EXTERNAL_LINKS.dekatLokalInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block"
              aria-label="DekatLokal Partner"
            >
              <Image
                src={dekatLokalLogo}
                alt="DekatLokal Partner"
                width={160}
                height={46}
                className="h-auto w-[160px] transition duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASING, delay: reduceMotion ? 0 : 0.08 }}
        className="relative z-50 mt-2 -mx-4 border-t border-[var(--burgundy)]/15 bg-[var(--cream)] px-4 py-4 text-center text-xs leading-relaxed text-[#701732] sm:-mx-6 sm:px-6 sm:text-sm lg:-mx-8 lg:px-8"
      >
        <p className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center">
          <span>© 2026 With Soerai. All Rights Reserved | Powered by</span>
          <a
            href={EXTERNAL_LINKS.dekatLokalInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-semibold underline decoration-[1.5px] underline-offset-[3px] transition-colors hover:text-[var(--pink-primary)]"
          >
            DekatLokal
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
