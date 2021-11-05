import React, {useEffect } from "react";
import './blog.css'
import {FaRegComment} from 'react-icons/fa'
import Data from './data'
import Aos from 'aos'
import 'aos/dist/aos.css'



function Blog() {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return(
       <div className="blog" id="blog">
           <h1 className="design">Blog</h1>
           <span className="header">Recent Blog</span>
           <div className="list-blog">
               {Data.map((item)=>{
                const{id,image,date,header,delay} = item
                return(
                
                <div className='blg' key={id} data-aos="fade-up" data-aos-delay={delay}>
                    <img src={image} />
                    <div className="dtl-blg">
                      <span className="date">{date}</span>
                      <h3>{header}</h3>
                      <div className="tls">
                         <button>Read more</button>
                         <div className="cmnt">
                           <FaRegComment />
                           <span>3</span>
                         </div>
                      </div>
                    </div>
                 </div>
                 
                 )
               })}

           </div>
       </div>
    )
}
export default Blog