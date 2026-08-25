<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Правила проекта

Это не платформа и не личный кабинет. Это 15-минутный доклад и сопутствующие страницы (текст выпуска, памятка, документация, брендбук, стек).

## Язык

- Формальный русский на всех видимых поверхностях.
- Без сленга и без необъяснённых латинских сокращений на слайдах.
- «Компании», не «ДЗО». Не вводить календарные границы, которых нет в тексте решения.

## Где править смысл

- Слайды: `src/components/deck/slides.tsx`
- Сценарий: `src/data/talk.ts`
- Сцены фона: `src/data/scenes.ts`, файлы в `public/visuals/`
- Слои архитектуры: `src/components/diagrams/TargetArchitecture.tsx`
- Документация на сайте: `src/app/docs`, `src/app/brand`, `src/app/stack`
- Бренд и стек в файлах: `docs/BRANDBOOK.md`, `docs/STACK.md`

При правке формулировки на слайде синхронизируйте сценарий и памятку.

## Сборка

Статический экспорт: `output: "export"` в `next.config.ts`. Картинки без серверного оптимизатора.

- Разработка: `npm run dev` (порт 43217)
- Выгрузка локальная: `npm run build` → `out/`
- Выгрузка HTML для Timeweb: `npm run pack:html` — полная кинематографическая статическая сборка в каталог `holding-architecture/` (корень сайта не затирать)
- Просмотр сборки: `npm start`

Не возвращать обязательный сервер Node.js, если задача — размещение на Timeweb как обычный сайт.

## Интерфейс

shadcn/ui уже подключён. Не добавлять вторую библиотеку компонентов. Цвета — из `globals.css` (циан, золото, фиолет, бумага). Заголовки — Unbounded, текст — IBM Plex Sans.
