import {
  Kicker,
  SlideShell,
  SlideTitle,
  Tile,
} from "@/components/deck/SlideChrome";
import { DataConstellation } from "@/components/diagrams/DataConstellation";
import { ArchitectureStack } from "@/components/diagrams/TargetArchitecture";
import { Badge } from "@/components/ui/badge";

export function TitleSlide() {
  return (
    <SlideShell className="justify-end pb-4 md:justify-center md:pb-0">
      <div className="busbar w-28 md:w-40" />
      <Kicker>Промышленный энергетический холдинг · внутренний доклад</Kicker>
      <h1 className="font-heading max-w-[16ch] text-[2rem] leading-[1.08] font-medium tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-[3.9rem]">
        Цифровая архитектура современного холдинга
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Целевое устройство информационных и операционных контуров: непрерывность
        технологического процесса и скорость обоснованного решения на
        достоверных данных.
      </p>
      <div className="flex flex-wrap gap-2 pt-1">
        <Badge variant="secondary">15 минут</Badge>
        <Badge variant="outline">Информационные и операционные технологии</Badge>
        <Badge variant="outline">Хранилище · портал · управление данными</Badge>
        <Badge variant="outline">Критическая информационная инфраструктура</Badge>
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
    <SlideShell>
      <Kicker>Повестка</Kicker>
      <SlideTitle>Шесть блоков. Без деклараций о «цифровизации»</SlideTitle>
      <ol className="grid gap-2 md:grid-cols-2 md:gap-3">
        {AGENDA.map((item) => (
          <li key={item.t}>
            <Tile className="flex items-start gap-3">
              <span className="font-mono text-sm text-gold">{item.t}</span>
              <div className="min-w-0">
                <p className="text-sm leading-snug font-medium text-paper md:text-base">
                  {item.label}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  {item.min}
                </p>
              </div>
            </Tile>
          </li>
        ))}
      </ol>
    </SlideShell>
  );
}

export function WhySlide() {
  return (
    <SlideShell>
      <Kicker>Конкурентное положение</Kicker>
      <SlideTitle>Архитектура определяет, видит ли Холдинг факт вовремя</SlideTitle>
      <div className="grid gap-3 md:grid-cols-2">
        <Tile>
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Сохраняется
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/90 md:text-[15px]">
            <li>Установленная мощность и структура активов</li>
            <li>Топливный баланс, коэффициент полезного действия, тариф, капитальное строительство</li>
            <li>Дисциплина эксплуатации и промышленная безопасность</li>
          </ul>
        </Tile>
        <Tile className="border-gold/40 glow-gold">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Второй контур конкуренции
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper md:text-[15px]">
            <li>Готовность блока и дефект — до отказа оборудования</li>
            <li>Небаланс на оптовом рынке электроэнергии, касса компаний, воздействие на программно-технический комплекс</li>
            <li>Новый сервис для сбыта или компаний — в сроки недель, не лет</li>
          </ul>
        </Tile>
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-[15px]">
        Архитектура — система правил соединения систем и данных. Она либо даёт
        единую операционную картину, либо закрепляет изолированные контуры учёта.
      </p>
    </SlideShell>
  );
}

