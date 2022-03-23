import React, {useState,useEffect } from "react";
import {Typography,Button,TextField,Container} from '@material-ui/core'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputPicker } from 'rsuite';
import Aos from 'aos'
import 'aos/dist/aos.css'


import './about.css'

function About() {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(()=>{
	  Aos.init({duration:2000})
  },[]);
  
    return (
        <div  id="about">
           <Container>
           <div className='contAbout'>   
            <div className='card'>
              <Typography variant='h4' className='header'>Book your Table</Typography>
              <TextField
                   id="outlined-hidden-label-small"
                   size="small"
                   variant="outlined"
                   placeholder="Name"
                   className="input"
              />
              <TextField
                   id="outlined-hidden-label-small"
                   size="small"
                   variant="outlined"
                   placeholder="Email"
                   className="input"
              />
              <TextField
                   id="outlined-hidden-label-small"
                   size="small"
                   variant="outlined"
                   placeholder="Phone"
                   className="input"
              />
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholder='Date'/>
              <InputPicker  placeholder='Guest'/>
              <Button variant="outlined">Book Your Table Now</Button>
            </div>
            <div className='disc-about' data-aos="fade-left" data-aos-once="true">
                <Typography variant='h3' className="design">About</Typography>
                <Typography variant='h4' style={{color:'black'}}>Welcome to Taste.it</Typography>
                <Typography>On her way she met a copy.
                     The copy warned the Little Blind Text,
                     that where it came from it would have 
                     been rewritten a thousand times and
                     everything that was left from its origin would
                     be the word "and" and the Little Blind Text 
                     should turn around and return to its own, safe country.
                     A small river named Duden flows
                     by their place and supplies it with the necessary regelialia.
                     It is a paradisematic country, in which roasted parts of
                     sentences fly into your mouth
                </Typography>
            </div>
            </div>  
          </Container>    
        </div>
    )
}

export default About;
