"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  AgendaSlide,
  DomainsSlide,
  Next90Slide,
  PeopleSlide,
  PrepareSlide,
  PrinciplesSlide,
  RealitySlide,
  RequirementsSlide,
  RoadmapSlide,
  TargetSlide,
  TitleSlide,
  TrendsSlide,
  WhySlide,
} from "@/components/deck/slides";
import { SLIDES, TALK_MINUTES } from "@/data/talk";
import { cn } from "@/lib/utils";

const SLIDE_VIEWS = [
  TitleSlide,
  AgendaSlide,
  WhySlide,
  RealitySlide,
  DomainsSlide,
  TrendsSlide,
  RequirementsSlide,
  TargetSlide,
  PrinciplesSlide,
  RoadmapSlide,
  PrepareSlide,
  PeopleSlide,
  Next90Slide,
] as const;

function formatClock(totalSec: number) {
  const clamped = Math.max(0, totalSec);
  const m = Math.floor(clamped / 60);
  const s = clamped % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function Deck() {
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const fromHash = Number.parseInt(window.location.hash.replace("#", ""), 10);
    if (
      !Number.isNaN(fromHash) &&
      fromHash >= 0 &&
      fromHash < SLIDE_VIEWS.length
    ) {
      return fromHash;
    }
    return 0;
  });
  const [notes, setNotes] = useState(false);
  const [overview, setOverview] = useState(false);
  const [help, setHelp] = useState(false);
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [touchX, setTouchX] = useState<number | null>(null);

  const last = SLIDE_VIEWS.length - 1;
  const meta = SLIDES[index];
  const View = SLIDE_VIEWS[index];
  const budget = TALK_MINUTES * 60;
  const remaining = budget - elapsed;

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(last, next));
      setIndex(clamped);
      setOverview(false);
      window.location.hash = String(clamped);
    },
    [last]
  );

  useEffect(() => {
    const onHash = () => {
      const fromHash = Number.parseInt(window.location.hash.replace("#", ""), 10);
      if (!Number.isNaN(fromHash) && fromHash >= 0 && fromHash <= last) {
        setIndex(fromHash);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [last]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setElapsed((v) => v + 1), 1000);
    return () => window.clearInterval(id);
  }, [running]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) return;

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
      if (event.key === "n" || event.key === "N") {
        setNotes((v) => !v);
        return;
      }
      if (event.key === "t" || event.key === "T") {
        setRunning((v) => !v);
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
        if (!running) setRunning(true);
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
  }, [go, index, last, running]);

  const progress = useMemo(
    () => ((index + 1) / SLIDE_VIEWS.length) * 100,
    [index]
  );

  return (
    <div className="deck-grid relative flex min-h-dvh flex-col">
      <div className="deck-noise" />
      <header className="no-print relative z-10 flex items-center justify-between gap-3 px-4 py-3 md:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.2em] text-copper uppercase">
            Холдинг · архитектура
          </span>
          <span className="hidden text-white/20 sm:inline">/</span>
          <span className="hidden truncate font-mono text-[10px] text-muted-foreground sm:inline">
            {meta.kicker}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href="/script"
            className="hidden font-mono text-[10px] tracking-wide text-muted-foreground uppercase hover:text-paper sm:inline"
          >
            Текст
          </Link>
          <Link
            href="/handout"
            className="hidden font-mono text-[10px] tracking-wide text-muted-foreground uppercase hover:text-paper md:inline"
          >
            Памятка
          </Link>
          <Button
            variant="ghost"
            size="xs"
            onClick={() => setNotes((v) => !v)}
            className="font-mono text-[10px] tracking-wide uppercase"
          >
            Заметки
          </Button>
          <button
            type="button"
            onClick={() => setRunning((v) => !v)}
            className={cn(
              "font-mono rounded-md px-2 py-1 text-[11px] tabular-nums",
              remaining < 0
                ? "text-destructive"
                : remaining < 120
                  ? "text-ot"
                  : "text-teal"
            )}
            aria-label="Таймер доклада"
          >
            {formatClock(remaining)}
          </button>
        </div>
      </header>

      <div className="relative z-10 mx-4 h-px bg-white/10 md:mx-8">
        <div
          className="h-px bg-linear-to-r from-copper to-teal transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <main
        className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col px-4 py-4 md:px-8 md:py-6"
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
                    "h-full w-full rounded-xl border p-4 text-left transition-colors",
                    i === index
                      ? "border-copper/50 bg-copper/10"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  )}
                >
                  <p className="font-mono text-[10px] text-copper">{slide.number}</p>
                  <p className="mt-2 text-sm font-medium text-paper">{slide.kicker}</p>
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <div className="flex min-h-0 flex-1 flex-col">
            <View />
          </div>
        )}
      </main>

      {notes && !overview ? (
        <aside className="relative z-10 mx-4 mb-3 rounded-xl border border-copper/25 bg-black/40 p-3 backdrop-blur-md md:mx-8 md:p-4">
          <p className="font-mono text-[10px] tracking-widest text-copper uppercase">
            Заметки докладчика · {Math.round(meta.durationSec / 60)} мин
          </p>
          <ul className="mt-2 space-y-1 text-sm text-paper/90">
            {meta.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </aside>
      ) : null}

      <footer className="no-print relative z-10 flex items-center justify-between gap-3 px-4 py-3 md:px-8">
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
            onClick={() => {
              if (!running) setRunning(true);
              go(index + 1);
            }}
            disabled={index === last}
          >
            Дальше
          </Button>
        </div>
        <p className="font-mono text-[11px] text-muted-foreground">
          {String(index + 1).padStart(2, "0")} / {String(SLIDE_VIEWS.length).padStart(2, "0")}
        </p>
        <p className="hidden font-mono text-[10px] text-white/35 md:block">
          ← → пробел · N заметки · T таймер · Esc обзор · ? справка
        </p>
      </footer>

      {help ? (
        <div
          className="fixed inset-0 z-40 flex items-end justify-center bg-black/60 p-4 md:items-center"
          onClick={() => setHelp(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-white/10 bg-[#121820] p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-heading text-lg text-paper">Управление</p>
            <ul className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
              <li>← → / пробел / J K — слайды</li>
              <li>N — заметки докладчика</li>
              <li>T — старт и пауза таймера 15:00</li>
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
