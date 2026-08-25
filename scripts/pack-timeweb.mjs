import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { spawnSync } from "node:child_process";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const downloads = path.join(outDir, "downloads");
const zipPath = path.join(root, "holding-deck-timeweb.zip");
const subdir = (process.env.TIMEWEB_SUBDIR || "").replace(/^\/+|\/+$/g, "");

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

if (subdir) {
  writeFileSync(
    path.join(outDir, ".htaccess"),
    "DirectoryIndex index.html\nOptions -Indexes\n",
  );
}

if (existsSync(zipPath)) {
  rmSync(zipPath);
}

let zip;
if (subdir) {
  const staging = mkdtempSync(path.join(os.tmpdir(), "holding-timeweb-"));
  cpSync(outDir, path.join(staging, subdir), { recursive: true });
  zip = spawnSync("zip", ["-r", "-q", zipPath, subdir], {
    cwd: staging,
    stdio: "inherit",
  });
  rmSync(staging, { recursive: true, force: true });
} else {
  zip = spawnSync("zip", ["-r", "-q", zipPath, "."], {
    cwd: outDir,
    stdio: "inherit",
  });
}

if (zip.status !== 0) {
  console.error("Не удалось собрать zip. Папка out/ готова к загрузке как есть.");
  process.exit(0);
}

if (subdir) {
  console.log("Собран", zipPath, "— распаковка добавляет только папку", subdir);
} else {
  console.log("Собран", zipPath);
}
