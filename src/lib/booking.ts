export type Booking = { name: string; phone: string; service: string; comment: string };

// Текст заявки: и для отправки в MAX, и для ручной отправки в мессенджер.
export function buildBookingText(b: Booking): string {
  return [
    'НОВАЯ ЗАЯВКА с сайта СТО ROLF',
    '',
    `👤 Имя: ${b.name.trim()}`,
    `📞 Телефон: ${b.phone.trim()}`,
    `🔧 Услуга: ${b.service}`,
    `💬 Комментарий: ${b.comment.trim() || 'нет'}`,
  ].join('\n');
}

// Отправка в MAX. Сайт статический, поэтому заявку пересылает nginx
// (location /api/booking в deploy/nginx-site.conf): он подставляет токен бота
// и чат из переменных окружения контейнера. Возвращает false, если отправка
// не настроена (503), отклонена или сеть недоступна.
export async function sendBooking(text: string): Promise<boolean> {
  try {
    const res = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
