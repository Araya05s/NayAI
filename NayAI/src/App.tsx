import Navbar from './components/Navbar'
import About from './sections/About'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import Img_Drop from './sections/Img_Drop'

const App = () => {
  return (
    <div className='bg-neutral-50 text-neutral-100'>
      <Navbar />
      <Hero />
      <Img_Drop />
      <About />
      <Footer />
    </div>
  )
}

export default App