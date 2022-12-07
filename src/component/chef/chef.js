import React, {useEffect } from "react";
import {Typography, Container,Button} from '@material-ui/core'
import './chef.css'
import Data from './data'
import Chef4 from '../../images/chef-4.webp'
import image from '../../images/bg_4.webp'
import {FiBookmark} from "react-icons/fi"
import Aos from 'aos'
import 'aos/dist/aos.css'


function Chef() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return (
        <div className="master-chef" id="chef">
          
            <Typography variant='h4' className="design">Chef</Typography>
            <Typography variant='h4' className="header">Our Master Chef</Typography> 
            <Container>
            <div className="list-chef">

            {Data.map((item)=>{
                const{id,image,name,job,disc,delay} = item
                return(
                
                <div className="chef" key={id} data-aos="fade-up" data-aos-delay={delay}data-aos-once="true">
                    <img src={image} />
                    <Typography variant='h6'className="name">{name}</Typography>
                    <Typography className="job">{job}</Typography>
                    <Typography>{disc}</Typography>
					<FiBookmark />
                </div>
                 )
               })}
             
            </div>
            </Container>

            <div className="detail">
              <Container>  
              <div className='cont-detail'>     
                <div className='img'><img src={Chef4} /></div>
                <div className='img'><img src={image} /></div>
                <div className="inf-detail" data-aos="fade-left" data-aos-once="true">
                    <Typography variant='h4' className="design">This is our secrets</Typography>
                    <Typography variant='h4' className="header">Perfect Ingredients</Typography>
                    <Typography>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </Typography>
                    <Button>Learn more</Button>
                 
                </div>
                </div>
              </Container>  
            </div>
             
        </div>
    )
}
export default Chef