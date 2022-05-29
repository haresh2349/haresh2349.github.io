import './index.scss'
import AnimateLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReduxLogo from '../../assets/images/ReduxLogo.png'
import {
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])
  return (
    <div className="skills-page">
      <div className="title">
        <h1>
          <AnimateLetters
            letterClass={letterClass}
            strArray={['S', 'k', 'i', 'l', 'l', 's']}
            idx={15}
          />
        </h1>
      </div>
      <div className="skills-icons">
        <div className="skill html">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          <h3 className="skill-text">HTML</h3>
        </div>
        <div className="skill css">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          <h3 className="skill-text">CSS</h3>
        </div>
        <div className="skill javascript">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          <h3 className="skill-text">Javascript</h3>
        </div>
        <div className="skill react">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          <h3 className="skill-text">ReactJs</h3>
        </div>
        <div className="skill node">
          <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
          <h3 className="skill-text">NodeJs</h3>
        </div>

        <div className="skill git">
          <FontAwesomeIcon icon={faGithub} color="#24292F" />
          <h3 className="skill-text">GitHub</h3>
        </div>
      </div>
    </div>
  )
}
export default Skills
