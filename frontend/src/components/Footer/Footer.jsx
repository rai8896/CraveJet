import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='foot-img'/>
                <p>This website is designed to demonstrate the functionality of a modern food delivery platform. Here, you can experience browsing through a diverse menu of dishes. Thank you for visiting.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 98765 43210 </li>
                    <li>contact@cravejet.com</li>
                </ul>
            </div>
        </div>    
        <hr />    
        <p className="footer-copyright"> &copy; CraveJet. All Rights Reserved | Privacy Policy </p>
    </div>
  )
}

export default Footer