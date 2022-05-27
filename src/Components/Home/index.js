import React, { useState } from 'react'
import './index.scss'
import HLogo from '../../assets/images/HLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeading } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import AnimateLetters from '../AnimatedLetters'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'r', 'e', 's', 'h']
  const postArray = ['w', 'e', 'b', 'd', 'e', 'v', 'l', 'o', 'p', 'e', 'r', '.']
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
          aresh
          <AnimateLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <AnimateLetters
            letterClass={letterClass}
            strArray={postArray}
            idx={22}
          />
        </h1>
        <br />
        <h2>Web Devloper</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
