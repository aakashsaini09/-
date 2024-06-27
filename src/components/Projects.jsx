import React from 'react'
import '../Styles/Skills-Project.css'
import quillvibes from '../assets/quillvibes.png'
import todo from '../assets/todo.png'
import stock from '../assets/stock.png'
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
            <img src={quillvibes} alt="" />
            <div className="name">QuillVibes</div>
            <div className="paragraph">
              QuillVibes is a sophisticated blog web application where users can share their thoughts and ideas seamlessly. It offers essential features such as blog updates and deletions, all wrapped in a user-friendly interface. The project is built using TypeScript, ReactJS, Tailwind CSS, and AWS-CloudFlare.
            </div>
            <div className="icons" >
              <div className="icon">
                <a target='_blank' href="https://quillvibes-aakashsaini09.netlify.app/"><i className="fa-solid fa-eye" style={{ color: "#ffffff" }}></i></a>
              </div>
              <div className="icon">
                <a target='_blank' href="https://github.com/aakashsaini09/QuillVibes.git"><i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i></a>
              </div>
            </div>
          </div>
            <div className="project-container" data-aos="zoom-in-up">
              <img src={stock} alt="" />
              <div className="name">Stock Management</div>
              <div className="paragraph">
                It's a Full-stack Web Application that seamlessly integrates React-JS, Node-JS, MongoDB, and Express-JS and manage user stock details. The design is elevated by the modern aesthetics of Tailwind CSS, ensuring sleek styling and enhanced user interaction.
              </div>
              <div className="icons" >
                <div className="icon">
                  <a target='_blank' href="https://inventory-ochre.vercel.app/"><i className="fa-solid fa-eye" style={{ color: "#ffffff" }}></i></a>
                </div>
                <div className="icon">
                  <a target='_blank' href="https://github.com/aakashsaini09/stock"><i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i></a>
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
                    <i className="fa-solid fa-eye" style={{ color: "#ffffff" }}></i>
                  </a>
                </div>
                <div className="icon">
                  <a target='_blank' href="https://github.com/aakashsaini09/github-profile">
                    <i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
              <img src={todo} alt="" />
              <div className="name">TODO-List</div>
              <div className="paragraph">
                It's a web app to store your important notes in your browser. You can create notes in TODO-List webpage and it will remain there even if you reload your page or come back after days.<br /><br /><span>Tech Stack:</span> React-JS, SCSS, HTML, JAVASCRIPT
              </div>
              <div className="icons">
                <div className="icon">
                  <a target='_blank' href="https://aakashsaini09.github.io/todo/"><i className="fa-solid fa-eye" style={{ color: "#ffffff" }}></i></a>
                </div>
                <div className="icon">
                  <a target='_blank' href="https://github.com/aakashsaini09/todo"><i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i></a>
                </div>
              </div>
            </div>
            <div className="project-container" data-aos="zoom-in-up">
              <img src={portfolio} alt="" />
              <div className="name">Portfolio</div>
              <div className="paragraph">
                This is my new portfolio, which I recently made using React-JS. It is a private repository to protect the code. You can give me feedback about the website and other projects from the contact section that I have provided at the bottom of the website.
              </div>
              <div className="icons">
                <div className="icon">
                  <a target='_blank' href="https://aakash-saini.netlify.app/"><i className="fa-solid fa-eye" style={{ color: "#ffffff" }}></i></a>
                </div>
                <div className="icon">
                  <a target='_blank' href="https://github.com/aakashsaini09"><i className="fa-brands fa-github" style={{ color: "#ffffff" }}></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Projects
