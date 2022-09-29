import { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './common.css'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Footer from './Components/Footer/Footer'

const App = () => {
  const hideLoader = (loader) => {
    loader.classList.add('loader--hide')
    loader.classList.remove('loader--show')
  }
  useEffect(() => {
    const loader = document.querySelector('.loading')
    setTimeout(() => {
      hideLoader(loader)
    }, 1000)
  }, [])
  return (
    <>
      <div className="loading loader--show">
        <div className="loader"></div>
      </div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
