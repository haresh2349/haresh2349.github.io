import React, { useEffect } from 'react'
import './About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import MailIcon from '@mui/icons-material/Mail'
import Flip from 'react-reveal/Flip'
import Bounce from 'react-reveal/Bounce'
import CallIcon from '@mui/icons-material/Call'
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div
      data-aos="fade-down"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      id="about"
      className="wrapper"
    >
      <div className="container">
        <Flip left>
          <div className="a-content">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">I'am Haresh Solanki</p>
            <p className="a-desc">
              Result-oriented software engineer with 1.5 years of experience as
              a Frontend Developer, specializing in the MERN stack. Proven track
              record of crafting user-friendly and scalable frontend components.
              A curious learner and creative team player, eager to contribute my
              skills and passion for innovation to a growth-oriented
              organization.
            </p>
            <Bounce left>
              <div className="connect-at">
                <div className="connect-icon">
                  <MailIcon />
                  <a href="mailto:haresh.solanki.works@gmail.com">
                    haresh.solanki.works@gmail.com
                  </a>
                </div>
                <div>
                  <CallIcon />
                  <a href="tel:7874922349">Contact no: 7874922349</a>
                </div>
              </div>
            </Bounce>
          </div>
        </Flip>
      </div>
    </div>
  )
}

export default About
