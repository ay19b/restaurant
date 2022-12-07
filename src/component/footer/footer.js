import React, {useEffect } from "react";
import './footer.css'
import {Typography, Container,Grid,Button} from '@material-ui/core'
import {FiInstagram} from 'react-icons/fi'
import {BsTwitter} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import img1 from '../../images/insta-1.webp'
import img2 from '../../images/insta-2.webp'
import img3 from '../../images/insta-3.webp'
import img4 from '../../images/insta-4.webp'
import img5 from '../../images/insta-5.webp'
import img6 from '../../images/insta-6.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return (
      <div className="footer" id="contact">
      <div className="head">
       <Container>
         <Typography variant='h4'>We Make Delicious & Nutritious Food</Typography>
         <Button>Book A Table Now</Button>
       </Container>
      </div>
      <Container>
      <Grid container spacing={2}>
         <Grid item md={3} sm={5} xs={10}>
           <Typography variant='h4' className="header">Taste.it</Typography>

           <div className='inf-item'>
              <Typography>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</Typography>
             <div className="icons" >
              <Typography variant='h6' className="icon">
                   <BsTwitter />
               </Typography>
              <Typography variant='h6' className="icon">
                  <GrFacebookOption />
              </Typography>
              <Typography variant='h6' className="icon">
               <FiInstagram />
              </Typography>
             </div>
           </div>
         </Grid>
         <Grid item md={3} sm={5} xs={10}>
           <Typography variant='h4'className="header">Open Hours</Typography>
           <div className='inf-item'>
            <li><Typography variant="subtitle1">Monday</Typography> <Typography variant="subtitle1">9:00 - 24:00</Typography></li>
            <li><Typography variant="subtitle1">Tuesday</Typography> <Typography variant="subtitle1">9:00 - 24:00</Typography></li>
            <li><Typography variant="subtitle1">Wednesday</Typography> <Typography variant="subtitle1">9:00 - 24:00</Typography></li>
            <li><Typography variant="subtitle1">Thursday</Typography> <Typography variant="subtitle1">9:00 - 24:00</Typography></li>
            <li><Typography variant="subtitle1">Friday</Typography> <Typography variant="subtitle1">9:00 - 24:00</Typography></li>
            <li><Typography variant="subtitle1">Saturday</Typography> <Typography variant="subtitle1">9:00 - 24:00</Typography></li>
            <li><Typography variant="subtitle1">Sunday</Typography> <Typography variant="subtitle1">Closed</Typography></li>
           </div>
         </Grid>
         <Grid item md={3} sm={5} xs={10}>
            <Typography variant='h4'className="header">Instagram</Typography>
            <div className='inf-item'>
              <div className="photo">
                <img src={img1} alt='img1'/>
                <img src={img2} alt='img2'/>
                <img src={img3} alt='img3'/>
                <img src={img4} alt='img4'/>
                <img src={img5} alt='img5'/>
                <img src={img6} alt='img6'/>
              </div>
            </div>
         </Grid>
         <Grid item md={3} sm={5} xs={10}>
         <Typography variant='h4'className="header">Newsletter</Typography>
           <div className='inf-item'>
             <Typography>Far far away, behind the word mountains, far from the countries.</Typography>
             <input placeholder="Enter email address"/>
             <Button>Subscribe</Button>
           </div>
         </Grid>
      </Grid>
      </Container>
   </div>
    )
}

export default Footer;
