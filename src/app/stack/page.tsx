import type { Metadata } from "next";
import { DocCard, DocsShell } from "@/components/docs/DocsShell";

export const metadata: Metadata = {
  title: "Стек · Цифровая архитектура холдинга",
};

export default function StackPage() {
  return (
    <DocsShell
      kicker="Стек технологий"
      title="Из чего собран доклад"
      lead="Статический сайт на React. На сервере Timeweb достаточно раздать готовые HTML-файлы. Сборка выполняется один раз на компьютере автора."
      active="/stack"
    >
      <DocCard title="Ядро">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-paper">Next.js 16.3</strong> — маршруты
            страниц, статическая выгрузка в папку <code className="text-cyan">out/</code>.
          </li>
          <li>
            <strong className="text-paper">React 19</strong> — слайды и
            документационные страницы.
          </li>
          <li>
            <strong className="text-paper">TypeScript</strong> — типы слайдов,
            сценария и сцен.
          </li>
        </ul>
      </DocCard>

      <DocCard title="Интерфейс">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-paper">Tailwind CSS 4</strong> — сетка,
            отступы, адаптив.
          </li>
          <li>
            <strong className="text-paper">shadcn/ui</strong> на{" "}
            <strong className="text-paper">Base UI</strong> — кнопки, карточки,
            разделитель.
          </li>
          <li>
            <strong className="text-paper">Motion</strong> — смена кадров
            доклада.
          </li>
          <li>
            <strong className="text-paper">Lucide</strong> — при необходимости
            иконки; в кадрах доклада ведущую роль играют сцена и типографика.
          </li>
        </ul>
      </DocCard>

      <DocCard title="Содержание">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <code className="text-cyan">src/components/deck/slides.tsx</code> —
            тексты слайдов.
          </li>
          <li>
            <code className="text-cyan">src/data/talk.ts</code> — сценарий
            выпуска и заметки.
          </li>
          <li>
            <code className="text-cyan">src/data/scenes.ts</code> — фоновые
            сцены.
          </li>
          <li>
            <code className="text-cyan">public/visuals/</code> — изображения
            WebP.
          </li>
        </ul>
      </DocCard>

      <DocCard title="Сборка и показ">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Разработка: <code className="text-cyan">npm run dev</code> на порту
            43217.
          </li>
          <li>
            Выгрузка HTML: <code className="text-cyan">npm run build</code> →{" "}
            <code className="text-cyan">out/</code>.
          </li>
          <li>
            Локальный просмотр сборки:{" "}
            <code className="text-cyan">npm start</code> (раздаёт папку{" "}
            <code className="text-cyan">out/</code>).
          </li>
          <li>
            Сервер Timeweb Node.js не использует: загружаются файлы из{" "}
            <code className="text-cyan">out/</code>.
          </li>
        </ul>
      </DocCard>
    </DocsShell>
  );
}
