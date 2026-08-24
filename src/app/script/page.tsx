import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SCRIPT, SLIDES } from "@/data/talk";

export const metadata = {
  title: "Текст доклада · 15 минут",
};

export default function ScriptPage() {
  return (
    <div className="min-h-dvh bg-background px-4 py-10 md:px-8">
      <article className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] tracking-[0.2em] text-copper uppercase">
          Сценарий на 15 минут · читать вслух
        </p>
        <h1 className="font-heading mt-3 text-3xl leading-tight md:text-4xl">
          Полный текст доклада
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Темп — спокойный, около 120 слов в минуту. На слайде держите заметки
          клавишей N, здесь — связный текст.
        </p>
        <div className="mt-6 flex gap-2">
          <Button nativeButton={false} render={<Link href="/" />}>
            К слайдам
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/handout" />}>
            Памятка
          </Button>
        </div>

        <ol className="mt-12 space-y-10">
          {SCRIPT.map((block, i) => (
            <li key={block.id}>
              <p className="font-mono text-[11px] text-copper">
                {SLIDES[i]?.number} · {SLIDES[i]?.durationSec} сек · {block.title}
              </p>
              <p className="mt-3 text-[17px] leading-8 text-paper">{block.body}</p>
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
