import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import search_icon from '../../assets/search.svg'
import bell_icon from '../../assets/bell.svg'
import profile_icon from '../../assets/profile.svg'
import dropdown_icon from '../../assets/dropdown.svg'
import { logout } from '../../firebase'

const Navbar = () => {

  const navref = useRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY >= 80){
        navref.current.classList.add('nav-dark')
      }else{
        navref.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt='' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="" className='icons'/>

        <div className='navbar-profile'>
          <img src={profile_icon} alt="" className='profile'/>
          <img src={dropdown_icon} alt=""/>

          <div className="dropdown">
            <p onClick={() =>{logout()}}>Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
