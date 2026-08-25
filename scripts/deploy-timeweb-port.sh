#!/usr/bin/env bash
# Puts the cinematic static deck on TCP 43217.
# Does not change sites already listening on 80 / 443.
set -euo pipefail

KEY="${TIMEWEB_SSH_KEY:-$HOME/.ssh/timeweb_holding}"
USER="${TIMEWEB_USER:-root}"
HOST="${TIMEWEB_HOST:?Укажите TIMEWEB_HOST (IPv4 сервера)}"
PORT="${TIMEWEB_PORT:-43217}"
REMOTE_ROOT="${TIMEWEB_SITE_ROOT:-/var/www/holding-architecture}"
LOCAL_OUT="${TIMEWEB_OUT:-out}"
CONF_SRC="$(cd "$(dirname "$0")/.." && pwd)/deploy/nginx-holding-architecture-43217.conf"

if [[ ! -f "$KEY" ]]; then
  echo "Нет SSH-ключа: $KEY" >&2
  exit 1
fi
if [[ ! -d "$LOCAL_OUT" ]]; then
  echo "Нет папки $LOCAL_OUT. Сначала: npm run build" >&2
  exit 1
fi

ssh_base=(ssh -i "$KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new -o BatchMode=yes)
rsync_e="ssh -i ${KEY} -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"

"${ssh_base[@]}" "${USER}@${HOST}" "mkdir -p $(printf '%q' "$REMOTE_ROOT")"
rsync -az --delete -e "$rsync_e" "${LOCAL_OUT%/}/" "${USER}@${HOST}:${REMOTE_ROOT}/"

if [[ -f "$CONF_SRC" ]]; then
  scp -i "$KEY" -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new \
    "$CONF_SRC" "${USER}@${HOST}:/etc/nginx/sites-available/holding-architecture-43217.conf"
  "${ssh_base[@]}" "${USER}@${HOST}" bash -s <<REMOTE
set -e
if [[ -d /etc/nginx/sites-enabled ]]; then
  ln -sfn /etc/nginx/sites-available/holding-architecture-43217.conf /etc/nginx/sites-enabled/holding-architecture-43217.conf
fi
if command -v nginx >/dev/null; then
  nginx -t
  systemctl reload nginx
fi
if command -v ufw >/dev/null; then
  ufw allow ${PORT}/tcp || true
fi
REMOTE
fi

echo "Файлы: ${REMOTE_ROOT}"
echo "Порт ${PORT} не меняет сайты на 80 и 443."
echo "Откройте ${PORT}/tcp в панели Timeweb: Сети → Firewall, если файрвол включён."
echo "Ссылка: http://${HOST}:${PORT}/"
