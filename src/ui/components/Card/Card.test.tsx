import { render, screen } from '@testing-library/react'

import Card from './Card'

const mockCharacter = {
  birthYear: '33BBY',
  homeworld: 'Naboo',
  id: 'cGVvcGxlOjM=',
  name: 'R2-D2',
  species: 'Droid'
}

describe('Card', () => {
  test('should show the character data', () => {
    render(<Card character={mockCharacter} />)

    const { birthYear, homeworld, name, species } = mockCharacter

    expect(screen.getByText(birthYear)).toBeVisible()
    expect(screen.getByText(homeworld)).toBeVisible()
    expect(screen.getByText(name)).toBeVisible()
    expect(screen.getByText(species)).toBeVisible()
  })
})