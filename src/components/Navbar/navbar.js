import React from 'react';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png';
import logo from '../../assets/logo.png';
import './navbar.css';

const navbar = () => {
  return (
    <section className='navbar'>

        <img src={logo}  alt='logo' className='logo'/>

        <div className='desktopmenu'>
            <Link className='desktopMenuListItem'> Home </Link>
            <Link className='desktopMenuListItem'> About</Link>
            <Link className='desktopMenuListItem'> Education </Link>
            <Link className='desktopMenuListItem'> Experience </Link>
        </div>
        
        <button className='desktopmenuBtn'>
            <img src={contactImg} alt='contactImg' className='desktopmenuImg'/> Contact Me
        </button>
    
    </section>

  )
}

export default navbar