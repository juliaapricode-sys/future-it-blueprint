import { cn } from "@/lib/utils";

export function SlideShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-0 flex-col justify-center gap-5 md:gap-7",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-cyan uppercase md:text-xs">
      {children}
    </p>
  );
}

export function SlideTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-heading max-w-[20ch] text-[1.55rem] leading-[1.15] font-medium tracking-tight text-paper sm:text-3xl md:max-w-[24ch] md:text-[2.15rem] lg:text-[2.45rem]",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Tile({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass hud-corners rounded-2xl p-3.5 md:p-4", className)}>
      {children}
    </div>
  );
}

export function Term({
  en,
  ru,
}: {
  en: string;
  ru: string;
}) {
  return (
    <span>
      <span className="font-medium text-cyan">{en}</span>
      <span className="text-muted-foreground"> — {ru}</span>
    </span>
  );
}
