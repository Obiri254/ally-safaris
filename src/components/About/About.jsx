import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about_profile from '../../assets/about_profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced frontend and backend developer with some years of professional experience in the field. I have also completed many projects for various clients through freelancing</p>
                <p>My passion for web development is not only reflected in the quality i provide but also the enthuthiasm i bring to each project</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                <div className="about-skill"><p>Express JS</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                <div className="about-skill"><p>Docker</p><hr style={{width:"50%"}}/></div>
                <div className="about-skill"><p>API's</p><hr style={{width:"80%"}}/></div>
            </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>2+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>5+</h1>
            <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  )
}

export default About
