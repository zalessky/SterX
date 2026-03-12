import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
import { expect, test } from 'vitest'

test('Header renders the logo and main navigation', () => {
  render(<Header />)
  expect(screen.getByAltText('ROLF')).toBeDefined()
  expect(screen.getByAltText('ROLF Service')).toBeDefined()
  expect(screen.getByText('Услуги')).toBeDefined()
  expect(screen.getByText('О компании')).toBeDefined()
  expect(screen.getByText('Контакты')).toBeDefined()
})

test('Header displays the correct phone number and toggles mobile menu', () => {
  render(<Header />)
  expect(screen.getAllByText('+7 (927) 135-88-99')).toHaveLength(1)

  const menuButton = screen.getByRole('button', { name: /toggle menu/i })
  fireEvent.click(menuButton)

  expect(screen.getAllByText('+7 (927) 135-88-99')).toHaveLength(2)
})
