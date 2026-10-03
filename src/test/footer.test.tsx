import { render, screen } from '@testing-library/react'

describe('footer links', () => {
  afterEach(() => vi.resetModules())

  it('hides links left empty, and the whole column when all are empty', async () => {
    vi.doMock('../content', async (orig) => {
      const mod = await orig<typeof import('../content')>()
      return {
        content: {
          ...mod.content,
          links: {
            playlist: '',
            photoAlbum: '',
            insideJokes: '',
            instagram: 'https://instagram.com/someone',
            pinterest: '',
            email: '',
          },
        },
      }
    })
    const { Footer } = await import('../components/sections/Footer')
    render(<Footer />)
    expect(screen.queryByText('our things')).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Pinterest' })).not.toBeInTheDocument()
    const ig = screen.getByRole('link', { name: 'Instagram' })
    expect(ig).toHaveAttribute('target', '_blank')
  })

  it('shows filled links, and email opens the mail app', async () => {
    vi.doMock('../content', async (orig) => {
      const mod = await orig<typeof import('../content')>()
      return {
        content: {
          ...mod.content,
          links: {
            playlist: 'https://open.spotify.com/x',
            photoAlbum: '',
            insideJokes: '',
            instagram: '',
            pinterest: '',
            email: 'me@example.com',
          },
        },
      }
    })
    const { Footer } = await import('../components/sections/Footer')
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Our playlist' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Photo album' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute(
      'href',
      'mailto:me@example.com',
    )
  })
})
