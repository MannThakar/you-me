import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Closing } from '../components/sections/Closing'

function mockReducedMotion(reduce: boolean) {
  window.matchMedia = ((query: string) => ({
    matches: reduce && query.includes('reduce'),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
  })) as unknown as typeof window.matchMedia
}

describe('"Yes, always"', () => {
  it('bursts hearts, shows the thank-you, and repeats', async () => {
    mockReducedMotion(false)
    const user = userEvent.setup()
    render(<Closing />)
    const yes = screen.getByRole('button', { name: /yes, always/i })

    await user.click(yes)
    expect(screen.getAllByTestId('burst-piece')).toHaveLength(12)
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()

    await user.click(yes)
    expect(screen.getAllByTestId('burst-piece')).toHaveLength(24)

    // Pieces remove themselves once their animation ends. (jsdom has no
    // AnimationEvent, so React listens for the prefixed name there.)
    for (const p of screen.getAllByTestId('burst-piece')) {
      fireEvent.animationEnd(p)
      fireEvent(p, new Event('webkitAnimationEnd', { bubbles: true }))
    }
    expect(screen.queryAllByTestId('burst-piece')).toHaveLength(0)
  })

  it('shows a still version with reduced motion', async () => {
    mockReducedMotion(true)
    const user = userEvent.setup()
    render(<Closing />)
    await user.click(screen.getByRole('button', { name: /yes, always/i }))
    expect(screen.queryAllByTestId('burst-piece')).toHaveLength(0)
    expect(screen.getByText(/thank you/i)).toBeInTheDocument()
  })
})
