import React from 'react'
import "../Style/Header.css"
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import logo from "../assats/amazon_logo-removebg-preview.png"

const Header = ({size}) => {
  return (
    <div className='header_container'>
  <div className="header_icon">
    <Link to={"/"}><img src={logo} alt="" /></Link>
  </div>
  <div className="header_input">
    <input type="text" placeholder='Search Amazon.in' />
    <AiOutlineSearch />
  </div>
  <div className="header_cart">
 <Link to={"/cart"}><AiOutlineShoppingCart/></Link>
    <span>{size}</span>
  </div>

    </div>
  )
}

export default Header
