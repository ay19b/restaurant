import React, {useState,useEffect } from "react";
import Data from './data'
import './menu.css'
import Aos from 'aos'
import 'aos/dist/aos.css'


function Catg({cag}) {
	useEffect(()=>{
	  Aos.init({duration:2000})
    },[]);
    return(
       <div className='category' >
          <h3>{cag}</h3>
          {Data
                    .filter((filter) => filter.category === cag)
                    .map((product)=>{
                      
                        return(
                          
                          
                           <div className="product" key={product.id} data-aos="fade-up">
                              <div className="dtl-prod" >
                                <img src={product.image} />
                                <h2>{product.product}</h2>
                                <h3>{product.price}</h3>
                              </div>
                              <span>{product.desc}</span>
                           </div>
                           
                        )
                    })
                }
       </div>
    )
}
export default Catg;