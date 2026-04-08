"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useContent, useLanguage } from "@/context/LanguageContext";
import { members, MemberType } from "@/lib/members";
import { useStableReducedMotion } from "@/lib/useStableReducedMotion";

type Filter = MemberType;
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

const memberDisplayOrder: Record<string, number> = {
  "t-01": 1, // President
  "m-01": 2, // Secretary
  "m-02": 3, // Treasurer
  "t-04": 4, // Head of R&E
  "m-13": 5,
  "m-14": 6,
  "t-02": 7, // Head of Media
  "m-05": 8,
  "m-06": 9,
  "m-07": 10,
  "m-08": 11,
  "m-17": 12,
  "m-16": 13, // Head of Program
  "m-09": 14,
  "m-10": 15,
  "m-11": 16,
  "m-12": 17,
  "t-03": 18, // Head of HRD
  "m-03": 19,
  "m-04": 20,
  "m-15": 21,
};

export default function MemberGallerySection() {
  const content = useContent();
  const { language } = useLanguage();
  const reduceMotion = useStableReducedMotion();
  const [filter, setFilter] = useState<Filter>("member");
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const emptyStateText =
    language === "id"
      ? "Belum ada profil untuk filter ini."
      : "No profiles are available for this filter.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: reduceMotion ? 0 : 0.5,
        ease: EASING,
        staggerChildren: reduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 },
    visible: (index: number) => ({
      opacity: 1,
      scale: 1,
      transition: reduceMotion
        ? { duration: 0 }
        : {
            type: "spring" as const,
            duration: 0.5,
            bounce: 0.28,
            delay: index * 0.04,
          },
    }),
  };

  const filteredMembers = useMemo(() => {
    const byType = members.filter((person) => person.type === filter);

    if (filter !== "member") {
      return byType;
    }

    return [...byType].sort((a, b) => {
      const aOrder = memberDisplayOrder[a.id] ?? Number.MAX_SAFE_INTEGER;
      const bOrder = memberDisplayOrder[b.id] ?? Number.MAX_SAFE_INTEGER;

      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }

      return a.name.localeCompare(b.name);
    });
  }, [filter]);

  useEffect(() => {
    mobileScrollerRef.current?.scrollTo({ left: 0, behavior: "smooth" });
  }, [filter]);

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

  const renderCard = (person: (typeof members)[number], index: number, compact: boolean) => {
    const roleText = language === "id" ? person.roleId : person.roleEn;
    const photoSrc = encodeURI(person.imagePlaceholder);
    const typeLabel =
      person.type === "mentor"
        ? content.gallery.roleLabel.mentor
        : content.gallery.roleLabel.member;
    const isMentor = person.type === "mentor";
    const majorText = language === "id" ? person.majorId : person.majorEn ?? person.majorId;
    const universityText =
      language === "id" ? person.universityId : person.universityEn ?? person.universityId;
    const achievements =
      language === "id"
        ? person.achievementsId ?? []
        : person.achievementsEn ?? person.achievementsId ?? [];

    return (
      <motion.article
        key={person.id}
        variants={itemVariants}
        custom={index}
        className={`interactive-card interactive-card-hover rounded-2xl ${
          isMentor
            ? "border border-[rgba(191,27,89,0.26)] bg-[linear-gradient(150deg,rgba(255,255,255,0.98)_0%,rgba(255,240,246,0.95)_52%,rgba(255,247,230,0.95)_100%)] shadow-[0_14px_28px_rgba(191,27,89,0.14)]"
            : "border border-[rgba(112,23,50,0.14)] bg-white shadow-[0_10px_24px_rgba(112,23,50,0.08)]"
        } ${
          compact
            ? "p-3"
            : `${isMentor ? "w-[84vw] max-w-[340px]" : "w-[78vw] max-w-[280px]"} shrink-0 snap-start p-4`
        }`}
      >
        <div
          className={`relative overflow-hidden rounded-xl border bg-white ${
            isMentor
              ? "aspect-[4/5] border-[rgba(191,27,89,0.22)]"
              : "aspect-square border-[rgba(112,23,50,0.14)]"
          }`}
        >
          <Image
            src={photoSrc}
            alt={`Foto ${person.name}`}
            fill
            sizes={compact ? "(min-width: 1280px) 14vw, (min-width: 1024px) 18vw, (min-width: 768px) 24vw" : "78vw"}
            className="object-cover object-center"
          />
        </div>

        <div className={compact ? "mt-2" : "mt-3"}>
          {isMentor ? (
            <span className="inline-flex rounded-full bg-[var(--pink-primary)]/14 px-2.5 py-1 text-[11px] font-semibold text-[var(--pink-primary)]">
              {typeLabel}
            </span>
          ) : null}

          <h3
            className={`${compact ? "text-sm font-semibold text-[var(--burgundy)]" : "text-base font-semibold text-[var(--burgundy)]"} ${
              isMentor ? "mt-2" : ""
            }`}
          >
            {person.name}
          </h3>

          {!isMentor ? (
            <p className={compact ? "text-xs text-[var(--burgundy)]/78" : "text-sm text-[var(--burgundy)]/78"}>
              {roleText}
            </p>
          ) : null}

          {isMentor ? (
            <div className={compact ? "mt-2.5 space-y-2" : "mt-3 space-y-2.5"}>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pink-primary)]/90">
                  Major
                </p>
                <p className={compact ? "mt-0.5 text-xs text-[var(--burgundy)]/85" : "mt-0.5 text-sm text-[var(--burgundy)]/85"}>
                  {majorText ?? "-"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pink-primary)]/90">
                  University
                </p>
                <p className={compact ? "mt-0.5 text-xs text-[var(--burgundy)]/85" : "mt-0.5 text-sm text-[var(--burgundy)]/85"}>
                  {universityText ?? "-"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--pink-primary)]/90">
                  Achievement
                </p>
                {achievements.length > 0 ? (
                  <ul className={compact ? "mt-1.5 space-y-1" : "mt-1.5 space-y-1.5"}>
                    {achievements.map((item, itemIndex) => (
                      <li key={`${person.id}-achievement-${itemIndex}`} className="flex items-start gap-1.5">
                        <span className="mt-[5px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--pink-primary)]/85" />
                        <span
                          className={
                            compact
                              ? "text-[11px] leading-[1.35] text-[var(--burgundy)]/84"
                              : "text-xs leading-[1.45] text-[var(--burgundy)]/84"
                          }
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className={compact ? "mt-0.5 text-xs text-[var(--burgundy)]/70" : "mt-0.5 text-sm text-[var(--burgundy)]/70"}>
                    -
                  </p>
                )}
              </div>
            </div>
          ) : null}
        </div>

        {!isMentor ? (
          <span className="mt-2 inline-flex rounded-full bg-[var(--olive-light)]/25 px-2.5 py-1 text-[11px] font-semibold text-[var(--olive-dark)]">
            {typeLabel}
          </span>
        ) : null}
      </motion.article>
    );
  };

  return (
    <section id="galeri" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div {...reveal("left", 0.02)} className="text-center">
          <h2 className="font-hero text-4xl italic text-[var(--burgundy)] sm:text-5xl">
            {content.gallery.sectionTitle}
          </h2>
        </motion.div>

        <div className="hide-scrollbar mt-8 -mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0">
          <div className="flex w-max min-w-full flex-nowrap gap-3 sm:w-auto sm:min-w-0 sm:flex-wrap sm:justify-center">
            <motion.button
              {...reveal("left", 0.08)}
              type="button"
              onClick={() => setFilter("member")}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === "member"
                  ? "bg-[var(--pink-primary)] text-white shadow-[0_10px_22px_rgba(191,27,89,0.3)]"
                  : "ghost-btn border-[var(--olive-dark)]/45"
              }`}
            >
              {content.gallery.filters.member}
            </motion.button>
            <motion.button
              {...reveal("right", 0.12)}
              type="button"
              onClick={() => setFilter("mentor")}
              className={`shrink-0 whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                filter === "mentor"
                  ? "bg-[var(--pink-primary)] text-white shadow-[0_10px_22px_rgba(191,27,89,0.3)]"
                  : "ghost-btn border-[var(--olive-dark)]/45"
              }`}
            >
              {content.gallery.filters.mentor}
            </motion.button>
          </div>
        </div>

        {filteredMembers.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-[rgba(112,23,50,0.16)] bg-white/80 px-6 py-5 text-center">
            <p className="text-sm text-[var(--burgundy)]/82">{emptyStateText}</p>
          </div>
        ) : (
          <>
            <div className="mt-10 md:hidden">
              <motion.div
                ref={mobileScrollerRef}
                key={`mobile-${filter}-${filteredMembers.length}`}
                variants={containerVariants}
                initial={reduceMotion ? "visible" : "hidden"}
                animate="visible"
                className="-mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4"
              >
                {filteredMembers.map((person, index) => renderCard(person, index, false))}
              </motion.div>
            </div>

            <motion.div
              key={`desktop-${filter}-${filteredMembers.length}`}
              variants={containerVariants}
              initial={reduceMotion ? "visible" : "hidden"}
              animate="visible"
              className="mt-10 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredMembers.map((person, index) => renderCard(person, index, true))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}
