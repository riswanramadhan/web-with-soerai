"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Rocket, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface ProgramCardProps {
  programId?: string;
  title: string;
  subtitle: string;
  description: string;
  outputs: string[];
  outcomes: string[];
}

type ProgramIconKey = "vision" | "strategy" | "impact" | "default";

const PROGRAM_ICON_KEY_BY_ID: Record<string, ProgramIconKey> = {
  "program-1": "vision",
  "program-2": "strategy",
  "program-3": "impact",
};

function resolveProgramIconKey(programId: string | undefined, title: string): ProgramIconKey {
  if (programId && PROGRAM_ICON_KEY_BY_ID[programId]) {
    return PROGRAM_ICON_KEY_BY_ID[programId];
  }

  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("vision")) {
    return "vision";
  }

  if (normalizedTitle.includes("strategy")) {
    return "strategy";
  }

  if (normalizedTitle.includes("impact")) {
    return "impact";
  }

  return "default";
}

function ProgramIconGlyph({ iconKey, size }: { iconKey: ProgramIconKey; size: number }) {
  if (iconKey === "vision") {
    return <Eye size={size} />;
  }

  if (iconKey === "strategy") {
    return <Compass size={size} />;
  }

  if (iconKey === "impact") {
    return <Rocket size={size} />;
  }

  return <Sparkles size={size} />;
}

export function ProgramCard({
  programId,
  title,
  subtitle,
  description,
  outputs,
  outcomes,
}: ProgramCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => {
      mediaQuery.removeEventListener("change", syncViewport);
    };
  }, []);

  const detailLabel = language === "id" ? "Lihat Detail →" : "View Details →";
  const backLabel = language === "id" ? "← Kembali" : "← Back";
  const outputLabel = language === "id" ? "Output Program" : "Program Outputs";
  const outcomeLabel = language === "id" ? "Hasil" : "Outcomes";
  const overlineLabel = language === "id" ? "Program Unggulan" : "Featured Program";
  const scrollClassName = isFlipped ? "overflow-y-auto" : "overflow-hidden";
  const iconKey = resolveProgramIconKey(programId, title);
  const frontRotateY = isMobile ? 0 : isFlipped ? 180 : 0;
  const backRotateY = isMobile ? 0 : isFlipped ? 0 : -180;
  const flipTransition = {
    duration: isMobile ? 0.36 : 0.68,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <div style={{ perspective: "1200px" }} className="h-full w-full">
      <div
        style={{
          transformStyle: isMobile ? "flat" : "preserve-3d",
          WebkitTransformStyle: isMobile ? "flat" : "preserve-3d",
          position: "relative",
          height: "100%",
        }}
        className="relative min-h-[320px] overflow-hidden rounded-2xl"
      >
        <motion.div
          initial={false}
          animate={{ rotateY: frontRotateY, opacity: isFlipped ? 0 : 1 }}
          transition={flipTransition}
          style={{
            transformStyle: isMobile ? "flat" : "preserve-3d",
            WebkitTransformStyle: isMobile ? "flat" : "preserve-3d",
            backfaceVisibility: isMobile ? "visible" : "hidden",
            WebkitBackfaceVisibility: isMobile ? "visible" : "hidden",
            transformOrigin: "center center",
            pointerEvents: isFlipped ? "none" : "auto",
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-[#bf1b59]/20 border-t-[5px] border-t-[#bf1b59] bg-[#f4f8de] p-7 shadow-[0_14px_28px_rgba(112,23,50,0.12)] transition-opacity duration-300"
        >
          <div>
            <p className="mb-3 font-subheading text-[11px] font-semibold uppercase tracking-[0.18em] text-[#abb039]">
              {overlineLabel}
            </p>

            <span className="mb-4 inline-grid size-14 place-items-center rounded-full bg-[#bf1b59]/12 text-[#bf1b59]">
              <ProgramIconGlyph iconKey={iconKey} size={28} />
            </span>

            <h3 className="mb-2 font-hero text-3xl italic text-[#701732]">{title}</h3>
            <p className="text-sm leading-relaxed text-[#576100]">{subtitle}</p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setIsFlipped(true)}
              className="rounded-full border border-[#bf1b59] px-5 py-2 font-subheading text-sm font-semibold text-[#bf1b59] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:bg-[#bf1b59] hover:text-white"
              style={{ touchAction: "manipulation" }}
            >
              {detailLabel}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ rotateY: backRotateY, opacity: isFlipped ? 1 : 0 }}
          transition={flipTransition}
          style={{
            transformStyle: isMobile ? "flat" : "preserve-3d",
            WebkitTransformStyle: isMobile ? "flat" : "preserve-3d",
            backfaceVisibility: isMobile ? "visible" : "hidden",
            WebkitBackfaceVisibility: isMobile ? "visible" : "hidden",
            transformOrigin: "center center",
            pointerEvents: isFlipped ? "auto" : "none",
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 flex flex-col rounded-2xl bg-[#701732] p-7 text-[#f4f8de] shadow-[0_16px_30px_rgba(112,23,50,0.2)] transition-opacity duration-300"
        >
          <div className={`min-h-0 flex-1 space-y-4 pr-1 ${scrollClassName}`}>
            <div className="flex items-center gap-3">
              <span className="inline-grid size-10 shrink-0 place-items-center rounded-full bg-[#f4f8de]/14 text-[#f4f8de]">
                <ProgramIconGlyph iconKey={iconKey} size={20} />
              </span>
              <h3 className="font-hero text-2xl italic text-[#f4f8de]">{title}</h3>
            </div>
            <p className="text-sm leading-relaxed text-[#f4f8de]/90">
              {description}
            </p>

            <div>
              <p className="mb-2 font-subheading text-xs font-bold uppercase tracking-[0.14em] text-[#e26a8a]">
                {outputLabel}
              </p>
              <ul className="space-y-1 text-sm text-[#f4f8de]/85">
                {outputs.map((item) => (
                  <li key={`${title}-output-${item}`} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {outcomes.length > 0 && (
              <div>
                <p className="mb-2 font-subheading text-xs font-bold uppercase tracking-[0.14em] text-[#e26a8a]">
                  {outcomeLabel}
                </p>
                <ul className="space-y-1 text-sm text-[#f4f8de]/85">
                  {outcomes.map((item) => (
                    <li key={`${title}-outcome-${item}`} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-4">
            <button
              type="button"
              onClick={() => setIsFlipped(false)}
              className="rounded-full border border-[#f4f8de]/40 px-5 py-2 font-subheading text-sm font-semibold text-[#f4f8de] transition-all duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-[#f4f8de] hover:bg-[#f4f8de] hover:text-[#701732]"
              style={{ touchAction: "manipulation" }}
            >
              {backLabel}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ProgramCard;
