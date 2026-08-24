import Image from "next/image";
import { ScenePanel } from "@/components/deck/ScenePanel";
import {
  Kicker,
  SlideShell,
  SlideTitle,
  Tile,
} from "@/components/deck/SlideChrome";
import { DataConstellation } from "@/components/diagrams/DataConstellation";
import { ArchitectureStack } from "@/components/diagrams/TargetArchitecture";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TitleSlide() {
  return (
    <SlideShell className="justify-end pb-2 md:justify-end md:pb-6">
      <div className="max-w-3xl">
        <div className="busbar mb-5 w-32 md:w-48" />
        <Kicker>Промышленный энергетический холдинг</Kicker>
        <h1 className="font-heading mt-3 max-w-[16ch] text-[2.15rem] leading-[1.05] font-medium tracking-tight text-paper text-glow sm:text-5xl md:text-6xl lg:text-[4.15rem]">
          Цифровая архитектура современного холдинга
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-paper/85 md:text-lg">
          Целевое устройство информационных и операционных контуров: непрерывность
          технологического процесса и скорость обоснованного решения на
          достоверных данных.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Badge variant="secondary">15 минут</Badge>
          <Badge variant="outline">Информационные и операционные технологии</Badge>
          <Badge variant="outline">Хранилище · портал · управление данными</Badge>
          <Badge variant="outline">Критическая информационная инфраструктура</Badge>
        </div>
      </div>
    </SlideShell>
  );
}

const AGENDA = [
  { t: "01", label: "Назначение архитектуры для Холдинга", min: "1 мин" },
  { t: "02", label: "Состав и целевые слои", min: "3 мин" },
  { t: "03", label: "Хранилище, портал и управление данными", min: "2 мин" },
  { t: "04", label: "Тренды: оценка ценности, а не копирование", min: "2 мин" },
  { t: "05", label: "Требования и смещение ролей ИТ и бизнеса", min: "3 мин" },
  { t: "06", label: "Этапы, стратегии, политики, первые решения", min: "4 мин" },
];

