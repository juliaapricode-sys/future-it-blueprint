export type SceneVariant = "hero" | "cinematic" | "briefing" | "dense";

export type SlideScene = {
  src: string;
  variant: SceneVariant;
  alt: string;
};

export const SCENES: SlideScene[] = [
  {
    src: "/visuals/vis-hero.webp",
    variant: "hero",
    alt: "Ночная электростанция и голографический цифровой двойник",
  },
  {
    src: "/visuals/vis-mesh.webp",
    variant: "briefing",
    alt: "Сеть площадок Холдинга как единый цифровой контур",
  },
  {
    src: "/visuals/vis-control.webp",
    variant: "cinematic",
    alt: "Диспетчерский зал с операционной картиной производства",
  },
  {
    src: "/visuals/vis-gateway.webp",
    variant: "briefing",
    alt: "Шлюз между технологическим контуром и цифровым двойником",
  },
  {
    src: "/visuals/vis-domains.webp",
    variant: "cinematic",
    alt: "Семь компонентов архитектуры как световые столбы",
  },
  {
    src: "/visuals/vis-architecture.webp",
    variant: "dense",
    alt: "Целевые слои архитектуры как голографическая башня",
  },
  {
    src: "/visuals/vis-data-core.webp",
    variant: "briefing",
    alt: "Корпоративное хранилище данных как ядро согласованных витрин",
  },
  {
    src: "/visuals/vis-twin.webp",
    variant: "briefing",
    alt: "Цифровой двойник турбины в машинном зале",
  },
  {
    src: "/visuals/vis-shield.webp",
    variant: "cinematic",
    alt: "Зонная защита промышленного энергетического контура",
  },
  {
    src: "/visuals/vis-roles.webp",
    variant: "cinematic",
    alt: "Бизнес собирает прототип, информационные технологии удерживают платформу",
  },
  {
    src: "/visuals/vis-roadmap.webp",
    variant: "cinematic",
    alt: "Переход от физической станции к целевому цифровому контуру",
  },
  {
    src: "/visuals/vis-policy.webp",
    variant: "briefing",
    alt: "Стратегии и политики как архитектурный свод правил",
  },
  {
    src: "/visuals/vis-horizon.webp",
    variant: "hero",
    alt: "Горизонт энергетической системы следующего контура",
  },
];
