import React from 'react'
import '../Styles/Nav-Sidenav.css'
const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className="logos text-center d-flex flex-column">
        <div className="icon mb-3">
          <a href="https://www.linkedin.com/in/-aakashsaini/" target='_blank'><i className="fa-brands fa-linkedin-in" style={{color: "#a600ff"}}></i></a>
        </div>
        <div className="icon mb-3">
          <a href="https://github.com/" target='_blank'><i className="fa-brands fa-github" style={{color: "#a600ff"}}></i></a>
        </div>

        <div className="icon mb-3">
          <a  href="mailto:aakashsaini948585@gmail.com"><i className="fa-solid fa-envelope" style={{color: "#a600ff"}}></i></a>
        </div>
      </div>
    </div>
  )
}
export default SideNav
