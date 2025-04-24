import React from 'react'
import './Hero.css'
import cropped_image from '../../assets/cropped_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={cropped_image} alt="" />
      <h1><span>I'm Obiri Anthony,</span> a backend developer based in Kenya.</h1>
      <p>I am a backend and frontend developer from Nakuru, Kenya with experince in developing server side systems using javascript</p>
      <div className="hero-action">
        <div className="hero-connect">Let's Connect</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
