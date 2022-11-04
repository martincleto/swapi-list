import { renderHook, act } from '@testing-library/react'
import useFilters from './useFilters'

describe('useFilters', () => {
  test('should use models', () => {
    const { result } = renderHook(() => useFilters())
    const { models, operations } = result.current

    expect(models.filters.name).toBeUndefined()
    expect(typeof operations.updateFilter).toBe('function')
  })

  test('should update filters', () => {
    const mockSearch = [
      {
        birthYear: '33BBY',
        homeworld: 'Naboo',
        id: 'cGVvcGxlOjM=',
        name: 'R2-D2',
        species: 'Droid'
      },
      {
        birthYear: 'unkown',
        homeworld: 'Tatooine',
        id: 'cGVvcGxlOjg=',
        name: 'R5-D4',
        species: 'Droid'
      },
    ]
    const { result } = renderHook(() => useFilters())
    const { operations } = result.current

    act(() => {
      operations.updateFilter('search', mockSearch)
    })

    const { models } = result.current

    expect(models.filters.search).toBe(mockSearch)
  })
})