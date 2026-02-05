import Navbar from './components/Navbar'
import About from './sections/About'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Img_Drop from './sections/Img_Drop'
import { Analytics } from "@vercel/analytics/react"
import Howto from './sections/Howto'
import Compare from './sections/Compare'

const App = () => {
  return (
    <div className='bg-neutral-50 text-neutral-100'>
      <Navbar />
      <Hero />
      <Img_Drop />
      <About />
      <Howto />
      <Compare />
      <Footer />
      <Analytics />
    </div>
  )
}

export default App