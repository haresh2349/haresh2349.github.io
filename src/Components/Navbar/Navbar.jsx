import React, { useState } from 'react'
import Link from 'react-scroll/modules/components/Link'
import './Navbar.css'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Flip from 'react-reveal/Flip'
import logo from '../../assets/images/HSicon.jpg'

const Navbar = () => {
  const [drawer, setDrawer] = useState(false)
  return (
    <div className="wrapper n">
      <div className="container">
        <div className="n-wrapper">
          <div className="n-left">
            <div className="logo">
              <Link to="intro" smooth={true}>
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="n-right">
            <div className="mobile-menu">
              {!drawer ? (
                <div onClick={() => setDrawer(true)} className="menu-icon">
                  <MenuIcon />
                </div>
              ) : (
                <Flip right>
                  <div className="menu-list">
                    <div onClick={() => setDrawer(false)} className="close">
                      <CloseIcon />
                    </div>
                    <ul>
                      <li>
                        <Link activeClass="active" to="intro" smooth={true} spy>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link activeClass="active" to="about" smooth={true} spy>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="skills"
                          smooth={true}
                          spy
                        >
                          Skills
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="projects"
                          smooth={true}
                          spy
                        >
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          activeClass="active"
                          to="contact"
                          smooth={true}
                          spy
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Flip>
              )}
            </div>
            <ul>
              <li>
                <Link activeClass="active" to="intro" smooth={true} spy>
                  Home
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="about" smooth={true} spy>
                  About
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="skills" smooth={true} spy>
                  Skills
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="projects" smooth={true} spy>
                  Projects
                </Link>
              </li>
              <li>
                <Link activeClass="active" to="contact" smooth={true} spy>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
