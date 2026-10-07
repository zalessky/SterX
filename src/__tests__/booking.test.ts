import { afterEach, expect, test, vi } from 'vitest'
import { buildBookingText, sendBooking } from '../lib/booking'

const booking = { name: ' Иван ', phone: '+7 927 000-11-22', service: 'Замена масла', comment: '' }

afterEach(() => vi.unstubAllGlobals())

test('текст заявки содержит данные клиента', () => {
  const text = buildBookingText(booking)
  expect(text).toContain('Имя: Иван\n')
  expect(text).toContain('Телефон: +7 927 000-11-22')
  expect(text).toContain('Услуга: Замена масла')
  expect(text).toContain('Комментарий: нет')
})

test('отправляет заявку в Web3Forms', async () => {
  const fetchMock = vi.fn().mockResolvedValue(new Response('{"success":true}', { status: 200 }))
  vi.stubGlobal('fetch', fetchMock)

  expect(await sendBooking(booking)).toBe(true)
  const [url, init] = fetchMock.mock.calls[0]
  expect(url).toBe('https://api.web3forms.com/submit')
  const body = JSON.parse(init.body)
  expect(body.access_key).toBeTruthy()
  expect(body.subject).toContain('Замена масла')
  expect(body.message).toContain('Телефон: +7 927 000-11-22')
})

test('сообщает об ошибке, если сервис отказал', async () => {
  vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('{"success":false}', { status: 403 })))
  expect(await sendBooking(booking)).toBe(false)
})
