import { cpSync, existsSync, mkdirSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const downloads = path.join(outDir, "downloads");
const zipPath = path.join(root, "holding-deck-timeweb.zip");

if (!existsSync(outDir)) {
  console.error("Папка out/ не найдена. Сначала выполните next build.");
  process.exit(1);
}

mkdirSync(downloads, { recursive: true });

const files = [
  "Holding-digital-architecture.pdf",
  "Holding-digital-architecture.pptx",
];

for (const name of files) {
  const from = path.join(root, name);
  if (existsSync(from)) {
    cpSync(from, path.join(downloads, name));
  }
}

const zip = spawnSync("zip", ["-r", "-q", zipPath, "."], {
  cwd: outDir,
  stdio: "inherit",
});

if (zip.status !== 0) {
  console.error("Не удалось собрать zip. Папка out/ готова к загрузке как есть.");
  process.exit(0);
}

console.log("Собран", zipPath);
