import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="deck-grid flex min-h-dvh flex-col items-center justify-center px-6">
      <p className="font-mono text-xs tracking-[0.2em] text-cyan uppercase">404</p>
      <h1 className="font-heading mt-3 text-3xl">Страница не найдена</h1>
      <p className="mt-2 text-muted-foreground">Вернитесь к докладу.</p>
      <Button nativeButton={false} render={<Link href="/" />} className="mt-6">
        К слайдам
      </Button>
    </div>
  );
}
