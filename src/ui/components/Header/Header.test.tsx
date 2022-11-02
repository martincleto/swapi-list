import { render, screen, within } from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom'

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

  test('should show a navigation if defined', () => {
    const mockNavigation = {
      path: '/coruscant',
      label: 'Go to Coruscant',
    }

    render(
      <Router>
        <Header title={mockText} navigation={mockNavigation} />
      </Router>
    )

    const navigation = screen.getByRole('navigation')

    expect(within(navigation).getByRole('link')).toHaveAttribute('href', mockNavigation.path)
    expect(within(navigation).getByText(mockNavigation.label)).toBeVisible()
  })
})