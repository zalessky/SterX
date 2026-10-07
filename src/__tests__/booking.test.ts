import { expect, test } from 'vitest'
import { buildBookingText } from '../lib/booking'

test('текст заявки содержит данные клиента', () => {
  const text = buildBookingText({ name: ' Иван ', phone: '+7 927 000-11-22', service: 'Замена масла', comment: '' })
  expect(text).toContain('Имя: Иван\n')
  expect(text).toContain('Телефон: +7 927 000-11-22')
  expect(text).toContain('Услуга: Замена масла')
  expect(text).toContain('Комментарий: нет')
})
