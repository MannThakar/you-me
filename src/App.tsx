import { DoodleSprite } from './components/ui/DoodleSprite'
import { HeartTrail } from './components/HeartTrail'
import { NavBar } from './components/sections/NavBar'
import { Hero } from './components/sections/Hero'
import { DearYou } from './components/sections/DearYou'
import { Chapters } from './components/sections/Chapters'
import { Quote } from './components/sections/Quote'
import { Closing } from './components/sections/Closing'
import { Footer } from './components/sections/Footer'

export default function App() {
  return (
    <>
      <DoodleSprite />
      <NavBar />
      <main>
        <Hero />
        <DearYou />
        <Chapters />
        <Quote />
        <Closing />
      </main>
      <Footer />
      <HeartTrail />
    </>
  )
}
