import { cn } from "@/lib/utils";

const LAYERS = [
  {
    id: "ch",
    zone: "L7",
    en: "Experience",
    ru: "Каналы и решения",
    tone: "cyan" as const,
    items: [
      "Ситуационный центр",
      "Порталы ДЗО",
      "Мобильные рабочие места",
      "Клиентские сервисы",
    ],
  },
  {
    id: "pr",
    zone: "L6",
    en: "Business products",
    ru: "Холдинговые продукты",
    tone: "cyan" as const,
    items: ["Рынок и трейдинг", "Сбыт и тепло", "Сервисы ДЗО", "Казначейство"],
  },
  {
    id: "app",
    zone: "L5",
    en: "Applications",
    ru: "Корпоративные приложения",
    tone: "cyan" as const,
    items: [
      "ERP — планирование ресурсов",
      "EAM — управление фондами / ТОиР",
      "HR, закупки",
      "ГИС активов",
    ],
  },
  {
    id: "portal",
    zone: "DATA",
    en: "Data Portal",
    ru: "Портал данных: самообслуживание и витрины",
    tone: "gold" as const,
    items: ["Каталог", "Семантический слой", "Сертифицированные наборы", "ИИ-запросы"],
  },
  {
    id: "gov",
    zone: "DATA",
    en: "Data Governance",
    ru: "Управление данными: политики и качество",
    tone: "gold" as const,
    items: ["Владельцы", "MDM — мастер-данные", "Lineage — происхождение", "Доступ и КИИ"],
  },
  {
    id: "cdw",
    zone: "DATA",
    en: "Corporate Data Warehouse",
    ru: "Корпоративное хранилище данных",
    tone: "gold" as const,
    items: ["Единые витрины", "Актив / точка учёта", "Рынок и финансы", "Надёжность"],
  },
  {
    id: "int",
    zone: "L4.5",
    en: "Integration",
    ru: "Интеграция: API и события",
    tone: "violet" as const,
    items: [
      "API Gateway — шлюз интерфейсов",
      "Event bus — шина событий",
      "ETL / ELT",
      "Каталог API",
    ],
  },
  {
    id: "dmz",
    zone: "ШЛЮЗ",
    en: "OT DMZ",
    ru: "Демилитаризованная зона операционных технологий",
    tone: "violet" as const,
    items: [
      "Контролируемые шлюзы",
      "Data diode — однонаправленная передача",
      "Реплика историка",
      "OPC UA",
    ],
  },
  {
    id: "l3",
    zone: "L3",
    en: "Manufacturing",
    ru: "Производственный контур",
    tone: "violet" as const,
    items: ["MES — управление производством", "АСУЭ / ОИК", "Цеховой ТОиР", "LIMS — качество"],
  },
  {
    id: "core",
    zone: "L0–L2",
    en: "Operations core",
    ru: "Технологический контур. Изменения — по промышленному регламенту",
    tone: "violet" as const,
    items: ["Поле · ПЛК · РЗА", "DCS / ПТК", "SCADA / HMI", "Ростехнадзор"],
  },
];

const toneClass: Record<(typeof LAYERS)[number]["tone"], string> = {
  cyan: "border-cyan/35 glow-cyan",
  gold: "border-gold/40 glow-gold",
  violet: "border-violet/40 glow-violet",
};

export function ArchitectureStack() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1">
      {LAYERS.map((layer, i) => (
        <div
          key={layer.id}
          className={cn(
            "glass grid grid-cols-[3.6rem_1fr] items-center gap-2 rounded-xl px-2.5 py-1 sm:grid-cols-[4.4rem_minmax(0,13.5rem)_1fr] sm:gap-3 sm:px-3 sm:py-1.5",
            toneClass[layer.tone]
          )}
          style={{ animationDelay: `${i * 40}ms` }}
        >
          <span className="font-mono text-[9px] tracking-[0.12em] text-paper/75 uppercase sm:text-[10px]">
            {layer.zone}
          </span>
          <div className="hidden min-w-0 sm:block">
            <p className="text-[11px] leading-tight font-medium text-paper md:text-xs">
              {layer.en}
            </p>
            <p className="text-[10px] leading-tight text-muted-foreground">{layer.ru}</p>
          </div>
          <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[10px] text-paper/90 sm:text-[11px] md:text-xs">
            <li className="font-medium text-cyan sm:hidden">{layer.en}:</li>
            {layer.items.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span className="size-1 shrink-0 rounded-full bg-cyan/80" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="pt-1 font-mono text-[10px] tracking-wide text-muted-foreground uppercase md:text-[11px]">
        Поток: данные — вверх. Управляющие воздействия вниз — только через шлюзы.
        Поперечно: IAM, SOC, наблюдаемость, платформа.
      </p>
    </div>
  );
}
