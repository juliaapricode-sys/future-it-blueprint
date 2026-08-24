import { Kicker, SlideShell, SlideTitle, Tile } from "@/components/deck/SlideChrome";
import { TargetArchitecture } from "@/components/diagrams/TargetArchitecture";
import { Badge } from "@/components/ui/badge";

export function TitleSlide() {
  return (
    <SlideShell className="justify-end pb-4 md:justify-center md:pb-0">
      <div className="busbar w-24 md:w-32" />
      <Kicker>Промышленный энергетический холдинг · закрытый доклад</Kicker>
      <h1 className="font-heading max-w-[16ch] text-[2.1rem] leading-[1.08] font-medium tracking-tight text-paper sm:text-5xl md:text-6xl lg:text-[4.15rem]">
        Цифровая архитектура современного холдинга
      </h1>
      <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
        Как не сломать технологический контур — и при этом выиграть в скорости
        решений. Пятнадцать минут для тех, кто держит станции, деньги, данные и
        безопасность.
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        <Badge variant="secondary">15 минут</Badge>
        <Badge variant="outline">IT + OT</Badge>
        <Badge variant="outline">Легаси как данность</Badge>
        <Badge variant="outline">КИИ · импортонезависимость</Badge>
      </div>
    </SlideShell>
  );
}

const AGENDA = [
  { t: "01", label: "Зачем это холдингу, а не «ИТ-моде»", min: "1 мин" },
  { t: "02", label: "Что включает современная архитектура", min: "2 мин" },
  { t: "03", label: "Тренды, которые нельзя проспать", min: "2 мин" },
  { t: "04", label: "Требования: не потерять и купить преимущество", min: "2 мин" },
  { t: "05", label: "Целевая картина и принципы", min: "4 мин" },
  { t: "06", label: "Этапы, подготовка холдинга, люди", min: "4 мин" },
];

