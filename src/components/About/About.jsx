import React from 'react'
import './About.css'
import about_profile from '../../assets/about_profile.jpg'
import location from '../../assets/location-1-1.png'
import hill from '../../assets/hill-1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Us</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={about_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <h2>Ally Safaris</h2>
                <p>offers exceptional safari experiences focused on Kenya’s renowned wildlife. Specializing in guided tours we take guests through iconic locations like the Maasai Mara, Lake Nakuru, Amboseli, Samburu, Ol Pejeta and Many More.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill">
                  <img src={location} alt="" />
                  <h2>Vision</h2>
                  <p>To be your preferred tours and travel company in East Africa.</p>
                </div>
                <div className="about-skill">
                  <img src={hill} alt="" />
                  <h2>Mission</h2>
                  <p>To provide our clients with unforgettable, personalized travel experiences through innovative, reliable, and top notch services.</p>
                </div>
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
