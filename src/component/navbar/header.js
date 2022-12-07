import React, { useState, useEffect } from 'react';
import {Typography,Container} from '@material-ui/core'
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
    if(showLinks){
      setNavbar(false)
    }
  })
	
	
	
	
    return (

      <>
      <nav className={nav?'nav active': 'nav'}>
        
         <Typography variant='subtitle2'>Phone no: +00 1234 567 or email us: emailsample@email.com</Typography>
    
         <ul><Typography variant='subtitle2'>Mon - Fri / 9:00-21:00, Sat - Sun / 10:00-20:00</Typography>
           <li><Typography variant='subtitle2'><FaFacebookF /></Typography></li>
           <li><Typography variant='subtitle2'><RiInstagramFill /></Typography></li>
           <li><Typography variant='subtitle2'><BsTwitter /></Typography></li>
           <li><Typography variant='subtitle2'><FaDribbble /></Typography></li>
    
         </ul>
        
      </nav>
      
      
         <nav className={navbar ||showLinks ?'active': null}>
            <div className="navbar-container">
              <Typography variant='h4' className="logo">Taste.it</Typography>
            
               <ul className={showLinks ?"list-nav":"list-nav active"} >
              
                <li className="item-nav">
                <Typography variant='subtitle2'>
                  <a href="#home" onClick={toggleLinks}>
                   HOME
                  </a>
                </Typography> 
                </li>
                <li className="item-nav" onClick={toggleLinks}>
                <Typography variant='subtitle2'> 
                  <a href="#about" >
                    ABOUT
                  </a>
                 </Typography> 
                </li>
                <li className="item-nav">
                 <Typography variant='subtitle2'>
                   <a href="#chef" onClick={toggleLinks}>
                   CHEF
                   </a>
                 </Typography>  
                </li>
			         	<li className="item-nav">
                 <Typography variant='subtitle2'>  
                  <a href="#menu" onClick={toggleLinks}>
                    MENU
                  </a>
                  </Typography> 
                </li>
                <li className="item-nav">
                <Typography variant='subtitle2'> 
                  <a href="#reservation" onClick={toggleLinks}>
                    RESERVATION
                  </a>
                </Typography> 
                </li>
                <li className="item-nav">
                 <Typography variant='subtitle2'>
                   <a href="#blog" onClick={toggleLinks}>
                   blog
                   </a>
                  </Typography>  
                </li>
                <li className="item-nav">
                 <Typography variant='subtitle2'>
                   <a href="#contact" onClick={toggleLinks}>
                   CONTACT
                   </a>
                  </Typography> 
                </li>
               </ul>
               <i className="menu fas fa-bars" onClick={toggleLinks}></i>
            </div>
          </nav> 

  </>
    )
}

export default Header;