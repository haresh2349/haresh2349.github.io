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
          Array.from(document.querySelectorAll(".input")).forEach(
            input => (input.value = "")
          );
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
            If you have any request or question, don't hesitate to contact me
            using below form either.
          </p>
          <div className="contact-form">
            <form ref={formRef} onSubmit={handleSubmit} className="form">
              <ul>
                <li className="half">
                  <input
                    type="text"
                    placeholder="Name"
                    name="user_name"
                    required
                    className='input'
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    required
                    className='input'
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    required
                    className='input'
                  />
                </li>
                <li>
                  <textarea
                    name="messege"
                    placeholder="Messege"
                    required
                    className='input'
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
