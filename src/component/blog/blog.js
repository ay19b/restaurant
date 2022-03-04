import React, {useEffect } from "react";
import {Typography, Container,Button} from '@material-ui/core'
import './blog.css'
import {FaRegComment} from 'react-icons/fa'
import Img1 from '../../images/image_1.webp'
import Img2 from '../../images/image_2.webp'
import Img3 from '../../images/image_3.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'



function Blog() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return(
       <div className="blog" id="blog">
         <Container>
           <Typography variant='h4' className="design">Blog</Typography>
           <Typography variant='h6' className="header">Recent Blog</Typography>
           <div className='list-blog'>
           
            <div className='blg'  data-aos="fade-up" data-aos-delay='100' data-aos-once="true">
              <img src={Img1} alt='img1'/>
              <div className="dtl-blg">
               <Typography variant='body1' className="date">August 3, 2020 Admin</Typography>
               <Typography variant='h6'>Even the all-powerful Pointing has no control about the blind texts</Typography>
               <div className="tls">
                <Button>Read more</Button>
                <Typography variant='body1' className="cmnt">
                 <FaRegComment />3
                </Typography>
               </div>
             </div>

            </div>
            <div className='blg'  data-aos="fade-up" data-aos-delay='250' data-aos-once="true">
              <img src={Img2} alt='img2' />
              <div className="dtl-blg">
               <Typography variant='body1' className="date">August 3, 2020 Admin</Typography>
               <Typography variant='h6'>Even the all-powerful Pointing has no control about the blind texts</Typography>
               <div className="tls">
                <Button>Read more</Button>
                <Typography variant='body1' className="cmnt">
                 <FaRegComment />3
                </Typography>
               </div>
             </div>

            </div>
            <div className='blg'  data-aos="fade-up" data-aos-delay='400' data-aos-once="true">
              <img src={Img3} alt='img3'/>
              <div className="dtl-blg">
               <Typography variant='body1' className="date">August 3, 2020 Admin</Typography>
               <Typography variant='h6'>Even the all-powerful Pointing has no control about the blind texts</Typography>
               <div className="tls">
                <Button>Read more</Button>
                <Typography variant='body1' className="cmnt">
                 <FaRegComment />3
                </Typography>
               </div>
             </div>

            </div>
            
           </div>
           </Container>
        </div>
       
    )
}
export default Blog