export function AgendaSlide() {
  return (
    <SlideShell className="gap-4 md:gap-5">
      <div>
        <Kicker>Повестка</Kicker>
        <SlideTitle>Шесть блоков. Без деклараций о «цифровизации»</SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <ol className="relative flex flex-col justify-center gap-0 pl-2">
          <span className="agenda-rail absolute top-3 bottom-3 left-[1.15rem] md:left-[1.35rem]" />
          {AGENDA.map((item) => (
            <li key={item.t} className="relative flex items-start gap-4 py-2.5 md:py-3">
              <span className="agenda-node relative z-10 mt-0.5 flex size-8 shrink-0 items-center justify-center font-mono text-[11px] text-gold md:size-9 md:text-xs">
                {item.t}
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm leading-snug font-medium text-paper md:text-base">
                  {item.label}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {item.min}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <ScenePanel
          src="/visuals/vis-mesh.webp"
          alt="Сеть площадок Холдинга как единый цифровой контур"
          caption="Холдинг как связанный контур, а не набор изолированных систем"
          className="min-h-[220px] lg:min-h-0"
        />
      </div>
    </SlideShell>
  );
}

export function WhySlide() {
  return (
    <SlideShell className="gap-4">
      <div className="max-w-3xl">
        <Kicker>Конкурентное положение</Kicker>
        <SlideTitle>Архитектура определяет, видит ли Холдинг факт вовремя</SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-2">
        <article className="glass-deep hud-corners flex flex-col justify-between rounded-3xl p-5 md:p-6">
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Сохраняется
          </p>
          <ul className="mt-6 space-y-3 text-sm text-paper/90 md:text-[15px]">
            <li>Установленная мощность и структура активов</li>
            <li>Топливный баланс, коэффициент полезного действия, тариф, капитальное строительство</li>
            <li>Дисциплина эксплуатации и промышленная безопасность</li>
          </ul>
        </article>
        <article className="glass-deep hud-corners glow-gold flex flex-col justify-between rounded-3xl border-gold/45 p-5 md:p-6">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Второй контур конкуренции
          </p>
          <ul className="mt-6 space-y-3 text-sm text-paper md:text-[15px]">
            <li>Готовность блока и дефект — до отказа оборудования</li>
            <li>Небаланс на оптовом рынке электроэнергии, касса компаний, воздействие на программно-технический комплекс</li>
            <li>Новый сервис для сбыта или компаний — в сроки недель, не лет</li>
          </ul>
        </article>
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-paper/80 md:text-[15px]">
        Архитектура — система правил соединения систем и данных. Она либо даёт
        единую операционную картину, либо закрепляет изолированные контуры учёта.
      </p>
    </SlideShell>
  );
}

const LANDSCAPE = [
  {
    h: "Разнородный корпоративный ландшафт",
    p: "Компании Холдинга, несколько поколений корпоративных и отраслевых комплексов. Один актив — несколько наименований.",
  },
  {
    h: "Контур станции, длительный жизненный цикл",
    p: "Системы диспетчерского управления и сбора данных; распределённые системы управления; программно-технические комплексы; релейная защита; коммерческий учёт электроэнергии; оперативная информация; архивы технологических параметров.",
  },
  {
    h: "Разрывы как «интеграция»",
    p: "Файлы, электронная почта, электронные таблицы в роли шины. Локальные копии данных вне контролируемого периметра.",
  },
  {
    h: "Нормативные ограничения",
    p: "Критическая информационная инфраструктура, Федеральный закон № 187-ФЗ, требования ФСТЭК России и Ростехнадзора, технологическая независимость — условия проектирования.",
  },
];

export function RealitySlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div>
        <Kicker>Исходные условия</Kicker>
        <SlideTitle>Технологический контур задаёт рамку. Унаследованное — разрывы обмена</SlideTitle>
      </div>
      <figure className="scene-panel hud-corners relative min-h-0 flex-1 overflow-hidden rounded-3xl">
        <Image
          src="/visuals/vis-gateway.webp"
          alt="Шлюз между технологическим контуром и цифровым двойником"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/35 via-black/20 to-black/50" />
        <div className="relative grid h-full min-h-[280px] grid-cols-1 gap-3 p-3 sm:grid-cols-2 sm:p-4 lg:p-5">
          {LANDSCAPE.map((card, i) => (
            <article
              key={card.h}
              className={cn(
                "glass-deep hud-corners max-w-xl rounded-2xl p-3.5 lg:p-4",
                i % 2 === 1 && "sm:justify-self-end",
                i < 2 ? "self-start" : "self-end"
              )}
            >
              <p className="text-sm font-medium text-paper md:text-[15px]">{card.h}</p>
              <p className="mt-2 text-xs leading-relaxed text-paper/75 md:text-sm">
                {card.p}
              </p>
            </article>
          ))}
        </div>
      </figure>
    </SlideShell>
  );
}

const DOMAINS = [
  {
    n: "01",
    t: "Бизнес-архитектура",
    d: "Способности Холдинга: генерация, теплоснабжение, сети, сбыт, надёжность, казначейство. Не организационная схема.",
  },
  {
    n: "02",
    t: "Прикладная",
    d: "Доменные системы и композируемые сервисы. Не единая система планирования ресурсов предприятия на все компании, а стыковка по правилам.",
  },
  {
    n: "03",
    t: "Данные",
    d: "Хранилище, портал, управление данными. Мастер актива, точки учёта, контрагента. Владелец, регламент качества, потребитель.",
  },
  {
    n: "04",
    t: "Интеграция",
    d: "Программные интерфейсы приложений и события вместо соединений «точка — точка». Цех: промышленный стандарт обмена. Офис: шлюз интерфейсов.",
  },
  {
    n: "05",
    t: "Платформа",
    d: "Гибрид: вычисления на площадке, частное или суверенное облако. Периметр технологического контура соблюдён.",
  },
  {
    n: "06",
    t: "Безопасность",
    d: "Зонная модель сегментации промышленного контура. Принцип нулевого доверия в корпоративном контуре.",
  },
  {
    n: "07",
    t: "Операционная модель",
    d: "Владелец домена, право подключения системы, источник финансирования платформы и хранилища.",
  },
];

export function DomainsSlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <Kicker>Состав</Kicker>
          <SlideTitle>Семь доменов. Ни один не является необязательным</SlideTitle>
        </div>
        <p className="max-w-sm font-mono text-[11px] tracking-wide text-cyan uppercase lg:text-right">
          Архитектура — правила, по которым системы имеют право соединяться
        </p>
      </div>
      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <ScenePanel
          src="/visuals/vis-domains.webp"
          alt="Семь доменов архитектуры как световые столбы"
          caption="Семь контуров одной конструкции"
          className="hidden min-h-[240px] lg:block"
        />
        <ol className="grid min-h-0 grid-cols-1 gap-2 sm:grid-cols-2">
          {DOMAINS.map((item) => (
            <li key={item.n} className="glass-deep hud-corners rounded-2xl p-3 md:p-3.5">
              <p className="font-mono text-[11px] text-gold">{item.n}</p>
              <p className="mt-1 text-sm font-medium text-paper">{item.t}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-paper/70 md:text-[13px]">
                {item.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </SlideShell>
  );
}

export function TargetSlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <Kicker>Целевая архитектура</Kicker>
          <SlideTitle className="max-w-[22ch]">
            Управляемый гибрид. Слои и их содержание
          </SlideTitle>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-paper/75 md:text-right md:text-sm">
          Технологический контур — по промышленному регламенту. Корпоративный — по
          продуктовому. Связь — только через архитектуру.
        </p>
      </div>
      <ArchitectureStack />
    </SlideShell>
  );
}

export function DataSlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div>
        <Kicker>Корпоративные данные</Kicker>
        <SlideTitle>
          Единое место факта. Не смешение информационного и операционного контуров
        </SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="grid min-h-0 gap-2">
          <ScenePanel
            src="/visuals/vis-data-core.webp"
            alt="Корпоративное хранилище данных как ядро согласованных витрин"
            caption="Согласованная копия факта после шлюза"
            className="min-h-[140px] lg:min-h-0"
          />
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {[
              {
                n: "01",
                tone: "text-gold",
                border: "border-gold/35 glow-gold",
                t: "Корпоративное хранилище данных",
                d: "Согласованные витрины: актив, точка учёта, контрагент, сети, финансы, надёжность. Историческая и аналитическая основа решений.",
              },
              {
                n: "02",
                tone: "text-cyan",
                border: "border-cyan/35 glow-cyan",
                t: "Портал данных",
                d: "Контролируемый доступ к каталогу, семантическому слою и сертифицированным наборам. Самообслуживание без локальных копий.",
              },
              {
                n: "03",
                tone: "text-violet",
                border: "border-violet/35 glow-violet",
                t: "Управление данными",
                d: "Политики, качество, мастер-данные, владельцы, классификация, происхождение, права доступа, в том числе для объектов критической информационной инфраструктуры.",
              },
            ].map((item) => (
              <article
                key={item.n}
                className={cn("glass-deep hud-corners rounded-2xl p-3 md:p-3.5", item.border)}
              >
                <p className={cn("font-mono text-[11px]", item.tone)}>{item.n}</p>
                <p className="mt-1 text-sm font-medium text-paper">{item.t}</p>
                <p className="mt-1.5 hidden text-xs leading-relaxed text-paper/70 lg:block">
                  {item.d}
                </p>
              </article>
            ))}
          </div>
        </div>
        <Tile className="flex min-h-[200px] flex-col bg-black/25">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Зачем собирать в одном контуре
          </p>
          <div className="min-h-0 flex-1">
            <DataConstellation />
          </div>
          <p className="text-xs leading-relaxed text-paper/75 md:text-sm">
            Решение Холдинга пересекает процессы. Пока данные остаются только в
            системах-источниках, каждая функция оперирует собственной версией
            факта. Хранилище — согласованная копия после шлюза. «Архив процесса» —
            архив технологических параметров производства.
          </p>
        </Tile>
      </div>
    </SlideShell>
  );
}