export function AgendaSlide() {
  return (
    <SlideShell>
      <Kicker>Повестка</Kicker>
      <SlideTitle>Шесть вопросов — и ни слова про лозунги</SlideTitle>
      <ol className="grid gap-2 md:grid-cols-2 md:gap-3">
        {AGENDA.map((item) => (
          <li key={item.t}>
            <Tile className="flex items-start gap-3">
              <span className="font-mono text-sm text-copper">{item.t}</span>
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
      <Kicker>Конкурентное преимущество</Kicker>
      <SlideTitle>Кто видит первым — тот управляет. Остальные объясняют факт</SlideTitle>
      <div className="grid gap-3 md:grid-cols-2">
        <Tile>
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
            Это никуда не делось
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper/90 md:text-base">
            <li>Установленная мощность и структура активов</li>
            <li>Топливо, КПД, тариф, капстрой</li>
            <li>Дисциплина эксплуатации и промышленная безопасность</li>
          </ul>
        </Tile>
        <Tile className="border-copper/35 bg-copper/10">
          <p className="font-mono text-[11px] tracking-widest text-copper uppercase">
            Второй контур конкуренции
          </p>
          <ul className="mt-3 space-y-2 text-sm text-paper md:text-base">
            <li>Готовность блока и дефект — до отказа, а не после акта</li>
            <li>Небаланс на рынке, касса ДЗО, атака на ПТК — в моменте</li>
            <li>Новый сервис для сбыта или ДЗО — неделями, не годами</li>
          </ul>
        </Tile>
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        Архитектура — не схема серверов. Это устройство холдинга, которое либо
        даёт единую картину и право меняться, либо консервирует острова систем.
      </p>
    </SlideShell>
  );
}

export function RealitySlide() {
  return (
    <SlideShell>
      <Kicker>Исходная точка</Kicker>
      <SlideTitle>Технологический контур — сердце. Легаси — швы между системами</SlideTitle>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            h: "ДЗО и корпоративный зоопарк",
            p: "1С, SAP, самопис, отраслевые комплексы разных поколений. Один актив — три имени.",
          },
          {
            h: "Контур станции 15–25 лет",
            p: "SCADA, DCS, ПТК, РЗА, АИИС КУЭ, ОИК, историки. Это нельзя «переписать в микросервисы».",
          },
          {
            h: "Швы как интеграция",
            p: "Файлы, почта, Excel как шина. Теневые облака — потому что иначе не посчитать.",
          },
          {
            h: "Рамки, которые не обойти",
            p: "КИИ, 187-ФЗ, ФСТЭК, Ростехнадзор, импортозамещение. Иначе архитектура академическая.",
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
  { n: "01", t: "Бизнес", d: "Способности холдинга: генерация, тепло, сбыт, рынок, надёжность, казна — не оргсхема." },
  { n: "02", t: "Прикладная", d: "Доменные системы плюс композируемые сервисы. Не одна ERP — стыковка по правилам." },
  { n: "03", t: "Данные", d: "Продукты данных. Мастер актива, точки учёта, контрагента. Владелец, SLA, потребитель." },
  { n: "04", t: "Интеграция", d: "API и события вместо точка-точка. Цех — OPC UA / UNS. Офис — API-шлюз." },
  { n: "05", t: "Платформа", d: "Гибрид: edge на площадке, частное или суверенное облако. Периметр соблюдён." },
  { n: "06", t: "Безопасность", d: "Зоны Purdue + Zero Trust в IT. Сближаем данные, не сети." },
  { n: "07", t: "Операционная модель", d: "Кто владеет доменом, кто подключает систему, кто платит за платформу." },
];

export function DomainsSlide() {
  return (
    <SlideShell>
      <Kicker>Состав</Kicker>
      <SlideTitle>Семь доменов. Ни один не опционален</SlideTitle>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {DOMAINS.map((item) => (
          <Tile key={item.n} className={item.n === "07" ? "sm:col-span-2 lg:col-span-1" : ""}>
            <p className="font-mono text-[11px] text-copper">{item.n}</p>
            <p className="mt-1 text-sm font-medium text-paper md:text-base">{item.t}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {item.d}
            </p>
          </Tile>
        ))}
      </div>
      <p className="font-mono text-[11px] tracking-wide text-teal uppercase md:text-xs">
        Архитектура = правила, по которым системы имеют право соединяться
      </p>
    </SlideShell>
  );
}

const TRENDS = [
  { t: "IT/OT без смешения зон", d: "Общие данные и процессы. Сети — сегментированы." },
  { t: "Единое пространство имён", d: "Промышленная шина, OPC UA, язык цеха и офиса." },
  { t: "Продукты данных", d: "«Актив», «рынок», «тепло» — с владельцем, не «озеро всего»." },
  { t: "Двойник и предиктивный ТОиР", d: "Контур надёжности, а не 3D-макет для выставки." },
  { t: "Промышленный ИИ", d: "Режим, прогноз, аномалия, документы — не чат в пресс-релизе." },
  { t: "Platform engineering", d: "ДЗО получают платформу и стандарт, а не новый стек каждый раз." },
  { t: "Импортонезависимость", d: "Заменяемость компонента, а не ночная смена логотипа." },
  { t: "Отчётность из систем", d: "Рынок, СО ЕЭС, ФНС, ESG — без аврального Excel." },
];

export function TrendsSlide() {
  return (
    <SlideShell>
      <Kicker>Тренды, которые целевая архитектура обязана учесть</Kicker>
      <SlideTitle>Не мода. Условия, при которых холдинг остаётся быстрым</SlideTitle>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {TRENDS.map((item, i) => (
          <Tile key={item.t}>
            <p className="font-mono text-[11px] text-teal">0{i + 1}</p>
            <p className="mt-1 text-sm font-medium text-paper">{item.t}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.d}</p>
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
      <SlideTitle>Три полки. Нужны все, иначе либо медленно, либо опасно</SlideTitle>
      <div className="grid gap-3 md:grid-cols-3">
        <Tile>
          <p className="font-mono text-[11px] tracking-widest text-ot uppercase">Must</p>
          <p className="mt-1 text-sm font-medium text-paper">Не потерять право производить</p>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground md:text-sm">
            <li>Непрерывность техпроцесса</li>
            <li>Сегментация IT/OT, контур КИИ</li>
            <li>Управляемые изменения, журнал</li>
            <li>Киберустойчивость и восстановление</li>
          </ul>
        </Tile>
        <Tile>
          <p className="font-mono text-[11px] tracking-widest text-teal uppercase">Should</p>
          <p className="mt-1 text-sm font-medium text-paper">Не проиграть в эффективности</p>
          <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground md:text-sm">
            <li>Единый идентификатор актива и точки учёта</li>
            <li>Изменение за недели, не годы</li>
            <li>Наблюдаемость: что сломалось и у кого</li>
            <li>Снижение vendor lock-in</li>
          </ul>
        </Tile>
        <Tile className="border-copper/40 bg-copper/10">
          <p className="font-mono text-[11px] tracking-widest text-copper uppercase">Win</p>
          <p className="mt-1 text-sm font-medium text-paper">Купить преимущество</p>
          <ul className="mt-3 space-y-1.5 text-xs text-paper/85 md:text-sm">
            <li>Единая операционная картина холдинга</li>
            <li>Решения ближе к реальному времени</li>
            <li>Скорость новых сервисов для рынка и ДЗО</li>
            <li>Стоимость владения ниже сопоставимых игроков</li>
          </ul>
        </Tile>
      </div>
    </SlideShell>
  );
}

export function TargetSlide() {
  return (
    <SlideShell className="gap-4 md:gap-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <Kicker>Целевая архитектура</Kicker>
          <SlideTitle>Управляемый гибрид. Не «всё в облаке»</SlideTitle>
        </div>
        <p className="max-w-sm text-xs leading-relaxed text-muted-foreground md:text-right md:text-sm">
          Технологический контур — по промышленному регламенту. Корпоративный — по
          продуктовому. Связь — только через архитектуру.
        </p>
      </div>
      <TargetArchitecture />
    </SlideShell>
  );
}

const PRINCIPLES = [
  { n: "1", t: "Не ломаем турбину", d: "Ядро L0–L2 неприкасаемо спринтом портала. Изменения — по промышленному регламенту." },
  { n: "2", t: "Сначала клей, потом замена", d: "Интеграционный слой и идентификация раньше, чем «новая ERP на всех»." },
  { n: "3", t: "Данные — продукт", d: "Набор данных без владельца и SLA в целевой модели не существует." },
  { n: "4", t: "Безопасность — зона", d: "Purdue, шлюзы, Zero Trust. Антивирус на сервере — не архитектура." },
  { n: "5", t: "Buy / build / platform", d: "Покупаем, строим и выносим на платформу осознанно, а не по привычке вендора." },
  { n: "6", t: "Двойной ход замещения", d: "Импортозамещение — параллельный контур, не ночь переключения. В обход шины — нельзя." },
];

export function PrinciplesSlide() {
  return (
    <SlideShell>
      <Kicker>Принципы цели</Kicker>
      <SlideTitle>Правила, которые нельзя нарушать даже «для пилота»</SlideTitle>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {PRINCIPLES.map((item) => (
          <Tile key={item.n}>
            <p className="font-mono text-copper">{item.n}</p>
            <p className="mt-1 text-sm font-medium text-paper md:text-base">{item.t}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {item.d}
            </p>
          </Tile>
        ))}
      </div>
    </SlideShell>
  );
}

const STAGES = [
  { n: "0", t: "90 дней", d: "Инвентаризация IT+OT, карта способностей, совет с правом вето, мораторий на точка-точка." },
  { n: "1", t: "Связность", d: "IAM, интеграционный слой, OT DMZ, каталог API и событий." },
  { n: "2", t: "Данные", d: "MDM актива и точки учёта, каталог, качество, мост историк → платформа." },
  { n: "3", t: "Платформа поставки", d: "Типовые контуры, CI/CD, внутренний PaaS — ДЗО не изобретают инфраструктуру." },
  { n: "4", t: "Домены", d: "Strangler по ценности: надёжность/ТОиР, рынок, казна, сбыт — не «самая старая система»." },
  { n: "5", t: "Промышленный ИИ", d: "Только на очищенных потоках. Иначе автоматизируем хаос." },
  { n: "6", t: "Модель", d: "Продукт вместо проекта. Владельцы доменов. Платформа как внутренний сервис." },
];

export function RoadmapSlide() {
  return (
    <SlideShell>
      <Kicker>Этапы перехода</Kicker>
      <SlideTitle>Не пятилетка «снести всё». Последовательность, которая не останавливает станции</SlideTitle>
      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((item) => (
          <Tile key={item.n} className={item.n === "0" ? "border-copper/40 bg-copper/10" : ""}>
            <p className="font-mono text-sm text-copper">{item.n}</p>
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
      <Kicker>Подготовка холдинга</Kicker>
      <SlideTitle>Архитектура не взлетает из ИТ-департамента в одиночку</SlideTitle>
      <div className="grid gap-3 md:grid-cols-2">
        {[
          {
            h: "Спонсорская связка",
            p: "CIO + CISO + главный инженер / COO. Иначе либо слепо, либо небезопасно, либо не про производство.",
          },
          {
            h: "Совет с правом вето",
            p: "Архитектурный совет останавливает интеграции в обход стандарта. Без вето это кружок по интересам.",
          },
          {
            h: "Деньги и вендоры",
            p: "Платформа — из центра. Домены — за ценность. Политика: обязательно / допустимо / запрещено.",
          },
          {
            h: "Пилот, не приказ",
            p: "Живая карта КИИ и зон. Один-два актива. Честный язык: надёжность и скорость, не мода.",
          },
        ].map((card) => (
          <Tile key={card.h}>
            <p className="text-sm font-medium text-paper md:text-base">{card.h}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.p}</p>
          </Tile>
        ))}
      </div>
    </SlideShell>
  );
}

const ROLES = [
  { r: "Руководители", d: "Задача как способность и ограничение: «видеть готовность блока к утру», а не «внедрить модуль X»." },
  { r: "Владельцы процессов", d: "Данные процесса — часть процесса. Нет владельца данных — нет процесса в целевой модели." },
  { r: "ИТ", d: "Продуктовые команды + платформа. Архитектор входит до контракта, а не рисует as-is после акта." },
  { r: "АСУ ТП и главные инженеры", d: "Соавторы архитектуры. Без вас корпоративный контур либо слеп, либо опасен." },
  { r: "ИБ", d: "В конвейере изменений. Шлагбаум в конце плодит теневой ИТ." },
  { r: "Каждый сотрудник", d: "Гигиена зон. Нельзя выгрузить контур в «удобный облачный диск». Это лицензия холдинга на работу." },
];

export function PeopleSlide() {
  return (
    <SlideShell>
      <Kicker>Новая парадигма</Kicker>
      <SlideTitle>Мы больше не заказываем системы. Мы развиваем способности холдинга</SlideTitle>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {ROLES.map((item) => (
          <Tile key={item.r}>
            <p className="text-sm font-medium text-copper md:text-base">{item.r}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
              {item.d}
            </p>
          </Tile>
        ))}
      </div>
    </SlideShell>
  );
}

export function Next90Slide() {
  return (
    <SlideShell>
      <Kicker>Ближайшие 90 дней</Kicker>
      <SlideTitle>Три решения, не дожидаясь идеальной модели</SlideTitle>
      <div className="grid gap-3 md:grid-cols-3">
        {[
          { n: "01", t: "Совет и мораторий", d: "Архитектурный совет. Остановить хаотичные интеграции точка-точка." },
          { n: "02", t: "Карта ландшафта", d: "Инвентаризация IT+OT и данных критичных процессов: надёжность, рынок, деньги, безопасность." },
          { n: "03", t: "Маяк и актив", d: "Один домен — лучше ТОиР и готовность. Один пилотный актив, где ценность считается в аварийности." },
        ].map((item) => (
          <Tile key={item.n} className="border-copper/30">
            <p className="font-mono text-copper">{item.n}</p>
            <p className="mt-2 text-base font-medium text-paper">{item.t}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.d}</p>
          </Tile>
        ))}
      </div>
      <p className="max-w-3xl text-sm leading-relaxed text-paper/90 md:text-lg">
        Мы не отменяем прошлое. Мы даём ему безопасный выход в будущее — и холдингу
        право меняться быстрее рынка и регулятора.
      </p>
    </SlideShell>
  );
}
