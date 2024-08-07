import React from 'react'
import '../Styles/Contact-footer.css'
import contact from '../assets/contact.png'
const Contact = () => {
  return (
    <>
    <div id="contact">
      <div className="contact-header">
        <div className="heading">Let's have a <span>Chat</span></div>
      </div>
      <div className="contact-section">
        <div className="left-contact" data-aos="zoom-in-up" >
        <div className="btns">
          <button className="btn1"><a target="_blank" href="https://www.linkedin.com/in/-aakashsaini/"><i className="fa-brands fa-linkedin"></i>Linkedin</a></button>
          <button className="btn2"><a target="_blank" href="https://github.com/aakashsaini09"><i className="fa-brands fa-github"></i>Github</a></button>
          <button className="btn3"><a target="_blank" href="mailto:aakashsaini948585@gmail.com"><i className="fa-solid fa-envelope"></i>Gmail</a></button>
        </div>
            <form action="https://formspree.io/f/mzblqopg" method="POST">
                <input required autoComplete='off' name="name" placeholder='Enter Your Name' type="text" />
                <input required autoComplete='off' name='email' placeholder='Enter Your Email' type="email" />
                <input autoComplete='off' name="number" placeholder='Mobile Number(Not necessary)' type="number" />
                <textarea required placeholder='Enter message' name="message" id="" cols="30" rows="10"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
        <div className="right-contact">
            <img data-aos="zoom-in-up" src={contact} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}
export default Contact
