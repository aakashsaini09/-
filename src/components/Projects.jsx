import React from 'react'
import '../Styles/Skills-Project.css'
import tiktok from '../assets/tiktok.png'
import todo from '../assets/todo.png'
import weather from '../assets/weather.png'
import portfolio from '../assets/portfolio.png'
import github from '../assets/Screenshot 2024-03-30 102452.png'
const Projects = () => {
  return (
    <>
      <div id="project" >
        <div className="project-header">
          <div className="heading"><span>Projects</span> Section</div>
        </div>
        <div className="project-section">
            <div className="project-container" data-aos="zoom-in-up">
                <img src={weather} alt="" />
                <div className="name">Weather-App</div>
                <div className="paragraph">
                  It's a web app to show the weather forecast details using OpenWeather API & here you can search weather details for any city in the world.<br /><br /><span>Tech Stack:</span> HTML, CSS, JAVASCRIPT, BOOTSTRAP.
                </div>
                <div className="icons" >
                  <div className="icon">
                      <a target='_blank' href="https://mausamupdates.netlify.app/"><i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i></a>
                  </div>
                  <div className="icon">
                      <a target='_blank' href="https://github.com/aakashsaini09/mausam"><i className="fa-brands fa-github" style={{color: "#ffffff"}}></i></a>
                  </div>
                </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
                <img className='special-case' src={github} alt="" />
                <div className="name">Github Profile Search</div>
                <div className="paragraph">Its a simple react application to search Github profile and view some basic details. It uses Github API and fetch profile data from github.<br /><br /><span>Tech Stack:</span>JAVASCRIPT, REACT-JS, TAILWIND-CSS.
                 </div>
                <div className="icons">
                  <div className="icon">
                      <a target='_blank' href="https://github-profile-aakashsaini09.netlify.app/">
                        <i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i>
                      </a>
                  </div>
                  <div className="icon">
                      <a target='_blank' href="https://github.com/aakashsaini09/github-profile">
                        <i className="fa-brands fa-github" style={{color: "#ffffff"}}></i>
                      </a>
                  </div>
                </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
                <img className='special-case' src={tiktok} alt="" />
                <div className="name">TIK-TOK-TAK</div>
                <div className="paragraph">
                This is a JavaScript game that you can play with your friend. It is a pure HTML, CSS and JavaScript website. I created this project in the first year of my college, so it has a very simple design.<br /><br /><span>Tech Stack:</span> HTML, CSS, JAVASCRIPT, BOOTSTRAP.
                </div>
                <div className="icons">
                  <div className="icon">
                      <a target='_blank' href="https://aakashsaini09.github.io/tik-tok-tak/">
                        <i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i>
                      </a>
                  </div>
                  <div className="icon">
                      <a target='_blank' href="https://github.com/aakashsaini09/tik-tok-tak">
                        <i className="fa-brands fa-github" style={{color: "#ffffff"}}></i>
                      </a>
                  </div>
                </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
                <img src={todo} alt=""/>
                <div className="name">TODO-List</div>
                <div className="paragraph">
                 It's a web app to store your important notes in your browser. You can create notes in TODO-List webpage and it will remain there even if you reload your page or come back after days.<br /><br /><span>Tech Stack:</span> React-JS, SCSS, HTML, JAVASCRIPT
                </div>
                <div className="icons">
                  <div className="icon">
                      <a target='_blank' href="https://aakashsaini09.github.io/todo/"><i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i></a>
                  </div>
                  <div className="icon">
                     <a target='_blank' href="https://github.com/aakashsaini09/todo"><i className="fa-brands fa-github" style={{color: "#ffffff"}}></i></a> 
                  </div>
                </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
                <img src={portfolio} alt=""/>
                <div className="name">Portfolio</div>
                <div className="paragraph">
                 This is my new portfolio, which I recently made using React-JS. It is a private repository to protect the code. You can give me feedback about the website and other projects from the contact section that I have provided at the bottom of the website. 
                </div>
                <div className="icons">
                  <div className="icon">
                      <a target='_blank' href="https://aakash-saini.netlify.app/"><i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i></a>
                  </div>
                  <div className="icon">
                      <a target='_blank' href="https://github.com/aakashsaini09"><i className="fa-brands fa-github" style={{color: "#ffffff"}}></i></a>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
