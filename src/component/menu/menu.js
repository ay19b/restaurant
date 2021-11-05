import React from 'react'
import './menu.css'
import Catg from './catg'


function Menu(){
    return(
        <div className="Menu" id="menu">
            <h2 className="design">Specialties</h2>
            <span className='head-menu'>Our Menu</span> 
            <div className="Categorys">
               <Catg cag="Breakfast"/>
               <Catg cag="Lunch"/>
               <Catg cag="Dinner"/>
               <Catg cag="Desserts"/>
               <Catg cag="Wine Card"/>
               <Catg cag="Drinks & Tea"/>
            </div>
        </div>
    )
}
export default Menu