import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import { useEffect } from 'react'

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/project" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
