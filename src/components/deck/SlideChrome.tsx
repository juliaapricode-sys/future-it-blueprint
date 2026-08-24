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
        "flex h-full min-h-0 flex-col justify-center gap-6 md:gap-8",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-copper uppercase md:text-xs">
      {children}
    </p>
  );
}

export function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading max-w-[18ch] text-[1.65rem] leading-[1.15] font-medium tracking-tight text-paper sm:text-3xl md:max-w-[22ch] md:text-4xl lg:text-[2.65rem]">
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
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/[0.035] p-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:p-4",
        className
      )}
    >
      {children}
    </div>
  );
}
