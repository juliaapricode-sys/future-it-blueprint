import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Памятка · Цифровая архитектура холдинга",
};

export default function HandoutPage() {
  return (
    <div className="deck-grid min-h-dvh px-4 py-10 text-foreground md:px-8">
      <article className="relative z-10 mx-auto max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.2em] text-cyan uppercase">
          Памятка после доклада · 15 минут
        </p>
        <h1 className="font-heading mt-3 text-3xl leading-tight md:text-4xl">
          Цифровая архитектура промышленного холдинга
        </h1>
        <p className="mt-4 text-muted-foreground">
          Краткое изложение для участников доклада. Технологический контур
          сохраняется. Меняются правила соединения систем, контур корпоративных
          данных и роли информационных технологий и бизнес-пользователей.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button nativeButton={false} render={<Link href="/" />}>
            К слайдам
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/script" />}>
            Полный текст
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/docs" />}>
            Документация
          </Button>
        </div>

        <Separator className="my-10" />

        <section className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Состав архитектуры</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Семь компонентов: бизнес-способности, приложения, данные, интеграция,
              платформа, безопасность, операционная модель. Архитектура — правила,
              по которым системы имеют право соединяться.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Целевые слои</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Технологический контур. Производственный контур. Буферная зона
              операционных технологий. Интеграция. Корпоративное хранилище данных.
              Управление данными. Портал данных. Корпоративные приложения.
              Холдинговые продукты. Портал искусственного интеллекта:
              маркетплейс сервисов, протокол контекста модели, программные
              интерфейсы приложений. Каналы и решения. Данные поднимаются.
              Управляющие воздействия вниз — только через шлюзы.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Почему данные собирают в одном месте</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Корпоративное хранилище данных — единые витрины по активу, точке
                учёта, производству, финансам, надёжности. Архив технологических
                параметров поступает только после шлюза.
              </p>
              <p>
                Портал данных — каталог, семантический слой, самообслуживание без
                локальных копий.
              </p>
              <p>
                Управление данными — владельцы, качество, мастер-данные,
                происхождение, доступ, в том числе для критической информационной
                инфраструктуры.
              </p>
              <p>
                Решение Холдинга пересекает процессы. Единое хранилище — это
                согласованная копия после шлюза, а не смешение информационного и
                операционного контуров.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Тренды: оценка, а не копирование</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Сближение контуров на уровне данных, единое пространство имён,
              цифровой двойник, промышленный и генеративный искусственный интеллект,
              платформенная инженерия, нулевое доверие, вычисления на площадке.
              Порядок: гипотеза ценности → ограниченный пилот (отрицательный
              результат допустим) → решение масштабировать, доработать или
              прекратить инвестирование.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Смещение ролей</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Бизнес-пользователь на портале данных и портале искусственного
              интеллекта формирует минимально жизнеспособный продукт.
              Информационные технологии обеспечивают платформу, сложные
              интеграции, информационную безопасность, режим критической
              информационной инфраструктуры и перевод прошедшего проверку продукта
              в промышленную эксплуатацию.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Стратегии и политики</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>Стратегия цифровой трансформации.</p>
              <p>Стратегия данных.</p>
              <p>
                Стратегия перехода на методологию разработки с применением
                искусственного интеллекта.
              </p>
              <p>
                Политика информационной безопасности с учётом решений на основе
                искусственного интеллекта.
              </p>
              <p>Политика доступа к технологическому контуру.</p>
              <p>Архитектурный стандарт и политика технологической независимости.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Первые решения</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>1. Архитектурный совет, мораторий и запуск пакета документов.</p>
              <p>2. Карта ландшафта и данных критичных процессов.</p>
              <p>3. Пилотные проекты: обогащение хранилища, реализация коннекторов к данным, портал данных, портал искусственного интеллекта, проверка гипотезы и ценности.</p>
            </CardContent>
          </Card>
        </section>
      </article>
    </div>
  );
}
