import React, {useState,useEffect } from "react";
import {Typography, Container,Grid,Badge,Button,InputAdornment,TextField} from '@material-ui/core'
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
         
          <Typography variant='h4'>{cag}</Typography>
               {Data
                  .filter((filter) => filter.category === cag)
                  .map((product)=>{
                      
                        return(
                           <div className="product" key={product.id} data-aos="fade-up"data-aos-once="true">
                              <div className="dtl-prod" >
                                <img src={product.image} />
                                <div className='center'>
                                  <Typography variant='h6' className="name">{product.product}</Typography>
                                  <Typography variant='h6' className='recipe'>{product.desc}</Typography>
                                </div>
                                
                                <Typography variant='h6'className='price'>{product.price}</Typography>
                              </div>
                              
                           </div>
                           
                        )
                    })
                }
               
       </div>
    )
}
export default Catg;