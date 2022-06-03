import { useEffect, useState } from 'react'
import AnimateLetters from '../AnimatedLetters'
import './index.scss'
import Lystshot from '../../assets/images/Lystshot.png'
import Lyndashot from '../../assets/images/Lyndashot.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Reduxicon from '../../assets/images/Reduxicon.png'
import RevvShot from '../../assets/images/RevvShot.png'

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
            idx={8}
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
                <div className="icon">
                  <img style={{ width: '60px' }} src={Reduxicon} alt="" />
                  <h3 style={{ textAlign: 'center' }} className="skill-text">
                    Redux
                  </h3>
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="text">
                <p>
                  {' '}
                  <span>&#12297;</span> Lyst is a fashion technology company and
                  premium shopping app.
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Includes user authentication, filters
                  according to differnt categories, search
                  functionallity,slidders and different products with their
                  different varients,checkout and payment page.
                </p>
                {/* <p>
                  {' '}
                  <span>&#12297;</span> Tried to make possible as original one.
                </p> */}
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
                  <h3 className="skill-text">Javascript</h3>
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="text">
                <p>
                  {' '}
                  <span>&#12297;</span> A web application that provides various
                  topics and courses to enhance skills.
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Includes different courese and topics
                  pages according to user's interest, user authentication,
                  image-slidders,checkout and payment page.
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
        <div className="revv clone">
          <h2 className="project-heading">Revv Cars Clone</h2>
          <div className="content">
            <div className="left-box">
              <div className="img-box">
                <img src={RevvShot} alt="" />
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
                  <h3 className="skill-text">Javascript</h3>
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="text">
                <p>
                  {' '}
                  <span>&#12297;</span> A web application that provides cars on
                  rent.{' '}
                </p>
                <p>
                  {' '}
                  <span>&#12297;</span> Includes different cars pages according
                  to user's choice, user authentication, checkout and payment
                  page.
                </p>
              </div>
              <div className="buttons">
                <a target="_blank" href="https://projectlynda.netlify.app/">
                  <button>Live Site</button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/mahendrasingh-engineer/revv-clone-2"
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
