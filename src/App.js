import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
function App() {
  return (
    <>
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
