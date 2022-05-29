import { useEffect, useState } from 'react'
import AnimateLetters from '../AnimatedLetters'
import './index.scss'
import Lystshot from '../../assets/images/Lystshot.png'
import Lyndashot from '../../assets/images/Lyndashot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])

  return (
    <div className="projects-page">
      <div className="text-zone">
        <h1>
          <AnimateLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
      </div>
      <div className="projects">
        <div className="lyst clone">
          <h2 className="project-heading">Lyst Clone</h2>
          <div className="content">
            <div className="left-box">
              <div className="img-box">
                <img src={Lystshot} alt="" />
              </div>
              <div className="icon-box">
                <div className="icon">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                  <h3 className="skill-text">HTML</h3>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                  <h3 className="skill-text">CSS</h3>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                  <h3 className="skill-text">ReactJs</h3>
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="text">
                <p>
                  {' '}
                  <span>&#12297;</span> Built the algorithm to generate
                  connection recommendations.
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Created real-time messenger to chat with
                  connections.
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Implemented user authentication.
                </p>
              </div>
              <div className="buttons">
                <a target="_blank" href="https://lyst-clone.netlify.app/">
                  <button>Live Site</button>
                </a>

                <a target="_blank" href="https://github.com/V-bhoy/Lyst-clone">
                  <button>GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lynda clone">
          <h2 className="project-heading">Linkedin Learning Clone</h2>
          <div className="content">
            <div className="left-box">
              <div className="img-box">
                <img src={Lyndashot} alt="" />
              </div>
              <div className="icon-box">
                <div className="icon">
                  <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                  <h3 className="skill-text">HTML</h3>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                  <h3 className="skill-text">CSS</h3>
                </div>
                <div className="icon">
                  <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                  <h3 className="skill-text">ReactJs</h3>
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="text">
                <p>
                  {' '}
                  <span>&#12297;</span> Built the algorithm to generate
                  connection recommendations.
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Created real-time messenger to chat with
                  connections.
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Implemented user authentication.
                </p>
              </div>
              <div className="buttons">
                <a target="_blank" href="https://projectlynda.netlify.app/">
                  <button>Live Site</button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/ribhar/LinkedinLearning"
                >
                  <button>GitHub</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
