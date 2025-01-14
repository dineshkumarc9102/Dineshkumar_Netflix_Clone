import React from 'react'
import './Footer.css'
import youtube from "../../assets/youtube.svg"
import twitter from "../../assets/twitter.svg"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Perferences</li>
        <li>Corporate Information</li>
        <li>Contact Us </li>
      </ul>
      <p className='copyright'>© 1997 - 2025 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
