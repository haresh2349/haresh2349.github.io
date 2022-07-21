import React, { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeading } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AnimateLetters from '../AnimatedLetters'
import Profile from './Profile'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'e', 's', 'h']
  const postArray = [
    'F',
    'u',
    'l',
    'l',
    'S',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <FontAwesomeIcon icon={faHeading} className="HIcon" />

          <AnimateLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={22}
          />
        </h1>
        <br />
        <h2>
          <AnimateLetters
            letterClass={letterClass}
            strArray={postArray}
            idx={19}
          />
        </h2>
        <br />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        {/* <br /> */}
        <a
          target="_blank"
          href="https://drive.google.com/file/d/19_h6jiRNcIeFtHAPzIuPgWznGos_lSbB/view?usp=sharing"
        >
          <div className="flat-button">RESUME</div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/haresh-solanki">
          <div className="flat-button">LINKEDIN</div>
        </a>
        <a target="_blank" href="https://github.com/haresh2349">
          <div className="flat-button">GITHUB</div>
        </a>
      </div>
      <Profile />
    </div>
  )
}

export default Home
