import { render, screen } from '@testing-library/react'

import { Header } from '@/ui/components'

const mockText = 'May the force be with you'

describe('Header', () => {
  test('should render a title', () => {
    render(<Header title={mockText} />)

    expect(screen.getByText(mockText)).toBeVisible()
  })

  test('should show children if declared', () => {
    render(
      <Header title={mockText}>
        <p data-testid="child">A child</p>
        <p data-testid="child">Another child</p>
      </Header>
    )

    expect(screen.getAllByTestId('child')).toHaveLength(2)
  })
})