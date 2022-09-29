import React, { useEffect } from 'react'
import './Skills.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Flip from 'react-reveal/Flip'
import Bounce from 'react-reveal/Bounce'

const Skills = () => {
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
      id="skills"
      className="wrapper"
    >
      <div className="container skills">
        <Flip right>
          <div className="s-heading">
            <p>My Skills</p>
          </div>
          <div className="s">
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">HTML 5</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">CSS 3</p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">JavaScript</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">React.Js</p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">Redux</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">Node.Js</p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  {
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKmtAv2G_LoVvYzVphgkaW6W1yj3z0tR7igw&usqp=CAU"
                      alt=""
                    />
                  }
                </div>
                <p className="s-name">Express.Js</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">MongoDB</p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://chiranjeev-thapliyal.vercel.app/svg/material-ui.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">Material UI</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://chiranjeev-thapliyal.vercel.app/svg/git.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">Git</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://assets.log2base2.com/Assets/CoursesIcons/Default/DataStructures.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">Data Structures</p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://assets.log2base2.com/Assets/CoursesIcons/Default/Algorithms.svg"
                    alt=""
                  />
                </div>
                <p className="s-name">Algorithms</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://cdn2.vectorstock.com/i/thumb-large/65/16/teamwork-skills-flat-banner-template-multiracial-vector-29126516.jpg"
                    alt=""
                  />
                </div>
                <p className="s-name">Leadership</p>
              </div>
            </Bounce>
            <Bounce left>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://cdn5.vectorstock.com/i/thumb-large/62/94/good-communication-concept-icon-vector-31586294.jpg"
                    alt=""
                  />
                </div>
                <p className="s-name">Communication</p>
              </div>
            </Bounce>
            <Bounce right>
              <div className="s-box">
                <div className="s-img-box">
                  <img
                    src="	https://cdn2.vectorstock.com/i/thumb-large/65/16/teamwork-skills-flat-banner-template-multiracial-vector-29126516.jpg"
                    alt=""
                  />
                </div>
                <p className="s-name">Team Work</p>
              </div>
            </Bounce>
          </div>
        </Flip>
      </div>
    </div>
  )
}

export default Skills
