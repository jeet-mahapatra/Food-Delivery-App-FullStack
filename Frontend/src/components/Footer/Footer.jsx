import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'
import {Link} from "react-router-dom"


const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>"Experience delicious, freshly prepared meals delivered fast to your doorstep. Our food shop offers affordable, high-quality dishes made with love, ensuring a delightful and satisfying dining experience every time you order!" 
            </p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <a href="#navbar"><li>Go To Top</li></a>
               
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-212-456-7890</li>
                <li>contact@tasty.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 © tastyfood123.vercel.app - All Right Reserved</p>
    </div>
  )
}

export default Footer
