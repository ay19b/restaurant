import React, { useState, useEffect } from 'react';
import { Navbar, Nav} from 'rsuite';
import {FaFacebookF,FaDribbble} from 'react-icons/fa';
import {RiInstagramFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
import 'rsuite/dist/rsuite.min.css'
import './header.css'

function Header() {
	  const [showLinks, setShowLinks] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const [nav, setNav] = useState(false);


    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    
   const changeBackground=()=>{
      if(window.scrollY>=60){
        setNavbar(true)
        setNav(false)
      }else{
        setNavbar(false)
        setNav(true)
      }
    }

  useEffect(() => {
    changeBackground()
    window.addEventListener('scroll',changeBackground)  
  })
	
	
	
	
    return (

      <>
      <nav className={nav?'nav active': 'nav'}>
         <span>Phone no: +00 1234 567 or email us: emailsample@email.com</span>
    
         <ul>Mon - Fri / 9:00-21:00, Sat - Sun / 10:00-20:00
           <li><FaFacebookF /></li>
           <li><RiInstagramFill /></li>
           <li><BsTwitter /></li>
           <li><FaDribbble /></li>
    
         </ul>
    
      </nav>

      
         <nav className={navbar?'active': ''}>
            <div className="navbar-container">
              <div className="logo"><span>Taste</span>.it</div>
            
               <ul className={showLinks ?"list-nav":"list-nav active"} >
              
                <li className="item-nav">
                  <a href="#home" onClick={toggleLinks}>
                    HOME
                  </a>
                </li>
                <li className="item-nav" onClick={toggleLinks}>
                  <a href="#about" >
                    ABOUT
                  </a>
                </li>
                <li className="item-nav">
                   <a href="#chef" onClick={toggleLinks}>
                   CHEF
                   </a>
                </li>
			         	<li className="item-nav">
                  <a href="#menu" onClick={toggleLinks}>
                    MENU
                  </a>
                </li>
                <li className="item-nav">
                  <a href="#reservation" onClick={toggleLinks}>
                    RESERVATION
                  </a>
                </li>
                <li className="item-nav">
                   <a href="#blog" onClick={toggleLinks}>
                   blog
                   </a>
                </li>
                <li className="item-nav">
                   <a href="#contact" onClick={toggleLinks}>
                   CONTACT
                   </a>
                </li>
               </ul>
               <i className="menu fas fa-bars" onClick={toggleLinks}></i>
            </div>
            
          </nav> 

  </>
    )
}

export default Header;
