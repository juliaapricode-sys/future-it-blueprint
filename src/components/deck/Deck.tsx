"use client";

import NextImage from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { AmbientField } from "@/components/deck/AmbientField";
import { SceneBackdrop } from "@/components/deck/SceneBackdrop";
import {
  AgendaSlide,
  DataSlide,
  DomainsSlide,
  Next90Slide,
  PeopleSlide,
  PrepareSlide,
  RealitySlide,
  RequirementsSlide,
  RoadmapSlide,
  TargetSlide,
  TitleSlide,
  TrendsSlide,
  WhySlide,
} from "@/components/deck/slides";
import { Button } from "@/components/ui/button";
import { SCENES } from "@/data/scenes";
import { SLIDES } from "@/data/talk";
import { cn } from "@/lib/utils";

const SLIDE_VIEWS = [
  TitleSlide,
  AgendaSlide,
  WhySlide,
  RealitySlide,
  DomainsSlide,
  TargetSlide,
  DataSlide,
  TrendsSlide,
  RequirementsSlide,
  PeopleSlide,
  RoadmapSlide,
  PrepareSlide,
  Next90Slide,
] as const;

function parseSlideHash() {
  const fromHash = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (
    !Number.isNaN(fromHash) &&
    fromHash >= 0 &&
    fromHash < SLIDE_VIEWS.length
  ) {
    return fromHash;
  }
  return 0;
}

function subscribeHash(onStoreChange: () => void) {
  window.addEventListener("hashchange", onStoreChange);
  return () => window.removeEventListener("hashchange", onStoreChange);
}

export function Deck() {
  const index = useSyncExternalStore(subscribeHash, parseSlideHash, () => 0);
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);
  const [touchX, setTouchX] = useState<number | null>(null);

  const last = SLIDE_VIEWS.length - 1;
  const View = SLIDE_VIEWS[index];

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(last, next));
      setOverview(false);
      const nextHash = `#${clamped}`;
      if (window.location.hash !== nextHash) {
        window.location.hash = String(clamped);
      }
    },
    [last]
  );

  useEffect(() => {
    SCENES.forEach((scene) => {
      const image = new Image();
      image.src = scene.src;
    });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (event.key === " " && target?.tagName === "BUTTON") return;

      if (event.key === "?" || (event.shiftKey && event.key === "/")) {
        event.preventDefault();
        setHelp((v) => !v);
        return;
      }
      if (event.key === "Escape") {
        setHelp(false);
        setOverview((v) => !v);
        return;
      }
      if (event.key === "f" || event.key === "F") {
        if (!document.fullscreenElement) {
          void document.documentElement.requestFullscreen();
        } else {
          void document.exitFullscreen();
        }
        return;
      }
      if (event.key === "Home") {
        event.preventDefault();
        go(0);
        return;
      }
      if (event.key === "End") {
        event.preventDefault();
        go(last);
        return;
      }
      if (
        event.key === "ArrowRight" ||
        event.key === "PageDown" ||
        event.key === " " ||
        event.key === "j"
      ) {
        event.preventDefault();
        go(index + 1);
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp" || event.key === "k") {
        event.preventDefault();
        go(index - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, last]);

  const progress = useMemo(
    () => ((index + 1) / SLIDE_VIEWS.length) * 100,
    [index]
  );

  return (
    <div className="deck-grid relative flex min-h-dvh flex-col">
      <SceneBackdrop
        src={SCENES[index].src}
        alt={SCENES[index].alt}
        variant={SCENES[index].variant}
      />
      <div className="deck-noise" />
      <AmbientField />
      <header className="no-print relative z-10 flex items-center justify-end gap-3 bg-linear-to-b from-black/45 to-transparent px-4 py-3 md:px-8">
        <Link
          href="/script"
          className="hidden font-mono text-[10px] tracking-wide text-muted-foreground uppercase hover:text-paper sm:inline"
        >
          Текст
        </Link>
      </header>

      <div className="relative z-10 mx-4 h-px bg-white/10 md:mx-8">
        <div
          className="h-px bg-linear-to-r from-violet via-cyan to-gold transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main
        className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-4 py-4 md:px-8 md:py-6"
        onTouchStart={(e) => setTouchX(e.changedTouches[0]?.clientX ?? null)}
        onTouchEnd={(e) => {
          if (touchX == null) return;
          const x = e.changedTouches[0]?.clientX ?? touchX;
          const dx = x - touchX;
          if (dx < -50) go(index + 1);
          if (dx > 50) go(index - 1);
          setTouchX(null);
        }}
      >
        {overview ? (
          <ol className="grid auto-rows-fr grid-cols-1 gap-2 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
            {SLIDES.map((slide, i) => (
              <li key={slide.id}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  className={cn(
                    "relative h-full min-h-[7.5rem] w-full overflow-hidden rounded-xl text-left transition-colors",
                    i === index
                      ? "ring-1 ring-cyan/70 glow-cyan"
                      : "hover:ring-1 hover:ring-cyan/30"
                  )}
                >
                  <NextImage
                    src={SCENES[i].src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/45 to-black/15" />
                  <div className="relative p-4">
                    <p className="font-mono text-[10px] text-gold">{slide.number}</p>
                    <p className="mt-2 text-sm font-medium text-paper">{slide.kicker}</p>
                  </div>
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="flex min-h-0 flex-1 flex-col"
              initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <View />
            </motion.div>
          </AnimatePresence>
        )}
      </main>

      <footer className="no-print relative z-10 flex items-center justify-between gap-3 bg-linear-to-t from-black/50 to-transparent px-4 py-3 md:px-8">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => go(index - 1)}
            disabled={index === 0}
          >
            Назад
          </Button>
          <Button
            size="sm"
            onClick={() => go(index + 1)}
            disabled={index === last}
          >
            Далее
          </Button>
        </div>
        <p className="hidden font-mono text-[10px] text-white/35 md:block">
          ← → пробел · Esc обзор · ? справка
        </p>
      </footer>

      {help ? (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-black/70 p-4 md:items-center"
          onClick={() => setHelp(false)}
        >
          <div
            className="glass w-full max-w-md rounded-2xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-heading text-lg text-paper">Управление</p>
            <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
              <li>← → / пробел / J K — слайды</li>
              <li>F — полный экран</li>
              <li>Esc — обзор всех слайдов</li>
              <li>Home / End — начало и конец</li>
            </ul>
            <Button className="mt-4" onClick={() => setHelp(false)}>
              Закрыть
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
