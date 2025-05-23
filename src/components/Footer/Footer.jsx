import React from 'react'
import './Footer.css'
import Obiri_clear from '../../assets/Obiri_clear.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={Obiri_clear} alt="" />
            <p>I am a software developer from Kenya with a lot of experience</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="tooter-bottom-left"> © 2025 Obiri Anthony, All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Terms of service</p>
            <p>Privacy policy</p>
            <p>Let's connect</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
