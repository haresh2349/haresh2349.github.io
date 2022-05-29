import React, { useEffect, useState } from 'react'
import './index.scss'
import haresh from '../../assets/images/haresh.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeading } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AnimateLetters from '../AnimatedLetters'
import Profile from './Profile'
// import haresh from './Logo'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'e', 's', 'h']
  const postArray = [
    'f',
    'r',
    'o',
    'n',
    't',
    'e',
    'n',
    'd',
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
            idx={22}
          />
        </h2>
        <br />
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        {/* <br /> */}
        <a
          target="_blank"
          href="https://docs.google.com/document/d/11m6m8h7Oipeyt124-me4LMZMMZiIHOPIQ2wACeqz0g0/edit#"
        >
          <div className="flat-button">RESUME</div>
        </a>
      </div>
      <Profile />
    </div>
  )
}

export default Home
