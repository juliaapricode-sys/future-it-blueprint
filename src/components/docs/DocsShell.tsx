import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Доклад" },
  { href: "/docs", label: "Документация" },
  { href: "/brand", label: "Брендбук" },
  { href: "/stack", label: "Стек" },
  { href: "/script", label: "Текст" },
  { href: "/handout", label: "Памятка" },
];

export function DocsShell({
  kicker,
  title,
  lead,
  active,
  children,
}: {
  kicker: string;
  title: string;
  lead: string;
  active: string;
  children: ReactNode;
}) {
  return (
    <div className="deck-grid min-h-dvh px-4 py-8 text-foreground md:px-8 md:py-12">
      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <header className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
              {kicker}
            </p>
            <h1 className="font-heading mt-3 max-w-[22ch] text-3xl leading-tight text-paper md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {lead}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button nativeButton={false} render={<Link href="/" />}>
              Открыть доклад
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="/downloads/Holding-digital-architecture.pdf" />}
            >
              PDF
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="/downloads/Holding-digital-architecture.pptx" />}
            >
              PPTX
            </Button>
          </div>
        </header>

        <nav className="mt-8 flex flex-wrap gap-2">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-wide uppercase transition-colors",
                active === item.href
                  ? "border-cyan/50 bg-cyan/15 text-cyan"
                  : "border-white/10 text-muted-foreground hover:border-cyan/30 hover:text-paper"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 space-y-6 pb-16">{children}</div>
      </div>
    </div>
  );
}

export function DocCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="glass-deep hud-corners rounded-3xl p-5 md:p-7">
      <h2 className="font-heading text-xl text-paper md:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-paper/80 md:text-[15px]">
        {children}
      </div>
    </section>
  );
}
