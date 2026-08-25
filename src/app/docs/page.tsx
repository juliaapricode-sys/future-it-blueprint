import type { Metadata } from "next";
import { DocCard, DocsShell } from "@/components/docs/DocsShell";

export const metadata: Metadata = {
  title: "Документация · Цифровая архитектура холдинга",
  description:
    "Описание проекта, запуск, размещение на Timeweb и состав материалов доклада.",
};

export default function DocsPage() {
  return (
    <DocsShell
      kicker="Документация проекта"
      title="Доклад, который можно показать по ссылке"
      lead="Это 15-минутный доклад о цифровой архитектуре промышленного энергетического холдинга. Страница собрана так, чтобы её можно было загрузить на обычный хостинг Timeweb: без GitHub и без запуска Node.js на сервере."
      active="/docs"
    >
      <DocCard title="Что это">
        <p>
          Полноэкранные слайды, текст выпуска для корпоративного телевидения и
          памятка после доклада. Тема: целевые слои архитектуры, корпоративное
          хранилище данных, портал данных, управление данными, портал
          искусственного интеллекта, роли информационных технологий и бизнеса,
          этапы перехода.
        </p>
        <p>
          Язык — формальный русский. На слайдах нет необъяснённых латинских
          сокращений.
        </p>
      </DocCard>

      <DocCard title="Страницы сайта">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-paper">Доклад</strong> — слайды. Стрелки,
            пробел, J/K, полный экран по F, обзор по Esc.
          </li>
          <li>
            <strong className="text-paper">Текст</strong> — сценарий на 15 минут.
          </li>
          <li>
            <strong className="text-paper">Памятка</strong> — краткое изложение
            для участников.
          </li>
          <li>
            <strong className="text-paper">Брендбук</strong> — цвет, шрифт, тон
            речи, правила оформления.
          </li>
          <li>
            <strong className="text-paper">Стек</strong> — технологии, из которых
            собран проект.
          </li>
        </ul>
      </DocCard>

      <DocCard title="Как открыть коллегам с Timeweb">
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            На своём компьютере выполните{" "}
            <code className="text-cyan">npm run pack:html</code>. Появится архив{" "}
            <code className="text-cyan">holding-architecture-html.zip</code> с
            одной папкой <code className="text-cyan">holding-architecture/</code>{" "}
            и файлом <code className="text-cyan">index.html</code>
            .
          </li>
          <li>
            Распакуйте архив в корень уже работающего сайта (
            <code className="text-cyan">public_html</code> или каталог, который
            сейчас отдаёт текущие страницы). Текущий{" "}
            <code className="text-cyan">index.html</code> и остальные файлы не
            заменяются — добавляется только новый каталог.
          </li>
          <li>
            Ссылка для коллег:{" "}
            <code className="text-cyan">
              https://ваш-домен.ru/holding-architecture/
            </code>
            . Документация:{" "}
            <code className="text-cyan">
              https://ваш-домен.ru/holding-architecture/docs/
            </code>
            .
          </li>
        </ol>
        <p>
          Node.js на сервере Timeweb не нужен. Это статические файлы, как у
          обычного сайта.
        </p>
      </DocCard>

      <DocCard title="Как запустить у себя для правки">
        <p>Нужны Node.js 20+ и npm.</p>
        <pre className="overflow-x-auto rounded-2xl bg-black/40 p-4 font-mono text-xs text-cyan">
          {`npm install
npm run dev`}
        </pre>
        <p>
          Доклад:{" "}
          <a className="text-cyan underline-offset-4 hover:underline" href="http://127.0.0.1:43217">
            http://127.0.0.1:43217
          </a>
          . Сборка для сервера: <code className="text-cyan">npm run build</code>.
        </p>
      </DocCard>

      <DocCard title="Файлы в репозитории">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <code className="text-cyan">README.md</code> — запуск и размещение.
          </li>
          <li>
            <code className="text-cyan">AGENTS.md</code> — правила для ассистента
            и устройство проекта.
          </li>
          <li>
            <code className="text-cyan">docs/BRANDBOOK.md</code> — брендбук.
          </li>
          <li>
            <code className="text-cyan">docs/STACK.md</code> — стек технологий.
          </li>
          <li>
            <code className="text-cyan">Holding-digital-architecture.pptx</code> и{" "}
            <code className="text-cyan">.pdf</code> — выгрузки 13 слайдов 16:9.
          </li>
        </ul>
      </DocCard>
    </DocsShell>
  );
}
