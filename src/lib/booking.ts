export type Booking = { name: string; phone: string; service: string; comment: string };

// Ключ Web3Forms (web3forms.com) для адреса rolf@detalka.info. Ключ не секретный:
// он только указывает сервису, на какую почту пересылать заявки.
// Если сервис недоступен, форма предлагает позвонить или написать.
export const WEB3FORMS_KEY = 'c582e748-6ad4-464b-8855-b94da56f30cb';

// Текст заявки для письма.
export function buildBookingText(b: Booking): string {
  return [
    `Имя: ${b.name.trim()}`,
    `Телефон: ${b.phone.trim()}`,
    `Услуга: ${b.service}`,
    `Комментарий: ${b.comment.trim() || 'нет'}`,
  ].join('\n');
}

// Отправка заявки на почту через Web3Forms. Возвращает false, если ключ не задан,
// сервис отказал или сеть недоступна.
export async function sendBooking(b: Booking): Promise<boolean> {
  if (!WEB3FORMS_KEY) return false;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Заявка с сайта СТО ROLF: ${b.service}`,
        from_name: 'Сайт СТО ROLF',
        message: buildBookingText(b),
      }),
    });
    const data = await res.json().catch(() => ({}));
    return res.ok && data.success === true;
  } catch {
    return false;
  }
}
