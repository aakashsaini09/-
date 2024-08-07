import React from 'react'
import '../Styles/Skills-Project.css'
import Skillicons from '../assets/skillsicon/Skillicons'
import { useState } from 'react'
const Skills = () => {
    const [btnSelected, setbtnSelected] = useState("all")
    function setBtnFunc(value){
        setbtnSelected(value)
    }
  return (
    <>
<div id="skill-section">
    <div className="skill-header">
        <div className="skill-heading">
            MY <span>Technical</span> Skills
        </div>
        <div className="buttons">
            <button className={`${btnSelected=='all' ? 'selected' : ''}`} onClick={() => setBtnFunc("all")}>All</button>
            <button className={`${btnSelected=='frontend' ? 'selected' : ''}`} onClick={() => setBtnFunc("frontend")}>Frontend</button>
            <button className={`${btnSelected=='backend' ? 'selected' : ''}`} onClick={() => setBtnFunc("backend")}>Backend</button>
        </div>
    </div>

 
    <div id="skills">
        {Skillicons.flatMap((elem) => {
        
            if(btnSelected == "all"){
                return(
                    <div className='skill-container' key={elem.id} data-aos="zoom-in">
                        <img src={elem.img} alt="" />
                        <div className="name">{elem.name}</div>
                    </div>
                )
            }
            else if(elem.type == btnSelected || elem.type == 'both'){
                return(
                    <div className='skill-container' key={elem.id} data-aos="zoom-in">
                        <img src={elem.img} alt="" />
                        <div className="name">{elem.name}</div>
                    </div>
                )
            }
        })}
    </div>
</div>
    </>
  )
}

export default Skills
