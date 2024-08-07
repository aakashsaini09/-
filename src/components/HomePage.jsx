import React from 'react'
import '../Styles/Home-About.css'
import Typed from 'typed.js'
import img from '../assets/img2.png'
import resume from '../assets/Resume1.pdf'
const HomePage = () => {

  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web developer', 'Web designer', 'Web3 developer'],
      typeSpeed: 200,
     loop: true,
     loopCount: Infinity,
     backDelay: 800,
     backSpeed: 100
    });
    return () => {
      typed.destroy();
    };
  },[9]);
  return (
    <div className='homepage d-flex-column' id='home'>
      <div className="homepage-name d-flex flex-column">
        <div className="homepage-first">
          Hello, my name is
        </div>
        <div className="homepage-second">
          Aakash <span>Saini</span>
        </div>
        <div className="homepage-third">
          I'm a  <span ref={el}/>
        </div>
        <form method='get' action={resume}></form>
        <button className='homepage-btn' target="_blank"><a href={resume} download>Resume</a> </button>
      </div>
      
      <div className="homepage-photo">
        <img data-aos="slide-left" src={img} alt="" />
      </div>
    </div>
  )
}

export default HomePage
