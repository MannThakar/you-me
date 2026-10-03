# Spec: "you & me" Love Story Website

**Status:** Draft, ready for review
**Owner:** Mann
**Date:** 2026-10-03
**Reference:** Mann's design canvas "you & me — Love Story Website" (https://claude.ai/artifact/Ky6f7ANTpHUWUKmQc2YdtB), which holds a desktop (1440), tablet (834) and mobile (390) home page, a components and foundations sheet, an illustration library and a reference analysis.

> This spec describes **what** the website does and **why**, from the visitor's point of view. How it is built, hosted and deployed is decided in the Implementation Plan.

> **Assumption:** The site is a single, static, one-page website: a personal, hand-drawn "love letter" made by one person (the author) for one special person (the reader). All content is fixed and written by the author before publishing; visitors cannot post, sign in or change anything.

Related spec: [photo-illustration](../photo-illustration/spec.md) produces the folk doodle illustration style this site uses for its hero image.

---

## 1. Problem Statement / Overview

**Why:** Some feelings don't fit in a text message. People want a heartfelt, personal gift that feels handmade, can be opened on any device, and can be kept and revisited, not a generic e-card or a social media post.

**Who it is for:**

- **The reader** (primary): the partner receiving the site. They open a link, usually on their phone, and read it slowly, like a letter.
- **The author** (secondary): the person who gives the site. They fill in their own names, dates, story moments and secret message before sharing the link.

**Current behavior:** There is nothing today. The author would have to settle for a template site or a long text message.

**Expected outcome:** The reader opens one link and scrolls through a warm, playful, hand-drawn page that tells "our story" in chapters, ends with a sweet question ("Will you keep doodling with me?"), and feels like a scrapbook page come to life. It looks and works beautifully on a phone, a tablet and a laptop.

**One-line brief (from the design):** "A playful handmade paper illustration, brought into the browser: playful but structured, handmade but professional."

---

## 2. Look & Feel (what "good" looks like)

The whole site must feel like **paper scraps, tape and folk doodles on an off-white sheet**.

| Quality                   | What the visitor should see                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper stage               | An off-white paper background across the whole page, with a subtle paper grain texture.                                                                                           |
| Handmade edges            | Cards, buttons, frames and the nav bar have thick dark "ink" outlines with slightly wobbly, hand-drawn corners, never perfect rectangles.                                         |
| Scrapbook fasteners       | Cards are held on by washi tape, pins or star stickers, and sit at small tilts (a few degrees) like real scraps.                                                                  |
| Folk doodles              | Hearts, flowers, stars, sparkles, suns, sprigs, swirls and dot confetti decorate the margins. They frame content and never cover text or faces.                                   |
| Cheerful but calm palette | Mostly paper and ink, with a rose-pink hero color, a deep twilight purple for the night section, and small bright accents (sunny yellow, leaf green, sky blue, tangerine, lilac). |
| Three voices of type      | A bold, rounded, friendly display face for headings; a handwritten script for short notes (8 words or fewer); a soft, highly readable sans for all body text.                     |
| Tactile buttons           | Buttons look like stickers with a solid ink shadow. They lift and tilt slightly on hover, and press down when clicked.                                                            |

