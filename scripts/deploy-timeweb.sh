#!/usr/bin/env bash
# Copies the static deck into a NEW subdirectory on a Timeweb VDS.
# Does not replace index.html or other existing site files.
set -euo pipefail

KEY="${TIMEWEB_SSH_KEY:-$HOME/.ssh/timeweb_holding}"
USER="${TIMEWEB_USER:-root}"
HOST="${TIMEWEB_HOST:?Укажите TIMEWEB_HOST (IPv4 сервера)}"
SUBDIR="${TIMEWEB_SUBDIR:-holding-architecture}"
LOCAL_OUT="${TIMEWEB_OUT:-out}"
WEBROOT="${TIMEWEB_WEBROOT:-}"

if [[ ! -f "$KEY" ]]; then
  echo "Нет SSH-ключа: $KEY" >&2
  exit 1
fi

if [[ ! -d "$LOCAL_OUT" ]]; then
  echo "Нет папки $LOCAL_OUT. Сначала: npm run build:timeweb" >&2
  exit 1
fi

ssh_base=(ssh -i "$KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -o BatchMode=yes)

if [[ -z "$WEBROOT" ]]; then
  WEBROOT="$("${ssh_base[@]}" "${USER}@${HOST}" 'bash -s' <<'REMOTE'
set -e
candidates=()
for f in /etc/nginx/sites-enabled/* /etc/nginx/conf.d/*.conf; do
  [[ -f "$f" ]] || continue
  while read -r p; do
    candidates+=("$p")
  done < <(awk '/root / {gsub(/;/,""); print $2}' "$f" 2>/dev/null || true)
done
for f in /etc/apache2/sites-enabled/* /etc/httpd/conf.d/*.conf; do
  [[ -f "$f" ]] || continue
  while read -r p; do
    candidates+=("$p")
  done < <(awk '/DocumentRoot/ {print $2}' "$f" 2>/dev/null || true)
done
for p in /var/www/html /usr/share/nginx/html /var/www/public /home/*/public_html /var/www/*/public_html; do
  for e in $p; do
    [[ -d "$e" ]] && candidates+=("$e")
  done
done
for p in "${candidates[@]}"; do
  [[ -d "$p" ]] || continue
  echo "$p"
  exit 0
done
echo "/var/www/html"
REMOTE
)"
fi

TARGET="${WEBROOT%/}/${SUBDIR}"
echo "Каталог сайта: $WEBROOT"
echo "Презентация:   $TARGET (только эта папка)"

"${ssh_base[@]}" "${USER}@${HOST}" "mkdir -p $(printf '%q' "$TARGET")"

rsync -az --delete \
  -e "ssh -i ${KEY} -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new" \
  "${LOCAL_OUT%/}/" "${USER}@${HOST}:${TARGET}/"

echo "Готово. Проверьте http://${HOST}/${SUBDIR}/"
