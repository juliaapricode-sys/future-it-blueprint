import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Памятка · Цифровая архитектура холдинга",
};

export default function HandoutPage() {
  return (
    <div className="min-h-dvh bg-background px-4 py-10 text-foreground md:px-8">
      <article className="mx-auto max-w-3xl">
        <p className="font-mono text-[11px] tracking-[0.2em] text-copper uppercase">
          Памятка после доклада · 15 минут
        </p>
        <h1 className="font-heading mt-3 text-3xl leading-tight md:text-4xl">
          Цифровая архитектура промышленного холдинга
        </h1>
        <p className="mt-4 text-muted-foreground">
          Короткий текст для тех, кто был на докладе — и для тех, кто не успел.
          Технологический контур не ломаем. Легаси не стыдимся. Меняем швы,
          правила соединения и операционную модель.
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
              <CardTitle>Что такое современная архитектура</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Не схема серверов, а семь доменов: бизнес-способности, приложения,
                данные, интеграция, платформа, безопасность и операционная модель.
                Архитектура — правила, по которым системы имеют право соединяться.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Тренды, которые нельзя игнорировать</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Сближение IT и OT без смешения сетей. Единое пространство имён
              производства. Продукты данных. Предиктивный ТОиР. Промышленный ИИ на
              очищенных потоках. Внутренняя платформа для ДЗО.
              Импортонезависимость как заменяемость. Отчётность из систем, а не из
              Excel.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Must / Should / Win</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>
                <span className="text-paper">Must.</span> Непрерывность
                техпроцесса, КИИ, сегментация, восстановление.
              </p>
              <p>
                <span className="text-paper">Should.</span> Единые идентификаторы,
                изменения за недели, наблюдаемость, меньше lock-in.
              </p>
              <p>
                <span className="text-paper">Win.</span> Единая операционная
                картина, решения ближе к реальному времени, скорость сервисов,
                ниже стоимость владения.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Целевая слоистость</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              L0–L2 — неприкасаемое ядро станции. L3 — MES, АСУЭ, цеховой ТОиР.
              OT DMZ — шлюзы, историк, промышленная шина. L4 — ERP, EAM, HR,
              финансы, ГИС. Выше — холдинговые продукты. Поперёк — данные и ИИ,
              API, IAM/PAM, SOC с OT. Данные поднимаются. Команды вниз — только
              через контролируемые шлюзы.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Этапы и 90 дней</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>0. Инвентаризация, совет с вето, мораторий на точка-точка.</p>
              <p>1–2. Связность и данные. 3. Платформа поставки.</p>
              <p>4. Домены по ценности. 5. ИИ. 6. Продуктовая модель.</p>
              <p className="text-paper">
                Сегодня: совет, карта ландшафта IT+OT, один маяк и один пилотный
                актив.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Что требуется от сотрудников</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              Руководители формулируют способность, а не модуль. Владельцы
              процессов владеют данными. ИТ работает продуктами и платформой. АСУ
              ТП — соавторы. ИБ — в конвейере. Каждый соблюдает зоны. Мы не
              заказываем системы — развиваем способности холдинга.
            </CardContent>
          </Card>
        </section>
      </article>
    </div>
  );
}
