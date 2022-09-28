import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import Bounce from 'react-reveal/Bounce'
import './Footer.css'
import MailIcon from '@mui/icons-material/Mail'

const Footer = () => {
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
      id="contact"
      className="wrapper f"
    >
      <div className="container">
        <div className="f-wrapper">
          <h3 className="f-head">Get in Touch</h3>
          <p className="f-name">Haresh Solanki</p>
          <div className="handles">
            <Bounce right>
              <div className="h-icon">
                <a
                  className="linked_in"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/haresh-solanki/"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </Bounce>
            <Bounce right>
              <div className="h-icon">
                <a
                  className="github"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/haresh2349"
                >
                  <GitHubIcon />
                </a>
              </div>
            </Bounce>
            <Bounce right>
              <div className="h-icon">
                <div className="work-icon">
                  <a className="email" href="mailto:hareshcsolanki07@gmail.com">
                    <MailIcon />
                  </a>
                </div>
              </div>
            </Bounce>
          </div>
          <p className="cp">© 2022 copyright all right reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
