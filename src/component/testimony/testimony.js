import React, {useEffect } from "react";
import { Carousel } from 'rsuite';
import Data from './data'
import "./testimony.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

function Testimony() {
     useEffect(()=>{
	    Aos.init({duration:2000})
     },[]);
    return (
        <div className='testimony' id="reservation">
             <div class="disc-testi">
               <h2 className="design">Testimony</h2>
               <span className='head-menu'>Happy Customer</span> 
               
            <Carousel className="custom-slider" >
             {Data.map((item)=>{
                const{id,image,comment,name,type,icon} = item
                return(
                
                  <div key={id} className='slid' data-aos="fade-up">
                       <p>{comment}</p>
                       <img src={image} className='image'/>
                       <h1>{name}</h1>
                       <span className='inf'>{type}</span>
                  </div>
                 
                 )
               })}
            </Carousel>
             </div>
        </div>
    )
}

export default Testimony