const TRENDS = [
  {
    t: "Сближение информационного и операционного контуров",
    d: "Общие данные при сохранении сегментации сетей.",
  },
  {
    t: "Единое пространство имён производства",
    d: "Общий язык цеха и офиса; промышленный стандарт обмена данными.",
  },
  {
    t: "Аналитическое хранилище смешанного типа",
    d: "Объединяет свойства озера сырых данных и корпоративного склада.",
  },
  {
    t: "Цифровой двойник актива",
    d: "Контур надёжности, а не демонстрационная модель.",
  },
  {
    t: "Промышленный искусственный интеллект",
    d: "Режим, прогноз, аномалия, документы — на подготовленных данных.",
  },
  {
    t: "Генеративный искусственный интеллект",
    d: "Документы и сборка минимально жизнеспособного продукта бизнес-пользователем.",
  },
  {
    t: "Платформенная инженерия",
    d: "Стандарт и платформа для компаний вместо нового стека в каждом проекте.",
  },
  {
    t: "Нулевое доверие и вычисления на площадке",
    d: "Проверка доступа в корпоративном контуре; данные, которые не покидают периметр, обрабатываются на объекте.",
  },
];

export function TrendsSlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div>
        <Kicker>Тренды и технологии</Kicker>
        <SlideTitle>Оценить ценность. Допустить отрицательный пилот. Затем инвестировать</SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid min-h-0 gap-3">
          <ScenePanel
            src="/visuals/vis-twin.webp"
            alt="Цифровой двойник турбины в машинном зале"
            caption="Цифровой двойник — контур надёжности, не витрина"
            className="min-h-[160px] lg:min-h-0"
          />
          <ScenePanel
            src="/visuals/vis-ai-portal.webp"
            alt="Маркетплейс сервисов искусственного интеллекта"
            caption="Сервисы искусственного интеллекта — только на подготовленных данных"
            className="hidden min-h-[120px] sm:block lg:min-h-0"
          />
        </div>
        <div className="flex min-h-0 flex-col">
          <ul className="grid min-h-0 flex-1 grid-cols-1 gap-1.5 sm:grid-cols-2">
            {TRENDS.map((item, i) => (
              <li key={item.t} className="border-l border-cyan/35 py-1 pl-3">
                <p className="font-mono text-[10px] text-cyan">0{i + 1}</p>
                <p className="text-[13px] leading-snug font-medium text-paper">{item.t}</p>
                <p className="mt-0.5 text-[11px] leading-relaxed text-paper/65">{item.d}</p>
              </li>
            ))}
          </ul>
          <ol className="mt-3 grid grid-cols-2 gap-2 md:grid-cols-4">
            {[
              { n: "1", t: "Фиксация", d: "Технология и процесс, к которому она относится." },
              { n: "2", t: "Гипотеза ценности", d: "Прикладной эффект для Холдинга, измеримый показатель." },
              { n: "3", t: "Ограниченный пилот", d: "Отрицательный результат — штатный исход, не сбой программы." },
              { n: "4", t: "Решение", d: "Масштабировать, доработать или прекратить инвестирование." },
            ].map((step) => (
              <li key={step.n} className="glass-deep rounded-xl border-gold/25 p-2.5">
                <p className="font-mono text-xs text-gold">{step.n}</p>
                <p className="mt-1 text-xs font-medium text-paper">{step.t}</p>
                <p className="mt-1 hidden text-[11px] text-paper/65 md:block">{step.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </SlideShell>
  );
}

export function RequirementsSlide() {
  return (
    <SlideShell className="gap-4">
      <div>
        <Kicker>Требования</Kicker>
        <SlideTitle>Три уровня. Необходимы все, иначе либо медленно, либо рискованно</SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-3 md:grid-cols-3">
        <article className="req-ring glass-deep hud-corners flex flex-col rounded-3xl p-5 text-violet">
          <span className="req-orbit" aria-hidden />
          <p className="font-mono text-[11px] tracking-widest text-violet uppercase">
            Обязательно
          </p>
          <p className="mt-2 text-lg font-medium text-paper">Право производить</p>
          <ul className="mt-auto space-y-2 pt-6 text-sm text-paper/80">
            <li>Непрерывность технологического процесса</li>
            <li>Сегментация информационного и операционного контуров, критическая информационная инфраструктура</li>
            <li>Управляемые изменения, журнал</li>
            <li>Киберустойчивость и восстановление</li>
          </ul>
        </article>
        <article className="req-ring glass-deep hud-corners flex flex-col rounded-3xl p-5 text-cyan">
          <span className="req-orbit" aria-hidden />
          <p className="font-mono text-[11px] tracking-widest text-cyan uppercase">
            Необходимо
          </p>
          <p className="mt-2 text-lg font-medium text-paper">Эффективность изменений</p>
          <ul className="mt-auto space-y-2 pt-6 text-sm text-paper/80">
            <li>Единый идентификатор актива и точки учёта</li>
            <li>Изменение за недели, не годы</li>
            <li>Наблюдаемость: источник сбоя и ответственность</li>
            <li>Снижение зависимости от одного поставщика</li>
          </ul>
        </article>
        <article className="req-ring glass-deep hud-corners glow-gold flex flex-col rounded-3xl border-gold/40 p-5 text-gold">
          <span className="req-orbit" aria-hidden />
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Преимущество
          </p>
          <p className="mt-2 text-lg font-medium text-paper">Опережение сопоставимых игроков</p>
          <ul className="mt-auto space-y-2 pt-6 text-sm text-paper/85">
            <li>Единая операционная картина Холдинга</li>
            <li>Решения ближе к реальному времени</li>
            <li>Скорость сервисов для сетей, сбыта и компаний</li>
            <li>Стоимость владения ниже сопоставимого уровня</li>
          </ul>
        </article>
      </div>
    </SlideShell>
  );
}

export function PeopleSlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div className="max-w-4xl">
        <Kicker>Смещение ролей</Kicker>
        <SlideTitle>
          Бизнес собирает пилотный продукт. Информационные технологии обеспечивают глубину и безопасность
        </SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-2">
        <article className="glass-deep hud-corners glow-cyan relative overflow-hidden rounded-3xl p-5 md:p-6">
          <p className="font-mono text-[11px] tracking-widest text-cyan uppercase">
            Бизнес-пользователь
          </p>
          <p className="mt-4 text-sm leading-relaxed text-paper md:text-[15px]">
            На портале данных, портале искусственного интеллекта и маркетплейсе
            сервисов, с применением программных интерфейсов и протокола контекста
            модели, самостоятельно формирует минимально жизнеспособный продукт:
            витрину, прототип процесса, аналитический контур, пилот сервиса.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-paper/70 md:text-sm">
            Очередь «техническое задание — разработка информационной системой
            целиком» сокращается. Ответственность за формулировку ценности и
            проверку гипотезы переходит к владельцу процесса.
          </p>
        </article>
        <article className="glass-deep hud-corners glow-gold relative overflow-hidden rounded-3xl border-gold/40 p-5 md:p-6">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Информационные технологии
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/90 md:text-[15px]">
            <li>Платформа, качество данных, мастер-данные, хранилище</li>
            <li>Сложные интеграции, включая технологический контур</li>
            <li>Требования информационной безопасности и режим критической информационной инфраструктуры</li>
            <li>Идентификация, привилегированный доступ, наблюдаемость</li>
            <li>Перевод прошедшего проверку продукта в промышленную эксплуатацию</li>
            <li>Отказ в подключении систем в обход стандарта</li>
          </ul>
        </article>
      </div>
      <p className="text-sm text-paper/75 md:text-[15px]">
        Службы автоматизированных систем управления технологическими процессами —
        соавторы архитектуры. Информационная безопасность встраивается в конвейер
        изменений, а не ограничивается финальным согласованием.
      </p>
    </SlideShell>
  );
}