export function RealitySlide() {
  return (
    <SlideShell>
      <Kicker>Исходные условия</Kicker>
      <SlideTitle>Технологический контур задаёт рамку. Унаследованное — разрывы обмена</SlideTitle>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
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
        ].map((card) => (
          <Tile key={card.h}>
            <p className="text-sm font-medium text-paper md:text-[15px]">{card.h}</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {card.p}
            </p>
          </Tile>
        ))}
      </div>
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
    <SlideShell>
      <Kicker>Состав</Kicker>
      <SlideTitle>Семь доменов. Ни один не является необязательным</SlideTitle>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {DOMAINS.map((item) => (
          <Tile key={item.n}>
            <p className="font-mono text-[11px] text-gold">{item.n}</p>
            <p className="mt-1 text-sm font-medium text-paper md:text-base">{item.t}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {item.d}
            </p>
          </Tile>
        ))}
      </div>
      <p className="font-mono text-[11px] tracking-wide text-cyan uppercase md:text-xs">
        Архитектура — правила, по которым системы имеют право соединяться
      </p>
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
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground md:text-right md:text-sm">
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
    <SlideShell>
      <Kicker>Корпоративные данные</Kicker>
      <SlideTitle>
        Единое место факта. Не смешение информационного и операционного контуров
      </SlideTitle>
      <div className="grid min-h-0 flex-1 gap-3 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
        <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-1">
          <Tile className="border-gold/35 glow-gold">
            <p className="font-mono text-[11px] text-gold">01</p>
            <p className="mt-1 text-sm font-medium text-paper">
              Корпоративное хранилище данных
            </p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              Согласованные витрины: актив, точка учёта, контрагент, сети,
              финансы, надёжность. Историческая и аналитическая основа решений.
            </p>
          </Tile>
          <Tile className="border-cyan/35 glow-cyan">
            <p className="font-mono text-[11px] text-cyan">02</p>
            <p className="mt-1 text-sm font-medium text-paper">Портал данных</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              Контролируемый доступ к каталогу, семантическому слою и
              сертифицированным наборам. Самообслуживание без локальных копий.
            </p>
          </Tile>
          <Tile className="border-violet/35 glow-violet">
            <p className="font-mono text-[11px] text-violet">03</p>
            <p className="mt-1 text-sm font-medium text-paper">Управление данными</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              Политики, качество, мастер-данные, владельцы, классификация,
              происхождение, права доступа, в том числе для объектов критической
              информационной инфраструктуры.
            </p>
          </Tile>
        </div>
        <Tile className="flex min-h-[200px] flex-col">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Зачем собирать в одном контуре
          </p>
          <div className="min-h-0 flex-1">
            <DataConstellation />
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
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
    <SlideShell>
      <Kicker>Тренды и технологии</Kicker>
      <SlideTitle>Оценить ценность. Допустить отрицательный пилот. Затем инвестировать</SlideTitle>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {TRENDS.map((item, i) => (
          <Tile key={item.t}>
            <p className="font-mono text-[11px] text-cyan">0{i + 1}</p>
            <p className="mt-1 text-sm font-medium text-paper">{item.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.d}</p>
          </Tile>
        ))}
      </div>
      <div className="grid gap-2 md:grid-cols-4">
        {[
          { n: "1", t: "Фиксация", d: "Технология и процесс, к которому она относится." },
          { n: "2", t: "Гипотеза ценности", d: "Прикладной эффект для Холдинга, измеримый показатель." },
          { n: "3", t: "Ограниченный пилот", d: "Отрицательный результат — штатный исход, не сбой программы." },
          { n: "4", t: "Решение", d: "Масштабировать, доработать или прекратить инвестирование." },
        ].map((step) => (
          <Tile key={step.n} className="border-gold/25">
            <p className="font-mono text-xs text-gold">{step.n}</p>
            <p className="mt-1 text-sm font-medium text-paper">{step.t}</p>
            <p className="mt-1 text-xs text-muted-foreground">{step.d}</p>
          </Tile>
        ))}
      </div>
    </SlideShell>
  );
}

export function RequirementsSlide() {
  return (
    <SlideShell>
      <Kicker>Требования</Kicker>
      <SlideTitle>Три уровня. Необходимы все, иначе либо медленно, либо рискованно</SlideTitle>
      <div className="grid gap-3 md:grid-cols-3">
        <Tile>
          <p className="font-mono text-[11px] tracking-widest text-violet uppercase">
            Обязательно
          </p>
          <p className="mt-1 text-sm font-medium text-paper">Право производить</p>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground md:text-sm">
            <li>Непрерывность технологического процесса</li>
            <li>Сегментация информационного и операционного контуров, критическая информационная инфраструктура</li>
            <li>Управляемые изменения, журнал</li>
            <li>Киберустойчивость и восстановление</li>
          </ul>
        </Tile>
        <Tile>
          <p className="font-mono text-[11px] tracking-widest text-cyan uppercase">
            Необходимо
          </p>
          <p className="mt-1 text-sm font-medium text-paper">Эффективность изменений</p>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground md:text-sm">
            <li>Единый идентификатор актива и точки учёта</li>
            <li>Изменение за недели, не годы</li>
            <li>Наблюдаемость: источник сбоя и ответственность</li>
            <li>Снижение зависимости от одного поставщика</li>
          </ul>
        </Tile>
        <Tile className="border-gold/40 glow-gold">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Преимущество
          </p>
          <p className="mt-1 text-sm font-medium text-paper">Опережение сопоставимых игроков</p>
          <ul className="mt-3 space-y-1.5 text-xs text-paper/85 md:text-sm">
            <li>Единая операционная картина Холдинга</li>
            <li>Решения ближе к реальному времени</li>
            <li>Скорость сервисов для сетей, сбыта и компаний</li>
            <li>Стоимость владения ниже сопоставимого уровня</li>
          </ul>
        </Tile>
      </div>
    </SlideShell>
  );
}

