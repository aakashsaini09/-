import React from 'react'
import '../Styles/Skills-Project.css'
import tiktok from '../assets/tiktok.png'
import todo from '../assets/todo.png'
import weather from '../assets/weather.png'
import portfolio from '../assets/portfolio.png'
const Projects = () => {
  return (
    <>
      <div id="project">
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
                <div className="icons">
                  <div className="icon">
                      <a target='_blank' href="https://mausamupdates.netlify.app/"><i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i></a>
                  </div>
                  <div className="icon">
                      <a target='_blank' href="https://github.com/aakashsaini09/mausam"><i className="fa-brands fa-github" style={{color: "#ffffff"}}></i></a>
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
                      <a target='_blank' href="https://aakashsaini09.github.io/tik-tok-tak/"><i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i></a>
                  </div>
                  <div className="icon">
                      <a target='_blank' href="https://github.com/aakashsaini09/tik-tok-tak"><i className="fa-brands fa-github" style={{color: "#ffffff"}}></i></a>
                  </div>
                </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
                <img src={todo} alt=""/>
                <div className="name">TODO-List</div>
                <div className="paragraph">
                 It's a web app to store your importent notes in your browser. You can create notes in TODO-List webpage and it will remain there even if you reload your page or come back after days.<br /><br /><span>Tech Stack:</span> React-JS, SCSS, HTML, JAVASCRIPT
                </div>
                <div className="icons">
                  <div className="icon">
                      <a target='_blank' href="https://aakashsaini09.github.io/todo/"><i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i></a>
                  </div>
                  <div className="icon">
                     <a href="https://github.com/aakashsaini09/todo"><i className="fa-brands fa-github" style={{color: "#ffffff"}}></i></a> 
                  </div>
                </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
                <img src={portfolio} alt=""/>
                <div className="name">Portfolio</div>
                <div className="paragraph">
                 This is my new Portfolio which I recently made using React-JS. I have provided a input field in bottom of this website. So, Please feel free to contact me any time and give me feedback about my projects.<br /><br /><span>Tech Stack:</span> React-JS, SCSS, HTML, JAVASCRIPT
                </div>
                <div className="icons">
                  <div className="icon">
                      <i className="fa-solid fa-eye" style={{color: "#ffffff"}}></i>
                  </div>
                  <div className="icon">
                      <i className="fa-brands fa-github" style={{color: "#ffffff"}}></i>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Projects
