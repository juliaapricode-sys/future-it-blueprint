# Стек технологий

Экранная версия: `/stack`.

## Ядро

| Технология | Назначение |
| --- | --- |
| Next.js 16.3 | Страницы и статическая выгрузка в `out/` |
| React 19 | Интерфейс слайдов и документации |
| TypeScript | Типы слайдов, сценария, сцен |

## Интерфейс

| Технология | Назначение |
| --- | --- |
| Tailwind CSS 4 | Сетка, отступы, адаптив |
| shadcn/ui + Base UI | Кнопки, карточки, разделитель |
| Motion | Смена кадров доклада |

## Содержание

| Путь | Назначение |
| --- | --- |
| `src/components/deck/slides.tsx` | Тексты слайдов |
| `src/data/talk.ts` | Сценарий выпуска |
| `src/data/scenes.ts` | Фоновые сцены |
| `public/visuals/` | Изображения WebP |

## Сборка

```bash
npm run dev            # разработка, порт 43217
npm run build          # HTML в папке out/ (локальный просмотр с корня)
npm start              # раздача out/ на порту 43217
npm run pack:html      # обычная HTML-страница: html/index.html и архив holding-architecture-html.zip
npm run start:html     # просмотр HTML на порту 43218
```

На Timeweb Node.js не нужен. Архив `holding-deck-timeweb.zip` после `build:timeweb` содержит только папку `holding-architecture/`: её добавляют в корень сайта, текущие страницы не заменяют.
