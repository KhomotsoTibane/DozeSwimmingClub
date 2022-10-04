import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Team from "./components/Team/Team"
import Faq from "./components/Faq/Faq"
import Gallery from "./components/Gallery/Gallery"
import Shedule from "./components/Schedule/Schedule"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <Header/>
      <Hero />
      <About />
      <Team />
      <Faq />
      <Gallery />
      <Shedule />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
