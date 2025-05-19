import React from 'react'
import './Hero.css'
// import zebra from '../../assets/zebra.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <div className='background'>
      {/* <img src={zebra} alt="" /> */}
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
      <h1>Ally Safaris</h1>
      <p>Ally Safaris, offers exceptional safari experiences focused on Kenya’s renowned wildlife. Specializing in guided tours we take guests through iconic locations like the Maasai Mara, Lake Nakuru, Amboseli, Samburu, Ol Pejeta and Many More.</p>
      </div>
    </div>
  )
}

export default Hero
