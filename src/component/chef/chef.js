import React, {useEffect } from "react";
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
            <h2 className="design">Chef</h2>
            <span className="header">Our Master Chef</span> 
            <div className="list-chef">

            {Data.map((item)=>{
                const{id,image,name,job,disc,delay} = item
                return(
                
                <div className="chef" key={id} data-aos="fade-up" data-aos-delay={delay}>
                    <img src={image} />
                    <h3>{name}</h3>
                    <span>{job}</span>
                    <p>{disc}</p>
					<FiBookmark />
                 </div>
                 
				 
                 )
               })}
             
            </div>

            <div className="detail" >
                <div className='img'><img src={Chef4} /></div>
                <div className='img'><img src={image} /></div>
                <div className="inf-detail" data-aos="fade-left">
                    <h1>This is our secrets</h1>
                    <span>Perfect Ingredients</span>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. </p>
                    <button>Learn more</button>
                </div>
                
            </div>
            
        </div>
    )
}
export default Chef