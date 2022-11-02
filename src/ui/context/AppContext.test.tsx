import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { AppProvider, useApp } from '@/ui/context/AppContext'

const mockCharacters = [
  {
    birthYear: '33BBY',
    homeworld: 'Naboo',
    id: 'cGVvcGxlOjM=',
    name: 'R2-D2',
    species: 'Droid'
  },
  {
    birthYear: '57BBY',
    homeworld: 'Stewjon',
    id: 'cGVvcGxlOjEw',
    name: 'Obi-Wan Kenobi',
    species: 'Human'
  }
]

const TestingComponent = () => {
  const { characters, setCharacters } = useApp()

  return (
    <>
      {characters?.map((character) => (
        <p key={character.id} data-testid="character">{character.name}</p>
      ))}
      <button onClick={() => setCharacters && setCharacters(mockCharacters)} />
    </>
  );
};

describe('AppContext', () => {
  test('should provide default characters', () => {
    render(
      <AppProvider>
        <TestingComponent />
      </AppProvider>
    )

    expect(screen.queryAllByTestId('character')).toHaveLength(0)
  })

  test('should update characters', () => {
    render(
      <AppProvider>
        <TestingComponent />
      </AppProvider>
    )

    userEvent.click(screen.getByRole('button'))

    expect(screen.queryAllByTestId('character')).toHaveLength(mockCharacters.length)
    mockCharacters.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeVisible()
    })
  })
})