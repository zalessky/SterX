import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../components/Header'
import { expect, test } from 'vitest'

test('Header renders the logo and main navigation', () => {
  render(<Header />)
  expect(screen.getByText('ROLF')).toBeDefined()
  expect(screen.getByText('Service')).toBeDefined()
  expect(screen.getByText('Услуги')).toBeDefined()
  expect(screen.getByText('О компании')).toBeDefined()
  expect(screen.getByText('Контакты')).toBeDefined()
})

test('Header displays the correct phone number and toggles mobile menu', () => {
  render(<Header />)
  // Initially only desktop phone is visible (or mobile is hidden)
  // Actually, both might be in the DOM if I didn't use conditional rendering,
  // but I did: {isMenuOpen && (...)}
  expect(screen.getAllByText('+7 (927) 135-88-99')).toHaveLength(1)

  // Find the menu button (it's the only button in the header besides "Записаться" which is a Link)
  // Wait, "Записаться" is a Link. The menu button is a <button>.
  const menuButton = screen.getByRole('button')
  fireEvent.click(menuButton)

  // Now mobile menu should be open
  expect(screen.getAllByText('+7 (927) 135-88-99')).toHaveLength(2)
})