**Color palette (from the design's foundations):**

| Name         | Hex                                         | Used for                                            |
| ------------ | ------------------------------------------- | --------------------------------------------------- |
| Paper        | #FBF7EF                                     | Page background                                     |
| Paper White  | #FFFDF8                                     | Cards, frames                                       |
| Cream        | #F3EBDD                                     | Footer, alternate bands                             |
| Ink          | #2A2233                                     | Text, outlines                                      |
| Ink Soft     | #5A4F63                                     | Secondary text                                      |
| Rosehip      | #E8517A                                     | Doodles, large accents (shapes and 24px+ text only) |
| Rosehip Deep | #C2365F                                     | Primary buttons, pink text                          |
| Leaf         | #2E8A57                                     | Foliage, small labels                               |
| Sky          | #3567C9                                     | Doodles, keyboard focus                             |
| Twilight     | #47307A                                     | Night "story" section                               |
| Sunny        | #F7C548                                     | Tape, secondary button                              |
| Tangerine    | #F08A3C                                     | Small doodles                                       |
| Lilac        | #8E62C9                                     | Stickers, swirls                                    |
| Card tints   | #FCE3EA, #FFF1C2, #DDF0E3, #DDE8FB, #ECE2F8 | Card backgrounds                                    |

**Rough share of a page:** paper about 58%, ink about 14%, pink about 10%, twilight about 9%, accents about 9%.

**Typefaces (from the design):** Gluten (headings), Caveat (handwritten notes), Nunito (body and buttons).

---

## 3. Users & Key Scenarios

1. **Opening the gift on a phone:** The reader taps a link in a message, the page opens instantly, and they scroll top to bottom, reading each chapter.
2. **Jumping to the letter:** An impatient reader taps "Skip to the love letter" in the hero and lands straight on the personal note.
3. **Revisiting on a laptop:** Days later, the reader opens the same link on a laptop and sees the wider, more decorated layout with the same content.
4. **Navigating by menu:** On a tablet or phone, the reader opens the menu and jumps to "Memories".
5. **Answering the question:** At the end, the reader taps "Yes, always" and gets a small delightful response.
6. **Author preparing the gift:** Before sharing, the author replaces every placeholder in square brackets with their own details.

---

## 4. Page Structure (one page, top to bottom)

Every device shows the same seven sections in the same order with the same content. Only layout, decoration density and some wording length change (see section 6).

### 4.1 Navigation bar

- Logo: a small pink heart doodle and the wordmark "you & me" (the "&" in pink). Clicking it returns to the top.
- Links: **Our story**, **Dear you**, **Memories**, **A love note**.
- A small primary button: **Open my letter**.
- The bar is a taped paper strip with a very slight tilt.
- The link for the section currently in view (and any hovered link) gets a wavy pink underline, so the current place is never shown by color alone.

### 4.2 Hero ("top")

- Small handwritten label with a heart: "a little website, made just for you".
- Headline: "Our love story, **drawn** by hand." with "drawn" highlighted in pink and a doodle underline.
- Intro: "Some feelings don't fit in a text message, so I drew them instead. Scroll slowly — every doodle here is a little piece of you & me."
- Two actions: primary button **Read our story** (goes to the chapters), text link **Skip to the love letter** (goes to the "Dear you" intro).
- Handwritten aside with an arrow: "every line drawn while thinking of you".
- Hero image: a hand-drawn illustration of the couple cheek to cheek, eyes closed and smiling, surrounded by doodled hearts, flowers, stars and a smiling sun, framed like a taped photo, with the caption "cheek to cheek, eyes closed" and "page 1".
- Surrounding decorative doodles.

### 4.3 Intro: "Dear you" ("about")

- Illustration: two mugs on a table, with a round lilac sticker "made with love & tea".
- A notebook-paper card (blue ruled lines, pink margin line, binder holes) containing:
  - Handwritten label: "hello, my favorite person".
  - Heading: "A tiny website for my **favorite human.**"
  - Two short paragraphs about why the site was made.
  - Sign-off: "— yours, always" with a heart.

### 4.4 Our story: four chapters ("how")

- Label "our story so far", heading "Four little chapters of you & me", short intro.
- Four numbered paper cards, each with a doodle icon, a number (1 to 4), a title and one or two lines:
  1. **The day we met** — [THE DAY WE MET] · "You said something silly, I laughed too loud, and that was that."
  2. **Our first date** — [FIRST DATE] · "Too much coffee, not enough time. I already wanted a second one."
  3. **The first "I love you"** — [THE DATE] · "Said quietly, meant loudly. My favorite three words ever since."
  4. **Today, and every day** — "Still my favorite person to do nothing with. Here's to every page we haven't drawn yet."
- Cards share one recipe (border, padding, type, shadow) and vary only in tint, fastener (tape, pin, corner washi, star sticker), tilt and vertical offset. Neighbouring cards never share a tint or a fastener.

### 4.5 Our favorite place: "Memories" ("stories")

- A full-width **twilight purple** band with torn-paper top and bottom edges and stars.
- Illustration: two cats at a moonlit window, framed and taped, with handwritten notes "your tulips (still alive!)" and "us, basically".
- Label "our favorite place", heading "Home is wherever you are.", one paragraph.
- Three sticker chips: "lazy Sundays", "late-night talks", "your laugh".
- Secondary (yellow) button: **See our memories**.

### 4.6 Quote

- A large handwritten quote on a taped card: "If I could draw only one thing for the rest of my life, I'd draw **us.**", attributed "— me, about you", surrounded by doodles.

### 4.7 Closing question: "one last page" ("start")

- Label "one last page", heading "Will you keep doodling with me?", one paragraph.
- Primary button **Yes, always** with a heart.
- Handwritten P.S.: "P.S. [A LITTLE SECRET JUST FOR YOU]".
- Illustration: a flying envelope with a heart seal and a stamp.

### 4.8 Footer

- Cream paper sheet with a wavy top edge.
- Logo, plus "A hand-drawn love story by [YOUR NAME], for [THEIR NAME]. Still being written."
- **explore:** Our story, Dear you, Memories, Open my letter (all jump within the page).
- **our things:** Our playlist, Photo album, Inside jokes.
- **find me:** three round icon buttons: Instagram, Pinterest, Email.
- Bottom line: "© 2026 you & me. Every doodle drawn by hand." and "made with love in [OUR CITY]".

---

## 5. Functional Requirements

**FR-1 Single static page.** All content is on one page and loads without the reader signing in, typing anything or waiting on anything other than the page itself.

**FR-2 In-page navigation.** Every nav, footer and hero link jumps to its section on the same page with a smooth scroll. The section heading is not hidden behind the nav bar after the jump. The browser back button returns to the previous position.

| Link                               | Goes to               |
| ---------------------------------- | --------------------- |
| Logo                               | Top (hero)            |
| Our story / Read our story         | Four chapters         |
| Dear you / Skip to the love letter | Intro "Dear you" card |
| Memories / See our memories        | Favorite place band   |
| A love note / Open my letter       | Closing question      |

**FR-3 Mobile and tablet menu.** Below laptop width the nav links collapse into a menu button. Opening it drops a pinned yellow sticky note under the bar with the four links as large handwritten-style rows and the **Open my letter** button at the bottom. The menu button turns into a hand-drawn ×. Choosing a link closes the menu and jumps to the section. Tapping outside the menu or pressing Escape also closes it.

**FR-4 "Yes, always" response.** Tapping **Yes, always** gives a small, joyful response on the page, such as a burst of doodle hearts and a short handwritten thank-you. It never leaves the page or asks for input. Tapping it again repeats the response.

**FR-5 External links.** Footer "our things" and "find me" links open the author's own playlist, album, social profiles and email. Links to other websites open in a new tab; the email link opens the reader's mail app. Any link the author leaves without a destination is hidden, not shown broken.

**FR-6 Personalisation placeholders.** Every text in square brackets ([THE DAY WE MET], [FIRST DATE], [THE DATE], [A LITTLE SECRET JUST FOR YOU], [YOUR NAME], [THEIR NAME], [OUR CITY]) is replaced by the author before publishing. A published site shows no square-bracket placeholders.

**FR-7 Button states.** Every button has default, hover (lift and slight tilt, bigger shadow), pressed (sinks, shadow shrinks) and keyboard focus (dashed sky-blue outline) states, as shown on the Components board.

**FR-8 Page title and sharing preview.** The browser tab reads "you & me" and the link, when shared in a messaging app, shows a friendly title, one-line description and the hero illustration.

---

## 6. Responsive Behavior

The same content appears on every device; layouts adapt at three widths taken from the design.

|                         | Laptop / desktop (reference 1440)          | Tablet (reference 834)                         | Mobile (reference 390)                                          |
| ----------------------- | ------------------------------------------ | ---------------------------------------------- | --------------------------------------------------------------- |
| Content width           | Centred, up to 1240 wide                   | Fluid                                          | Fluid                                                           |
| Side margin             | 48                                         | 48 (24 below 900)                              | 20 to 24                                                        |
| Space between sections  | 120 to 140                                 | 100 to 120                                     | 72 to 84                                                        |
| Navigation              | Full link row plus "Open my letter" button | Menu button; "Open my letter" stays in the bar | Logo and menu button only; "Open my letter" moves into the menu |
| Hero                    | Text and image side by side                | Stacked: text, then image                      | Stacked: label, headline, image, then intro and buttons         |
| "Dear you" intro        | Mugs illustration beside the notebook card | Stacked                                        | Stacked, shorter copy                                           |
| Four chapters           | 4 cards in a row                           | 2 by 2 grid                                    | 1 column                                                        |
| Favorite place          | Illustration beside text                   | Stacked                                        | Stacked, shorter copy                                           |
| Closing question        | Text beside envelope                       | Stacked                                        | Stacked                                                         |
| Footer                  | 4 columns                                  | 3 columns (brand wider)                        | 2 columns of links, other parts stacked                         |
| Doodles visible at once | 5 to 7                                     | 3 to 5                                         | 1 to 3                                                          |
| Card tilt               | Up to about 2.5 degrees with offsets       | Same                                           | Halved, no vertical offsets                                     |

**Width breakpoints (behavior, not technology):**

- Below about 1100: chapter cards go from 4 to 2 per row.
- Below about 900: two-column sections stack; nav links become the menu button; footer becomes 2 columns.
- Below about 560: single column everywhere; the bar's "Open my letter" button moves into the menu; tighter card padding.

**Requirements for every width:**

- No sideways scrolling at any width from 320 up.
- Text is never smaller than the design's body size on mobile and never overlaps a doodle.
- Tap targets are at least 48 by 48.
- Works in portrait and landscape on phones and tablets.

---

## 7. States

| State                            | What the visitor sees                                                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Loading                          | Paper background and text appear first; illustrations fade in as they arrive. Layout does not jump when images arrive.                                 |
| Image missing                    | A paper-colored frame with the caption remains; the page still reads well.                                                                             |
| Handwriting fonts not yet loaded | Text shows in a similar fallback face and switches without shifting the layout noticeably.                                                             |
| Menu open (tablet/mobile)        | Sticky-note menu over the page; the rest of the page does not scroll behind it.                                                                        |
| Reduced motion                   | Smooth scrolling, hover tilts and the "Yes, always" burst are replaced by instant, still equivalents for readers who ask their device for less motion. |
| Printed                          | Prints as a clean, readable letter: no grain, menu or icon buttons.                                                                                    |

---

## 8. Edge Cases

1. Reader on a very small phone (320 wide): everything fits, headings wrap gracefully, no doodle covers text.
2. Very large screen (2560 wide): content stays centred at its max width; the paper background fills the rest.
3. Author writes a long chapter text or P.S.: cards grow taller; neighbours stay aligned at the top.
4. Author leaves a social or "our things" link empty: that item is hidden (FR-5).
5. Reader zooms text to 200%: nothing is clipped or overlaps.
6. Reader opens a link that jumps straight to a section (for example, shared "Memories" link): the page opens at that section.
7. Slow connection: text is readable before illustrations finish loading.
8. Dark mode on the reader's device: the site keeps its paper look (it is a letter, not an app).

---

## 9. Accessibility (product requirements)

- Body text contrast at least 7:1 (ink on paper or tints); white text only on Rosehip Deep or Twilight.
- Rosehip pink is used for shapes and large display text only, never small text.
- Current link, steps and states always pair color with a shape, number or underline.
- Every illustration has a short description for screen readers; purely decorative doodles are ignored by them.
- Icon-only buttons (menu, close, social) have spoken labels.
- Full keyboard use: every link and button is reachable in order with a visible dashed sky-blue focus outline.
- Handwritten script is used only for short notes, never for paragraphs.

---

## 10. Content & Assets Needed

From the author before launch:

- Names, three dates, the secret P.S. and the city (all placeholders in FR-6).
- Destinations for playlist, photo album, inside jokes, Instagram, Pinterest and email.

From the design (already drawn on the canvas):

- Hero couple illustration, two-mugs scene, moonlit-window cats scene, love-letter envelope.
- Doodle library (hearts, flowers, stars, sparkles, sun, sprigs, swirls, confetti).

---

## 11. Out of Scope (this version)

- Accounts, sign in, password protection or any way for the reader to write back on the site.
- A real photo gallery, playlist player or memories timeline inside the site (links go out to them).
- Email sign-up (shown on the Components board, but not on any page design).
- Editing content through the site itself; the author's content is set before publishing.
- Multiple languages, multiple couples or a template builder for other people.
- Analytics or tracking of the reader.

---

## 12. Acceptance Criteria

1. The page shows all seven sections (nav, hero, Dear you, four chapters, favorite place, quote, closing question) plus footer, in that order, on laptop, tablet and phone.
2. At 1440, 834 and 390 widths the page matches the respective artboards on the design canvas in layout, colors, type and decoration.
3. No horizontal scroll at any width from 320 to 2560.
4. Every nav, hero and footer in-page link lands on the correct section with its heading visible.
5. Below 900 wide, the menu button opens the sticky-note menu; choosing a link closes it and jumps to the section; Escape and tapping outside close it.
6. Below 560 wide, "Open my letter" appears inside the menu, not in the bar.
7. Chapter cards show 4, 2 and 1 per row on laptop, tablet and phone respectively.
8. "Yes, always" shows the celebratory response without leaving the page; with reduced motion it shows a still version.
9. Buttons show hover, pressed and keyboard-focus states as on the Components board.
10. No square-bracket placeholder appears on the published page; empty external links are hidden.
11. All text meets the contrast rules in section 9, all tap targets are at least 48 by 48, and the page is fully usable by keyboard.
12. With images blocked, the page is still readable and laid out correctly.
13. Sharing the link in a messaging app shows the site title, description and hero image.

---

## 13. Spec Review & Open Questions

Defaults chosen so work can continue; Mann can change any of them.

1. **Who is the site for?** Default: one personal gift for one partner, not a template others can fill. _(Alternative: a template many couples use.)_
2. **What happens on "Yes, always"?** Default: an on-page heart burst and a short handwritten thank-you. _(Alternatives: reveal the P.S. only after tapping; open an email reply to the author.)_
3. **"See our memories" and "Photo album".** Default: "See our memories" stays on the favorite-place section, and "Photo album" links out. _(Alternative: a second page with a real photo gallery, which would be a separate spec.)_
4. **Should the site be private?** Default: anyone with the link can view it; no password.
5. **Navigation label mismatch:** the nav says "A love note" while the button says "Open my letter"; both go to the closing question. Keep both labels?
6. **Hero image:** the design uses one real couple illustration. Default: the author supplies their own illustration in the same style (see the photo-illustration spec).
