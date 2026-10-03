import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NavBar } from '../components/sections/NavBar'

function setup() {
  const user = userEvent.setup()
  render(
    <>
      <NavBar />
      <p>outside</p>
    </>,
  )
  const button = screen.getByRole('button', { name: 'Open menu' })
  const menu = document.getElementById('site-menu')!
  return { user, button, menu }
}

describe('sticky-note menu', () => {
  it('opens from the menu button and turns into a close button', async () => {
    const { user, button, menu } = setup()
    expect(menu).not.toBeVisible()
    await user.click(button)
    expect(menu).toBeVisible()
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(button).toHaveAccessibleName('Close menu')
    expect(document.documentElement).toHaveClass('menu-open')
  })

  it('closes on Escape and returns focus to the button', async () => {
    const { user, button, menu } = setup()
    await user.click(button)
    await user.keyboard('{Escape}')
    expect(menu).not.toBeVisible()
    expect(button).toHaveFocus()
    expect(document.documentElement).not.toHaveClass('menu-open')
  })

  it('closes on a tap outside', async () => {
    const { user, button, menu } = setup()
    await user.click(button)
    await user.click(screen.getByText('outside'))
    expect(menu).not.toBeVisible()
  })

  it('closes when a link is chosen', async () => {
    const { user, button, menu } = setup()
    await user.click(button)
    const links = menu.querySelectorAll('a')
    await user.click(links[2])
    expect(menu).not.toBeVisible()
  })

  it('holds the Open my letter button inside the menu', async () => {
    const { user, button, menu } = setup()
    await user.click(button)
    const ctas = [...menu.querySelectorAll('a')].filter((a) => a.textContent === 'Open my letter')
    expect(ctas).toHaveLength(1)
    expect(ctas[0]).toHaveAttribute('href', '#start')
  })
})
