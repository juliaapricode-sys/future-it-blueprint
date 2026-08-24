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
        </div>

        <Separator className="my-10" />

        <section className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Состав архитектуры</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Семь доменов: бизнес-способности, приложения, данные, интеграция,
              платформа, безопасность, операционная модель. Архитектура — правила,
              по которым системы имеют право соединяться.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Целевые слои</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              L0–L2 — технологический контур. L3 — производство (MES и смежные
              системы). OT DMZ — шлюз операционных технологий. Интеграция (API и
              события). Corporate Data Warehouse, Data Portal, Data Governance.
              Корпоративные приложения, холдинговые продукты, каналы. Данные
              поднимаются. Управляющие воздействия вниз — только через шлюзы.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Почему данные собирают в одном месте</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              <p>
                Corporate Data Warehouse — корпоративное хранилище: единые витрины
                по активу, точке учёта, рынку, финансам, надёжности.
              </p>
              <p>
                Data Portal — портал данных: каталог, семантический слой,
                самообслуживание без локальных копий.
              </p>
              <p>
                Data Governance — управление данными: владельцы, качество,
                мастер-данные, происхождение, доступ, в том числе для КИИ.
              </p>
              <p>
                Решение Холдинга пересекает процессы. Единое хранилище — это
                согласованная копия после шлюза, а не смешение сетей IT и OT.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Тренды: оценка, а не копирование</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              IT/OT на уровне данных, Unified Namespace, Lakehouse, Digital Twin,
              промышленный и генеративный ИИ, Platform Engineering, Zero Trust,
              Edge. Порядок: гипотеза ценности → ограниченный пилот (отрицательный
              результат допустим) → решение масштабировать, доработать или
              прекратить инвестирование.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Смещение ролей</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Бизнес-пользователь на портале данных и с помощью ИИ формирует MVP —
              минимально жизнеспособный продукт. Информационные технологии
              обеспечивают платформу, сложные интеграции, информационную
              безопасность, режим КИИ и перевод прошедшего проверку MVP в
              промышленную эксплуатацию.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>90 дней</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>1. Архитектурный совет и мораторий на нерегламентированные интеграции.</p>
              <p>2. Карта ландшафта IT/OT и данных критичных процессов.</p>
              <p>3. Пилот хранилища и портала: один домен, один актив.</p>
            </CardContent>
          </Card>
        </section>
      </article>
    </div>
  );
}