export function PeopleSlide() {
  return (
    <SlideShell>
      <Kicker>Смещение ролей</Kicker>
      <SlideTitle>
        Бизнес собирает пилотный продукт. Информационные технологии обеспечивают глубину и безопасность
      </SlideTitle>
      <div className="grid gap-3 md:grid-cols-2">
        <Tile className="border-cyan/35 glow-cyan">
          <p className="font-mono text-[11px] tracking-widest text-cyan uppercase">
            Бизнес-пользователь
          </p>
          <p className="mt-2 text-sm leading-relaxed text-paper md:text-[15px]">
            На портале данных, портале искусственного интеллекта и маркетплейсе
            сервисов, с применением программных интерфейсов и протокола контекста
            модели, самостоятельно формирует минимально жизнеспособный продукт:
            витрину, прототип процесса, аналитический контур, пилот сервиса.
          </p>
          <p className="mt-3 text-xs text-muted-foreground md:text-sm">
            Очередь «техническое задание — разработка информационной системой
            целиком» сокращается. Ответственность за формулировку ценности и
            проверку гипотезы переходит к владельцу процесса.
          </p>
        </Tile>
        <Tile className="border-gold/40 glow-gold">
          <p className="font-mono text-[11px] tracking-widest text-gold uppercase">
            Информационные технологии
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/90 md:text-[15px]">
            <li>Платформа, качество данных, мастер-данные, хранилище</li>
            <li>Сложные интеграции, включая технологический контур</li>
            <li>Требования информационной безопасности и режим критической информационной инфраструктуры</li>
            <li>Идентификация, привилегированный доступ, наблюдаемость</li>
            <li>Перевод прошедшего проверку продукта в промышленную эксплуатацию</li>
            <li>Отказ в подключении систем в обход стандарта</li>
          </ul>
        </Tile>
      </div>
      <p className="text-sm text-muted-foreground md:text-[15px]">
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
    <SlideShell>
      <Kicker>Этапы перехода</Kicker>
      <SlideTitle>Последовательность, которая не останавливает станции</SlideTitle>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((item) => (
          <Tile key={item.n} className={item.n === "2" ? "border-gold/40 glow-gold" : ""}>
            <p className="font-mono text-sm text-gold">{item.n}</p>
            <p className="mt-1 text-sm font-medium text-paper">{item.t}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-[13px]">
              {item.d}
            </p>
          </Tile>
        ))}
      </div>
    </SlideShell>
  );
}

export function PrepareSlide() {
  return (
    <SlideShell>
      <Kicker>Подготовка Холдинга</Kicker>
      <SlideTitle>Стратегии и политики — условие перехода, а не приложение к проекту</SlideTitle>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {[
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
        ].map((card) => (
          <Tile key={card.h}>
            <p className="text-sm font-medium text-paper md:text-[15px]">{card.h}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {card.p}
            </p>
          </Tile>
        ))}
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
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
    <SlideShell>
      <Kicker>Первые решения</Kicker>
      <SlideTitle>Три решения без ожидания завершённой целевой модели</SlideTitle>
      <div className="grid gap-3 md:grid-cols-3">
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
          <Tile key={item.n} className="border-cyan/30">
            <p className="font-mono text-cyan">{item.n}</p>
            <p className="mt-2 text-base font-medium text-paper">{item.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
          </Tile>
        ))}
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-paper/90 md:text-lg">
        Унаследованные системы сохраняют функцию. Архитектура обеспечивает
        контролируемый переход данных и решений в целевой контур.
      </p>
    </SlideShell>
  );
}
