import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SCRIPT, SLIDES } from "@/data/talk";

export const metadata = {
  title: "Текст выпуска · 15 минут",
};

export default function ScriptPage() {
  return (
    <div className="deck-grid min-h-dvh px-4 py-10 md:px-8">
      <article className="mx-auto max-w-2xl">
        <p className="font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
          Сценарий на 15 минут · корпоративное телевидение
        </p>
        <h1 className="font-heading mt-3 text-3xl leading-tight md:text-4xl">
          Полный текст выпуска
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Обращение в камеру, не доклад в зале. Темп спокойный, около 120 слов в
          минуту. Каждый блок начинается с перехода на следующий кадр. На слайде
          заметки — клавиша N.
        </p>
        <div className="mt-6 flex gap-2">
          <Button nativeButton={false} render={<Link href="/" />}>
            К слайдам
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/handout" />}>
            Памятка
          </Button>
        </div>

        <ol className="mt-12 space-y-12">
          {SCRIPT.map((block, i) => (
            <li key={block.id}>
              <p className="font-mono text-[11px] text-cyan">
                {SLIDES[i]?.number} · {SLIDES[i]?.durationSec} сек · {block.title}
              </p>
              <div className="mt-3 space-y-4">
                {block.body.split("\n\n").map((paragraph, pi) => (
                  <p key={pi} className="text-[17px] leading-8 text-paper">
                    {paragraph}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </article>
    </div>
  );
}
