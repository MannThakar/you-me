/**
 * Everything personal lives here. Before publishing, replace every text in
 * [SQUARE BRACKETS] and fill in the links you want to show.
 *
 * - `npm run build` refuses to finish while a [PLACEHOLDER] remains.
 * - A link left as '' is hidden on the page (never shown broken).
 * - A `short` field is the shorter wording phones show instead of `text`.
 */

export type Copy = { text: string; short?: string }

export const content = {
  year: 2026,

  hero: {
    label: { text: 'a little website, made just for you', short: 'made just for you' } as Copy,
    intro:
      'Some feelings don’t fit in a text message, so I drew them instead. Scroll slowly — every doodle here is a little piece of you & me.',
    aside: ['every line drawn', 'while thinking of you'],
    imageAlt:
      'Hand-drawn illustration of the two of us cuddling cheek to cheek, eyes closed and smiling, surrounded by doodled hearts, flowers, stars and a smiling sun',
    caption: 'cheek to cheek, eyes closed',
    page: 'page 1',
  },

  dearYou: {
    label: 'hello, my favorite person',
    paragraphs: [
      {
        text: 'I made this little corner of the internet just for you. It holds our story so far — the first hello, the silly dates, the lazy Sundays — drawn with flowers, stars and the tiny details only we would notice.',
        short:
          'This little corner of the internet holds our story so far — the first hello, the silly dates, the lazy Sundays — and the tiny details only we would notice.',
      },
      { text: 'No filters, no templates. Just pencils, paper and a very full heart.' },
    ] as Copy[],
    signOff: '— yours, always',
    sticker: ['made with', 'love & tea'],
  },

  chapters: {
    label: 'our story so far',
    intro: {
      text: 'Every big love starts small. These are the pages I never want to forget — with plenty of blank ones left to fill together.',
      short: 'Every big love starts small. These are the pages I never want to forget.',
    } as Copy,
    items: [
      {
        title: 'The day we met',
        date: '',
        text: 'From Law Garden to every day, my heart says, “Garden, Garden.” ❤️',
      },
      {
        title: 'Our first date',
        date: '',
        text: 'Our first date was a burger, and now we’ve turned into burger babies. 🍔❤️.',
      },
      {
        title: 'The first “I love you”',
        date: '',
        text: 'I still remember when, while watching a movie, you said those three magical words ❤️.',
      },
      {
        title: 'Today, and every day',
        date: '',
        text: 'Still my favorite person to do nothing with. Here’s to every page we haven’t drawn yet.',
      },
    ],
  },

  memories: {
    label: 'our favorite place',
    body: {
      text: 'Not a city, not a house — just the window seat, two cups of tea and you stealing the blanket. Our ordinary days are my favorite kind of magic.',
      short:
        'Just the window seat, two cups of tea and you stealing the blanket. Our ordinary days are my favorite kind of magic.',
    } as Copy,
    notes: { tulips: 'your tulips (still alive!)', us: 'us, basically' },
    chips: ['lazy Sundays', 'late-night talks', 'your laugh'],
    button: 'See our memories',
  },

  quote: { by: '— me, about you' },

  closing: {
    label: 'one last page',
    body: 'So many blank pages are left — trips we haven’t taken, jokes we haven’t made yet. I want to fill every single one with you.',
    button: 'Yes, always',
    thanks: 'thank you — I love you, always',
    ps: 'P.S. There is suprise for you!!!',
  },

  footer: {
    blurb: {
      text: 'A hand-drawn love story by Mannu, for Bachu. Still being written.',
      short: 'A hand-drawn love story by Mannu, for Bachu.',
    } as Copy,
    city: 'made with love in Ahmedabad',
  },

  /** Leave a url as '' to hide that link. `email` is a plain address. */
  links: {
    playlist: '',
    photoAlbum: '',
    insideJokes: '',
    instagram: '',
    pinterest: '',
    email: '',
  },
}
