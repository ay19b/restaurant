import React, {useEffect } from 'react';
import {Typography,Container} from '@material-ui/core'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import {Data} from './data'
import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'




function Home(){

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  useEffect(()=>{
	  Aos.init({duration:2000})
  },[]);

    return(
      <div className='home' id="home">
       
        <div className="overlay"></div>
        
          <AutoplaySlider
              play={true}
              cancelOnInteraction={false}
              interval={3000}
          >
               
                 {Data.map((item)=>{
                const{id,img,header,desc,inf} = item
                return(
               
                  <div key={id} className='slider' >
                     <img src={img} alt={desc}/>
                     <div className="disc" data-aos="fade-up" data-aos-once="true">
                       <Typography variant='h6'>{header}</Typography>
                       <Typography variant='h1'>{desc}</Typography>
                       <Typography className='inf'>{inf}</Typography>
                     </div>
                  </div>
                 
                 )
              })}
            
            </AutoplaySlider>
            
         
     </div>
    )
}

export default Home;