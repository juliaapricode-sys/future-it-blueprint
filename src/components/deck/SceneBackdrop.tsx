"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SceneVariant } from "@/data/scenes";

const overlay: Record<SceneVariant, string> = {
  hero: "scene-veil-hero",
  cinematic: "scene-veil-cinematic",
  briefing: "scene-veil-briefing",
  dense: "scene-veil-dense",
};

export function SceneBackdrop({
  src,
  alt,
  variant,
}: {
  src: string;
  alt: string;
  variant: SceneVariant;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={src}
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="100vw"
            className="ken-burns object-cover"
          />
          <div className={cn("absolute inset-0", overlay[variant])} />
          <div className="scene-frame pointer-events-none absolute inset-3 rounded-[28px] md:inset-4" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
