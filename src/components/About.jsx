import React from 'react'
import '../Styles/Home-About.css'
import home from '../assets/home.png'
import { useState } from 'react'
const About = () => {
  const [btnSelect, setbtnSelect] = useState(1)
  const [first, setfirst] = useState(true)
  function functionfun(){
    if (btnSelect ==1){
      setbtnSelect(2)
    }
    else{
      setbtnSelect(1)
    }
    if(first){
      setfirst(false)
    }
    else{
      setfirst(true)
    }
  }
  return (
    <>
      {/* {showFirst ? (
        <div>
          <h1>First Div</h1>
          <button onClick={() => setShowFirst(false)}>Click to show second div</button>
        </div>
      ) : (
        <div>
          <h1>Second Div</h1>
          <button onClick={() => setShowFirst(true)}>Click to show first div</button>
        </div>
      )} */}
      <div className='about' id='about' >
        <p className='headline'>ALL <span className='paragraphinside'>ABOUT</span> ME <div> AND MY<span className='paragraphinside'>EXPERIENCE</span></div></p>
        <div className='dots'>. . . . .  <i className="fa-solid fa-arrow-down"></i>  . . . . .</div>
        <div className="about-main">
          <div className="about-main-img" data-aos="zoom-in">
            <img src={home} alt="" />
          </div>
          {first?(<span className="about-main-paragraph paragraph-visible" data-aos="zoom-in">
            👉Hello! My name is Aakash Saini & I enjoy creating things that live on the internet. I love learning new skills and work on it. I'm a passionate Developer, with strong administrative & fast learning skills, good attention to detail & the ability to write efficient code.<br /><br />
            👉Currently I am pursuing a Bachelor’s degree in Computer Application (BCA) from PG Government College Jind and I am in my final year. I completed my 10th and 12th grades from SD Senior Secondary School Jind.<br /><br />
            👉I am proficient in HTML, CSS, JavaScript, and React.js. I have built several projects using MongoDB and Node.js for the backend. I have also used popular frameworks such as Bootstrap and Tailwind CSS in my projects. Recently, I have started exploring Web3 technology and learning Solidity and Ethereum. <br /><br />
          </span>):
          (<span className="about-main-paragraph paragraph-visible" data-aos="zoom-in">
            👉I am skilled in HTML, CSS, JavaScript and the frontend framework React.js. I enjoy learning new technologies and enhancing my web development skills. I am currently learning Next.js and TypeScript. They help me catch errors early, streamline my workflow, and improve code quality. I am eager to apply these tools to create fast and reliable projects in future. <br /><br />
          👉I am proficient in MongoDB, Node.js, and Express.js for database and backend development. I have created some projects using MongoDB and Node.js that are deployed online. I have also learned Firebase recently and built a chat application using it, although I am still exploring its features and capabilities.<br /><br />
            👉In addition to my technical skills, I have some soft skills that helps me in development. I have a strong learning ability that allows me to master new technologies and tools quickly. I have a high degree of resilience and enjoy taking on challenging tasks. I also have good teamwork and communication skills and I like working and interacting with new people.<br /><br />
          </span>)}
        </div> 
        <div className="about-main-button">
          <button className={`main-btns ${btnSelect ===1 ? 'bgc' : ''}`} onClick={()=> functionfun()}>About Me</button>
          <button className={`main-btns ${btnSelect ===2 ? 'bgc' : ''}`} onClick={()=> functionfun()}>Skills</button>
        </div>
      </div>
    </>
  );
}
export default About
