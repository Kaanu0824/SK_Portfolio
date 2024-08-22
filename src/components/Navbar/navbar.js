import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/logo-1.png';
import Menu from '../../assets/menu.png';
import './navbar.css';

const Navbar = () => {
  const [showMenu , setShowMenu] =useState (false);
  return (
    <section className='navbar'>

        <img src={logo}  alt='logo' className='logo'/>

        <div className='desktopmenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'  > Home </Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' > About</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'  > Experience </Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'  > Education </Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'  > Contact </Link>
        </div>
        
        {/* <button className='desktopmenuBtn' onClick={()=>{
          document.getElementById ('contact').scrollIntoView({behavior:'smooth'});
        }} >
            <img src={contactImg} alt='contactImg' className='desktopmenuImg'/> Contact Me
        </button> */}

        <img src={Menu} alt='Menu' className='monMenu' onClick={()=> setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)} > Home </Link>
            <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}  > About</Link>
            <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}  > Experience </Link>
            <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}  > Education </Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>setShowMenu(false)}  > Contact </Link>
        </div>
    
    </section>

  )
}

export default Navbar