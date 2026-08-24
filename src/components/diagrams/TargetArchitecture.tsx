import { cn } from "@/lib/utils";

const LAYERS = [
  {
    id: "xp",
    zone: "IT",
    label: "Каналы и решения",
    tone: "teal" as const,
    items: [
      "Ситуационный центр холдинга",
      "Порталы ДЗО и мобильные смены",
      "Клиентские и рыночные сервисы",
    ],
  },
  {
    id: "products",
    zone: "IT",
    label: "Холдинговые продукты · L5",
    tone: "teal" as const,
    items: ["Рынок и трейдинг", "Сбыт и тепло", "Сервисы для ДЗО", "Казначейство"],
  },
  {
    id: "corp",
    zone: "IT",
    label: "Корпоративный контур · L4",
    tone: "teal" as const,
    items: ["ERP / финансы", "EAM / ТОиР холдинга", "HR, закупки", "ГИС активов"],
  },
  {
    id: "platform",
    zone: "CROSS",
    label: "Поперечный слой платформ",
    tone: "copper" as const,
    items: [
      "Платформа данных и ИИ",
      "API · событийная шина",
      "IAM / PAM для OT",
      "Наблюдаемость · SOC OT",
    ],
  },
  {
    id: "dmz",
    zone: "ШЛЮЗ",
    label: "OT DMZ · безопасный подъём данных",
    tone: "ot" as const,
    items: [
      "Шлюзы и data diode",
      "Реплика историка",
      "UNS / OPC UA",
      "Каталог OT-тегов",
    ],
  },
  {
    id: "l3",
    zone: "OT",
    label: "Производство · L3",
    tone: "ot" as const,
    items: ["MES", "АСУЭ / ОИК", "Цеховой ТОиР", "Качество · LIMS"],
  },
  {
    id: "core",
    zone: "ЯДРО",
    label: "Технологический контур · L0–L2",
    tone: "ot" as const,
    items: ["Поле · ПЛК · РЗА", "ПТК / DCS", "SCADA / HMI", "Изменения — по РТН"],
  },
];

const toneClass: Record<(typeof LAYERS)[number]["tone"], string> = {
  teal: "border-teal/35 bg-teal/8",
  copper: "border-copper/40 bg-copper/10",
  ot: "border-ot/40 bg-ot/10",
};

export function TargetArchitecture() {
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-1.5">
      {LAYERS.map((layer) => (
        <div
          key={layer.id}
          className={cn(
            "grid grid-cols-[4.5rem_1fr] items-stretch gap-2 rounded-lg border px-2.5 py-1.5 sm:grid-cols-[5.5rem_minmax(0,11rem)_1fr] sm:gap-3 sm:px-3 sm:py-2",
            toneClass[layer.tone]
          )}
        >
          <div className="flex items-center">
            <span className="font-mono text-[9px] font-medium tracking-[0.14em] text-paper/80 uppercase sm:text-[10px]">
              {layer.zone}
            </span>
          </div>
          <p className="hidden items-center text-[11px] leading-tight font-medium text-paper sm:flex md:text-xs">
            {layer.label}
          </p>
          <ul className="flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[11px] text-paper/90 sm:text-xs md:text-[13px]">
            <li className="font-medium text-paper sm:hidden">{layer.label}:</li>
            {layer.items.map((item) => (
              <li key={item} className="flex items-center gap-1.5">
                <span className="size-1 shrink-0 rounded-full bg-current opacity-50" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="pt-1 font-mono text-[10px] tracking-wide text-muted-foreground uppercase md:text-[11px]">
        Правило потока: данные — вверх. Команды вниз — только через
        контролируемые шлюзы.
      </p>
    </div>
  );
}
