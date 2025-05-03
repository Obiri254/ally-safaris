import React from 'react'
import './Hero.css'
import cropped_image from '../../assets/cropped_image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={cropped_image} alt="" />
      <h1><span>I'm Obiri Anthony,</span> a backend developer based in Kenya.</h1>
      <p>I am a backend and frontend developer from Nakuru, Kenya with experince in developing server side systems using javascript</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Let's Connect</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