const STAGES = [
  { n: "0", t: "Старт", d: "Инвентаризация информационного и операционного ландшафта, карта способностей, совет с правом вето, мораторий на соединения «точка — точка»." },
  { n: "1", t: "Связность", d: "Управление идентификацией; интеграционный слой; буферная зона операционных технологий; каталог программных интерфейсов." },
  { n: "2", t: "Данные", d: "Мастер-данные, корпоративное хранилище, портал данных, управление данными, копия архива технологических параметров после шлюза." },
  { n: "3", t: "Платформа поставки", d: "Типовые контуры, непрерывная поставка изменений, внутренняя платформа как сервис." },
  { n: "4", t: "Домены", d: "Постепенное замещение по ценности: надёжность и техническое обслуживание, сети, казначейство, сбыт." },
  { n: "5", t: "Искусственный интеллект", d: "Портал и маркетплейс сервисов — только на подготовленных потоках хранилища." },
  { n: "6", t: "Модель", d: "Продукт вместо проекта. Владельцы доменов и данных. Платформа как внутренний сервис." },
];

export function RoadmapSlide() {
  return (
    <SlideShell className="gap-4">
      <div>
        <Kicker>Этапы перехода</Kicker>
        <SlideTitle>Последовательность, которая не останавливает станции</SlideTitle>
      </div>
      <div className="relative hidden md:block">
        <div className="roadmap-line" />
        <ol className="relative grid grid-cols-7 gap-2">
          {STAGES.map((item) => (
            <li key={item.n} className="flex flex-col items-center text-center">
              <span
                className={cn(
                  "roadmap-node font-mono text-xs",
                  item.n === "2" && "roadmap-node-hot"
                )}
              >
                {item.n}
              </span>
              <p className="mt-3 text-[13px] font-medium text-paper">{item.t}</p>
            </li>
          ))}
        </ol>
      </div>
      <ol className="grid min-h-0 flex-1 grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((item) => (
          <li
            key={item.n}
            className={cn(
              "glass-deep hud-corners rounded-2xl p-3.5",
              item.n === "2" && "border-gold/40 glow-gold"
            )}
          >
            <p className="font-mono text-sm text-gold">{item.n}</p>
            <p className="mt-1 text-sm font-medium text-paper">{item.t}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-paper/70 md:text-[13px]">
              {item.d}
            </p>
          </li>
        ))}
      </ol>
    </SlideShell>
  );
}

