import React from 'react'
import "../Style/Footer.css"
import logo from "../assats/amazon_logo-removebg-preview.png"
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="copy_right">
      <p>© 2018 CommerceM4 theme. Powered By</p>
      </div>
      <div className="social_icons">
        <AiOutlineInstagram />
        <BiLogoFacebook />
        <AiOutlineTwitter />
        <AiOutlineGithub />
      </div>
    </div>
  )
}

export default Footer
