import Image from "next/image";
import { cn } from "@/lib/utils";

export function ScenePanel({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "scene-panel hud-corners relative min-h-48 overflow-hidden rounded-3xl",
        className
      )}
    >
      <Image src={src} alt={alt} fill sizes="50vw" className="object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10" />
      {caption ? (
        <figcaption className="absolute bottom-3 left-3 right-3 font-mono text-[10px] tracking-[0.18em] text-cyan uppercase drop-shadow md:text-[11px]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
