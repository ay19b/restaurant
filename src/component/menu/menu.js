import React from 'react'
import './menu.css'
import Catg from './catg'
import {Typography,Container} from '@material-ui/core'


function Menu(){
    return(
        <div className="Menu" id="menu">
           
            <Typography variant='h4' className="design">Specialties</Typography>
            <Typography variant='h4' className='head-menu'>Our Menu</Typography> 
            <Container>
            <div className="Categorys">
               <Catg cag="Breakfast"/>
               <Catg cag="Lunch"/>
               <Catg cag="Dinner"/>
               <Catg cag="Desserts"/>
               <Catg cag="Wine Card"/>
               <Catg cag="Drinks & Tea"/>
            </div>
            </Container> 
        </div>
    )
}
export default Menu