"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface BotanicalDecoProps {
  className?: string;
  label?: string;
  duration?: number;
  delay?: number;
  priority?: boolean;
}

const BOTANICAL_IMAGE_BY_LABEL: Record<string, string> = {
  "Flower 02": "/images/botanical/flower_02.png",
  "Flower 03": "/images/botanical/flower_03.png",
  "Leaf 01": "/images/botanical/leaf_01.png",
  "Leaf 04": "/images/botanical/leaf_04.png",
  "Leaf 03": "/images/botanical/leaf_03.png",
  "Botanical A": "/images/botanical/botanical%20A.png",
  "Botanical B": "/images/botanical/botanical%20B.png",
};

const BOTANICAL_TIMING_BY_LABEL: Record<string, { duration: number; delay: number }> = {
  "Flower 02": { duration: 9.8, delay: 0.25 },
  "Flower 03": { duration: 10.6, delay: 0.9 },
  "Leaf 01": { duration: 8.9, delay: 0.15 },
  "Leaf 04": { duration: 11.1, delay: 1.2 },
  "Leaf 03": { duration: 9.4, delay: 0.55 },
  "Botanical A": { duration: 8.7, delay: 0.35 },
  "Botanical B": { duration: 10.9, delay: 1.4 },
};

export default function BotanicalDeco({
  className = "",
  label = "Botanical Deco",
  duration,
  delay,
  priority = false,
}: BotanicalDecoProps) {
  const imageSrc = BOTANICAL_IMAGE_BY_LABEL[label];
  const timing = BOTANICAL_TIMING_BY_LABEL[label] ?? { duration: 9.6, delay: 0.4 };
  const animationDuration = duration ?? timing.duration;
  const animationDelay = delay ?? timing.delay;

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none grid place-items-center text-center ${className}`}
      animate={{
        y: [0, -15, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: animationDuration,
        delay: animationDelay,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          width={220}
          height={220}
          sizes="(min-width: 1280px) 220px, (min-width: 1024px) 168px, 132px"
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          className="h-auto w-full object-contain"
        />
      ) : (
        <span className="font-subheading text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--pink-primary)]/80">
          {label}
        </span>
      )}
    </motion.div>
  );
}
