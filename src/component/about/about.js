import React, {useState,useEffect } from "react";
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
        <div className='about' id="about">
            <div className='card'>
              <h1>Book your Table</h1>
              <input placeholder='Name' className="input"/>
              <input placeholder='Email' className="input"/>
              <input placeholder='Phone' className="input"/>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} placeholder='Date'/>
              <InputPicker  placeholder='Guest'/>
              <button>Book Your Table Now</button>
            </div>
            <div className='disc-about' data-aos="fade-left">
                <h2 className="design">About</h2>
                <h1>Welcome to Taste.it</h1>
                <p>On her way she met a copy.
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
                </p>
            </div>
        </div>
    )
}

export default About;
