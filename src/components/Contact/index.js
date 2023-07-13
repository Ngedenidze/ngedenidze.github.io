import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => clearTimeout(timerId);
  }, []);

  useEffect(() => {
    // Check if 'spline-viewer' is already defined.
    if (!customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@splinetool/viewer@0.9.383/build/spline-viewer.js';
      script.type = 'module';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      }
    }
  }, []);




  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-form">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['F', 'o', 'r', 'm']}
                idx={15}
              />
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" autocomplete="off" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    autocomplete="off"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    autocomplete="off"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    autocomplete="off"
                    required
                  ></textarea>
                </li>

                <input type="submit" className="flat-button" value="SEND" />
              </ul>
            </form>
          </div>
        </div>

        <div className="info-map">
          <div class="card">
            <div class="card-photo"></div>
            <div class="card-title">Nika Gedenidze <br />
              <span>Software Engineer</span>
            </div>
            <div class="card-socials">
              <span>
              Caldwell, NJ
              </span>
              <br/>
              <span>
              07006
              </span>
              <br/>
              <span>
              +1 (717) 775 - 0711
              </span>
              <br/>
              <span>
               Ngedenidze@outlook.com
              </span>
            </div>
          </div>
          {/* <spline-viewer loading-anim url="https://prod.spline.design/IYIxP9mUUv8oXxlY/scene.splinecode"></spline-viewer> */}
        </div>


      </div>
      <Loader type="ball-grid-pulse" />
    </>
  )
}

export default Contact
