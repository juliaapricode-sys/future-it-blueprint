import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlDir = path.join(root, "html");
const visualsFrom = path.join(root, "public", "visuals");
const visualsTo = path.join(htmlDir, "visuals");
const zipPath = path.join(root, "holding-architecture-html.zip");

if (!existsSync(path.join(htmlDir, "index.html"))) {
  console.error("Нет html/index.html");
  process.exit(1);
}

mkdirSync(visualsTo, { recursive: true });
cpSync(visualsFrom, visualsTo, { recursive: true });

const downloads = path.join(htmlDir, "downloads");
mkdirSync(downloads, { recursive: true });
for (const name of [
  "Holding-digital-architecture.pdf",
  "Holding-digital-architecture.pptx",
]) {
  const from = path.join(root, name);
  if (existsSync(from)) cpSync(from, path.join(downloads, name));
}

if (existsSync(zipPath)) rmSync(zipPath);

const stagingParent = path.join(root, ".tmp-html-zip");
const wrapped = path.join(stagingParent, "holding-architecture");
rmSync(stagingParent, { recursive: true, force: true });
mkdirSync(wrapped, { recursive: true });
for (const name of [
  "index.html",
  "styles.css",
  "deck.js",
  ".htaccess",
  "visuals",
  "downloads",
]) {
  const from = path.join(htmlDir, name);
  if (existsSync(from)) cpSync(from, path.join(wrapped, name), { recursive: true });
}

const zip = spawnSync("zip", ["-r", "-q", zipPath, "holding-architecture"], {
  cwd: stagingParent,
  stdio: "inherit",
});
rmSync(stagingParent, { recursive: true, force: true });

if (zip.status !== 0) {
  console.error("Не удалось собрать HTML-архив. Папка html/ готова к загрузке.");
  process.exit(0);
}

console.log("Собран", zipPath);
