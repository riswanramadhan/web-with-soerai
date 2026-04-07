"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { MoreVertical, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useContent } from "@/context/LanguageContext";
import BackToTop from "./BackToTop";
import LanguageToggle from "@/components/LanguageToggle";
import Logo from "@/components/Logo";

const MOBILE_LINK_CONTAINER_VARIANTS = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const MOBILE_LINK_ITEM_VARIANTS = {
  hidden: { opacity: 0, x: 30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const },
  },
};

export default function Header() {
  const content = useContent();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isPoweredLinkHovered, setIsPoweredLinkHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleDesktopView = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleDesktopView);
    return () => {
      mediaQuery.removeEventListener("change", handleDesktopView);
    };
  }, []);

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  const handleMobileAnchorClick =
    (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      closeMobileMenu();

      window.setTimeout(() => {
        const section = document.querySelector(href);

        if (section instanceof HTMLElement) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }

        window.location.hash = href;
      }, 10);
    };

  return (
    <>
      <header
        className={`sticky left-0 right-0 top-0 z-[100] px-3 transition-[padding] duration-300 sm:px-6 ${
          isHeaderScrolled ? "pt-1.5" : "pt-3"
        }`}
      >
        <div
          className={`glass-nav flex w-full items-center justify-between transition-[padding,border-radius] duration-300 ${
            isHeaderScrolled ? "px-3 py-1.5 sm:px-5 sm:py-2" : "px-3 py-2 sm:px-5 sm:py-2.5"
          } ${
            menuOpen ? "rounded-t-2xl rounded-b-none lg:rounded-full" : "rounded-2xl"
          }`}
        >
          <Link href="#hero" aria-label="WITH SOERAI Home" className="shrink-0" onClick={closeMobileMenu}>
            <Logo className="block h-auto w-[100px] sm:w-[120px]" priority />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {content.header.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-subheading text-sm font-semibold tracking-[0.05em] text-[var(--burgundy)] transition-colors hover:text-[var(--pink-primary)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageToggle />
            <a
              href="#galeri"
              className="cta-gradient-btn px-5 py-2.5 font-subheading text-sm font-semibold tracking-[0.06em]"
            >
              {content.header.joinNow}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? content.header.menuClose : content.header.menuOpen}
              className="y2k-pill grid size-10 place-items-center rounded-full text-[var(--burgundy)]"
            >
              <MoreVertical size={22} color="#bf1b59" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {menuOpen ? (
          <motion.div
            key="mobile-fullscreen-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: "100%",
              height: "100dvh",
              zIndex: 120,
              backgroundColor: "#f4f8de",
              overflowY: "auto",
            }}
            className="lg:hidden"
          >
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle, #abb039 1px, transparent 1px)",
                backgroundSize: "24px 24px",
                opacity: 0.06,
              }}
            />

            <div
              className="absolute left-0 right-0 top-0"
              style={{
                height: "5px",
                background: "linear-gradient(to right, #bf1b59, #e26a8a, #abb039)",
              }}
            />

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label={content.header.menuClose}
              className="absolute right-6 top-5 z-20"
            >
              <X size={24} color="#bf1b59" />
            </button>

            <div className="relative z-10 flex min-h-[100dvh] flex-col px-8 pb-12 pt-20">
              <div className="mb-12 flex flex-col items-center text-center">
                <Logo className="h-auto w-[190px]" />
              </div>

              <motion.div
                variants={MOBILE_LINK_CONTAINER_VARIANTS}
                initial="hidden"
                animate="show"
                className="flex flex-col"
              >
                {content.header.nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    variants={MOBILE_LINK_ITEM_VARIANTS}
                    href={item.href}
                    onClick={handleMobileAnchorClick(item.href)}
                    className={`block py-4 text-[28px] font-bold transition-colors duration-200 hover:text-[#bf1b59] ${
                      index !== content.header.nav.length - 1 ? "border-b border-[rgba(191,27,89,0.12)]" : ""
                    }`}
                    style={{
                      color: "#701732",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>

              <div className="flex-1" />

              <a
                href="#galeri"
                onClick={handleMobileAnchorClick("#galeri")}
                className="w-full rounded-2xl py-[18px] text-center text-base font-bold tracking-[0.02em] text-white transition-opacity hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #bf1b59, #701732)",
                  boxShadow: "0 4px 20px rgba(191, 27, 89, 0.3)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {content.header.joinNow}
              </a>

              <p className="mt-[14px] text-center text-[11px] text-[#576100]">
                Powered by{" "}
                <a
                  href="https://instagram.com/dekatlokal"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setIsPoweredLinkHovered(true)}
                  onMouseLeave={() => setIsPoweredLinkHovered(false)}
                  style={{
                    fontWeight: 700,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    color: isPoweredLinkHovered ? "#bf1b59" : "#576100",
                    transition: "color 0.2s",
                  }}
                >
                  DekatLokal
                </a>
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <BackToTop />
    </>
  );
}
