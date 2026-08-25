import { copyFileSync, existsSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const from = path.join(root, "holding-deck-timeweb.zip");
const to = path.join(root, "holding-architecture-html.zip");

if (!existsSync(from)) {
  console.error(
    "Нет holding-deck-timeweb.zip. HTML-страница — это полная кинематографическая сборка. Сначала: npm run build:timeweb",
  );
  process.exit(1);
}

copyFileSync(from, to);
console.log(
  "Собран",
  to,
  "— тот же доклад, что на экране разработки: сцены, шторы, стекло, анимация кадра.",
);

const restore = spawnSync("npx", ["next", "build"], {
  cwd: root,
  stdio: "inherit",
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: "" },
});
if (restore.status !== 0) {
  console.error("Архив готов, но локальную сборку без префикса пути восстановить не удалось.");
}
