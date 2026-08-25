import type { Metadata } from "next";
import { DocCard, DocsShell } from "@/components/docs/DocsShell";

export const metadata: Metadata = {
  title: "Брендбук · Цифровая архитектура холдинга",
};

const COLORS = [
  {
    name: "Чернила",
    role: "Фон сцены",
    oklch: "oklch(0.13 0.028 250)",
    hex: "#0B1220",
  },
  {
    name: "Бумага",
    role: "Основной текст",
    oklch: "oklch(0.96 0.01 230)",
    hex: "#F4F0E6",
  },
  {
    name: "Циан",
    role: "Акцент информационных контуров",
    oklch: "oklch(0.82 0.11 195)",
    hex: "#5ED4E8",
  },
  {
    name: "Золото",
    role: "Акцент решения и данных",
    oklch: "oklch(0.84 0.12 85)",
    hex: "#E0B25A",
  },
  {
    name: "Фиолет",
    role: "Технологический контур",
    oklch: "oklch(0.72 0.16 300)",
    hex: "#B48CF0",
  },
];

export default function BrandPage() {
  return (
    <DocsShell
      kicker="Брендбук"
      title="Визуальный и речевой стандарт доклада"
      lead="Источник правды по цвету — переменные в src/app/globals.css. Шестнадцатеричные коды ниже — ориентиры для PowerPoint, PDF и печати."
      active="/brand"
    >
      <DocCard title="Характер">
        <p>
          Промышленный энергетический холдинг, а не стартап и не развлекательный
          интерфейс. Кадр выглядит как ситуационный контур: тёмный фон, стекло,
          тонкая шина, уголки индикации. Свет — циан, золото, фиолет. Без
          декоративного шума, без «приветствия в приложении».
        </p>
      </DocCard>

      <DocCard title="Цвет">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {COLORS.map((c) => (
            <figure key={c.name} className="overflow-hidden rounded-2xl border border-white/10">
              <div className="h-20" style={{ background: c.hex }} />
              <figcaption className="space-y-1 p-3">
                <p className="text-sm font-medium text-paper">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.role}</p>
                <p className="font-mono text-[11px] text-cyan">{c.hex}</p>
                <p className="font-mono text-[10px] text-muted-foreground">{c.oklch}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <p>
          Карточки — стекло: полупрозрачный тёмный слой, обводка циана около 28%
          непрозрачности, размытие фона. Уголки HUD — L-образные штрихи циана.
          Горизонтальная шина (busbar) — градиент фиолет → циан → золото.
        </p>
      </DocCard>

      <DocCard title="Шрифт">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-paper">Unbounded</strong> — заголовки слайдов
            и документационных страниц.
          </li>
          <li>
            <strong className="text-paper">IBM Plex Sans</strong> — основной
            текст, кириллица обязательна.
          </li>
          <li>
            <strong className="text-paper">IBM Plex Mono</strong> — номера,
            кикеры, служебные подписи.
          </li>
        </ul>
        <p>
          В PowerPoint допустима замена: заголовок — геометрический гротеск,
          текст — Calibri или IBM Plex Sans, моноширинный — Consolas.
        </p>
      </DocCard>

      <DocCard title="Речь и подписи">
        <ul className="list-disc space-y-2 pl-5">
          <li>Формальный русский, без сленга и без канцелярской пустоты.</li>
          <li>
            Латинские сокращения на слайдах не оставлять необъяснёнными:
            писать полное наименование.
          </li>
          <li>
            «Компании», не «ДЗО». «Архив технологических параметров», не жаргон
            контура.
          </li>
          <li>
            Не обещать календарные границы («90 дней»), если их нет в решении.
          </li>
          <li>
            Холдинг — с заглавной, когда речь о конкретном адресате доклада.
          </li>
        </ul>
      </DocCard>

      <DocCard title="Композиция кадра">
        <ul className="list-disc space-y-2 pl-5">
          <li>Формат сцены 16:9, полноэкранно.</li>
          <li>Кикер моноширинным цианом над заголовком.</li>
          <li>
            Фон — кинематографическая сцена по смыслу кадра, затемнение снизу,
            текст поверх стекла.
          </li>
          <li>Пустые состояния и декоративный lorem недопустимы.</li>
          <li>
            На мобильной ширине блоки складываются в одну колонку, управление
            слайдами — свайп и кнопки «Назад / Далее».
          </li>
        </ul>
      </DocCard>
    </DocsShell>
  );
}