const POLICIES = [
  {
    h: "Стратегия цифровой трансформации",
    p: "Целевые способности Холдинга, приоритеты доменов, принципы архитектуры, порядок финансирования платформы и хранилища.",
  },
  {
    h: "Стратегия данных",
    p: "Корпоративное хранилище, портал данных, управление данными, владельцы, качество, классификация, доступ.",
  },
  {
    h: "Стратегия перехода на методологию разработки с применением искусственного интеллекта",
    p: "Кто вправе собирать минимально жизнеспособный продукт, как проверяется гипотеза, как ИТ принимает продукт в промышленную эксплуатацию.",
  },
  {
    h: "Политика информационной безопасности с учётом решений на основе искусственного интеллекта",
    p: "Допустимые модели, контуры данных, журнал обращений, запрет выгрузки технологического контура, оценка поставщиков сервисов.",
  },
  {
    h: "Политика доступа к технологическому контуру",
    p: "Зонная сегментация, шлюзы, однонаправленная передача, привилегированный доступ, промышленный регламент изменений.",
  },
  {
    h: "Архитектурный стандарт и технологическая независимость",
    p: "Правила подключения систем, каталог интерфейсов, допустимый и запрещённый стек, заменяемость компонентов.",
  },
];

export function PrepareSlide() {
  return (
    <SlideShell className="gap-3 md:gap-4">
      <div>
        <Kicker>Подготовка Холдинга</Kicker>
        <SlideTitle>Стратегии и политики — условие перехода, а не приложение к проекту</SlideTitle>
      </div>
      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <ScenePanel
          src="/visuals/vis-policy.webp"
          alt="Стратегии и политики как архитектурный свод правил"
          caption="Свод правил. Не приложение к проекту"
          className="min-h-[180px] lg:min-h-0"
        />
        <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {POLICIES.map((card, i) => (
            <li key={card.h} className="glass-deep hud-corners rounded-2xl p-3.5">
              <p className="font-mono text-[11px] text-gold">0{i + 1}</p>
              <p className="mt-1 text-sm font-medium text-paper md:text-[15px]">{card.h}</p>
              <p className="mt-1.5 text-xs leading-relaxed text-paper/70 md:text-sm">
                {card.p}
              </p>
            </li>
          ))}
        </ol>
      </div>
      <p className="text-xs leading-relaxed text-paper/70 md:text-sm">
        Спонсорская связка: руководитель информационных технологий, руководитель
        информационной безопасности, главный инженер либо операционный директор.
        Архитектурный совет уполномочен остановить интеграцию в обход стандарта.
        Сотрудники назначают владельцев данных и соблюдают зонные правила.
      </p>
    </SlideShell>
  );
}

