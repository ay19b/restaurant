import React, {useEffect } from "react";
import {Typography,Container} from '@material-ui/core'
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
             <Container>     
             <div className='disc-header'>    
               <Typography variant='h4' className="design">Testimony</Typography>
               <Typography variant='h4' className='header'>Happy Customer</Typography> 
             </div> 
            <Carousel className="custom-slider" >
             {Data.map((item)=>{
                const{id,image,comment,name,type} = item
                return(
                
                  <div key={id} className='slid' data-aos="fade-up" data-aos-once="true">
                       <Typography variant='h6' className='prg'>{comment}</Typography>
                       <img src={image} alt={name} className='image'/>
                       <Typography variant='h6'>{name}</Typography>
                       <Typography className='inf'>{type}</Typography>
                  </div>
                 
                 )
               })}
            </Carousel>
            </Container> 
          </div>
           
        </div>
    )
}

export default Testimony
