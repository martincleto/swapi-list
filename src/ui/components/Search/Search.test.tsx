import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Search from './Search'

const mockCallback = jest.fn()

describe('Search', () => {
  test('should show a placeholder', () => {
    const mockPlaceholder = 'Boom! Big reveal!'

    render(<Search placeholder={mockPlaceholder} onSearch={mockCallback} />)

    expect(screen.getByPlaceholderText(mockPlaceholder)).toBeInTheDocument()
  })

  test('should not fire the callback if value is less than minimum chars', () => {
    render(<Search minChars={4} onSearch={mockCallback} />)

    userEvent.type(screen.getByRole('searchbox'), 'abc')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  test('should fire the callback if value is equal than minimum chars', () => {
    const mockMinChars = 3
    const mockEnteredSearch = 'abc'

    render(<Search minChars={mockMinChars} onSearch={mockCallback} />)

    userEvent.type(screen.getByRole('searchbox'), mockEnteredSearch)

    expect(mockCallback).toHaveBeenCalledTimes(mockEnteredSearch.length - mockMinChars + 1)
    expect(mockCallback).toHaveBeenCalledWith(mockEnteredSearch)
  })

  test('should fire the callback if value is greater than minimum chars', () => {
    const mockMinChars = 3
    const mockEnteredSearch = 'abcd'

    render(<Search minChars={mockMinChars} onSearch={mockCallback} />)

    userEvent.type(screen.getByRole('searchbox'), mockEnteredSearch)

    expect(mockCallback).toHaveBeenCalledTimes(mockEnteredSearch.length - mockMinChars + 1)
    expect(mockCallback).toHaveBeenNthCalledWith(1, mockEnteredSearch.substring(0, mockMinChars))
    expect(mockCallback).toHaveBeenNthCalledWith(2, mockEnteredSearch.substring(0, mockMinChars + 1))
  })
})