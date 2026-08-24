import { cn } from "@/lib/utils";

const LAYERS = [
  {
    id: "ch",
    zone: "Каналы",
    name: "Каналы и решения",
    tone: "cyan" as const,
    items: [
      "Ситуационный центр",
      "Порталы компаний",
      "Мобильные рабочие места",
      "Клиентские сервисы",
    ],
  },
  {
    id: "ai",
    zone: "ИИ",
    name: "Портал искусственного интеллекта",
    tone: "gold" as const,
    items: [
      "Маркетплейс сервисов искусственного интеллекта",
      "Протокол контекста модели — подключение моделей к данным и инструментам",
      "Программные интерфейсы приложений",
    ],
  },
  {
    id: "pr",
    zone: "Продукты",
    name: "Холдинговые продукты",
    tone: "cyan" as const,
    items: ["Сети", "Сбыт и теплоснабжение", "Сервисы компаний", "Казначейство"],
  },
  {
    id: "app",
    zone: "Приложения",
    name: "Корпоративные приложения",
    tone: "cyan" as const,
    items: [
      "Планирование ресурсов предприятия",
      "Управление основными фондами и техническое обслуживание",
      "Кадры и закупки",
      "Геоинформационная система активов",
    ],
  },
  {
    id: "portal",
    zone: "Данные",
    name: "Портал данных",
    tone: "gold" as const,
    items: [
      "Каталог",
      "Семантический слой",
      "Сертифицированные наборы",
      "Запросы с применением искусственного интеллекта",
    ],
  },
  {
    id: "gov",
    zone: "Данные",
    name: "Управление данными",
    tone: "gold" as const,
    items: [
      "Владельцы",
      "Мастер-данные",
      "Происхождение данных",
      "Доступ, в том числе для критической информационной инфраструктуры",
    ],
  },
  {
    id: "cdw",
    zone: "Данные",
    name: "Корпоративное хранилище данных",
    tone: "gold" as const,
    items: ["Единые витрины", "Актив и точка учёта", "Сети и финансы", "Надёжность"],
  },
  {
    id: "int",
    zone: "Связь",
    name: "Интеграция",
    tone: "violet" as const,
    items: [
      "Шлюз программных интерфейсов",
      "Шина событий",
      "Загрузка и преобразование данных",
      "Каталог интерфейсов",
    ],
  },
  {
    id: "dmz",
    zone: "Шлюз",
    name: "Буферная зона операционных технологий",
    tone: "violet" as const,
    items: [
      "Контролируемые шлюзы",
      "Однонаправленная передача",
      "Копия архива технологических параметров",
      "Промышленный стандарт обмена данными",
    ],
  },
  {
    id: "l3",
    zone: "Производство",
    name: "Производственный контур",
    tone: "violet" as const,
    items: [
      "Система управления производством",
      "Учёт энергоресурсов и оперативная информация",
      "Цеховое техническое обслуживание",
      "Лабораторные и качественные данные",
    ],
  },
  {
    id: "core",
    zone: "Ядро",
    name: "Технологический контур",
    tone: "violet" as const,
    items: [
      "Поле, контроллеры, релейная защита",
      "Распределённое управление",
      "Диспетчерское управление и человеко-машинный интерфейс",
      "Изменения — по промышленному регламенту",
    ],
  },
];

const toneClass: Record<(typeof LAYERS)[number]["tone"], string> = {
  cyan: "border-cyan/35 glow-cyan",
  gold: "border-gold/40 glow-gold",
  violet: "border-violet/40 glow-violet",
};

export function ArchitectureStack() {
  return (
    <div className="arch-tower flex min-h-0 flex-1 flex-col justify-end gap-[3px]">
      {LAYERS.map((layer, i) => {
        const inset = (LAYERS.length - 1 - i) * 6;
        return (
          <div
            key={layer.id}
            className={cn(
              "glass-deep arch-layer grid grid-cols-[4.8rem_1fr] items-center gap-2 rounded-xl px-2 py-1 sm:grid-cols-[5.6rem_minmax(0,14.5rem)_1fr] sm:gap-3 sm:px-3 sm:py-[5px]",
              toneClass[layer.tone]
            )}
            style={{
              ["--inset" as string]: `${inset}px`,
              zIndex: LAYERS.length - i,
            }}
          >
            <span className="font-mono text-[9px] leading-tight tracking-[0.08em] text-paper/80 uppercase sm:text-[10px]">
              {layer.zone}
            </span>
            <p className="hidden min-w-0 text-[11px] leading-tight font-medium text-paper sm:block md:text-xs">
              {layer.name}
            </p>
            <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[10px] text-paper/90 sm:text-[11px] md:text-xs">
              <li className="font-medium text-cyan sm:hidden">{layer.name}:</li>
              {layer.items.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <span className="size-1 shrink-0 rounded-full bg-cyan/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
      <p className="pt-2 font-mono text-[10px] tracking-wide text-paper/60 uppercase md:text-[11px]">
        Поток: данные — вверх. Управляющие воздействия вниз — только через шлюзы.
        Поперечно: идентификация, мониторинг информационной безопасности, наблюдаемость, платформа.
      </p>
    </div>
  );
}
