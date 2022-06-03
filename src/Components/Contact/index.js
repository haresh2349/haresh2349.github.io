import { useEffect, useState, useRef } from 'react'
import AnimateLetters from '../AnimatedLetters'
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
  }, [])
  const formRef = useRef()
  console.log(formRef.current, 'from')
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_vjzrn81',
        'template_cxtpghk',
        formRef.current,
        'lNJXyvYYUpaDWUjSE'
      )
      .then(
        (result) => {
          console.log(result.text)
          // form.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimateLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={10}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    name="messege"
                    placeholder="Messege"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contact