export function Next90Slide() {
  return (
    <SlideShell className="justify-end gap-5 pb-2 md:pb-4">
      <div className="max-w-3xl">
        <Kicker>Первые решения</Kicker>
        <SlideTitle>Три решения без ожидания завершённой целевой модели</SlideTitle>
      </div>
      <ol className="grid gap-3 md:grid-cols-3">
        {[
          {
            n: "01",
            t: "Совет, мораторий и пакет документов",
            d: "Архитектурный совет. Прекращение нерегламентированных интеграций. Запуск разработки стратегий и политик перехода.",
          },
          {
            n: "02",
            t: "Карта ландшафта и данных",
            d: "Инвентаризация информационного и операционного ландшафта. Карта данных критичных процессов: надёжность, сети, финансы, безопасность.",
          },
          {
            n: "03",
            t: "Пилот хранилища и порталов",
            d: "Один домен и один актив: корпоративное хранилище, портал данных, портал искусственного интеллекта, проверка гипотезы ценности.",
          },
        ].map((item) => (
          <li key={item.n} className="glass-deep hud-corners rounded-3xl border-cyan/30 p-5">
            <p className="font-mono text-cyan">{item.n}</p>
            <p className="mt-3 text-base font-medium text-paper">{item.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-paper/75">{item.d}</p>
          </li>
        ))}
      </ol>
      <p className="max-w-3xl text-sm leading-relaxed text-paper md:text-lg">
        Унаследованные системы сохраняют функцию. Архитектура обеспечивает
        контролируемый переход данных и решений в целевой контур.
      </p>
    </SlideShell>
  );
}
