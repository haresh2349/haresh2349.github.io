import React, { useEffect } from 'react'
import './Project.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Bounce from 'react-reveal/Bounce'

const Project = ({ gitlink, link, img, id, title, desc, tech }) => {
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
      className="p"
    >
      <div className="p-left">
        <Bounce left>
          <div className="p-browser">
            <div className="p-circle orange"></div>
            <div className="p-circle yellow"></div>
            <div className="p-circle green"></div>
          </div>
          <div className="p-img">
            <img src={img[`p${id}`]} alt="" />
          </div>
          <div className="live-handles">
            <div className="handle-icon">
              <a
                className="github"
                target="_blank"
                rel="noreferrer"
                href={gitlink}
              >
                <GitHubIcon />
              </a>
            </div>
            <div className="handle-icon">
              <a className="live" target="_blank" rel="noreferrer" href={link}>
                Live
              </a>
            </div>
          </div>
        </Bounce>
      </div>
      <div className="p-desc">
        <div className="p-title">
          <p>{title}</p>
        </div>
        <div className="p-description">
          <p>{desc}</p>
        </div>
        <div className="p-tech-stack">
          {tech.map((t, i) => {
            return (
              <p key={i} className="tech">
                {t}
              </p>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Project
