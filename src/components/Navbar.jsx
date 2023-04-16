import React from 'react'
import {Link} from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
         <div className='links'>
            <Link to="/">Shop</Link>
            <Link to='/cart'><ShoppingCart size={32}/></Link>
         </div>
         
         </div>
  )
}


//https://www.youtube.com/watch?v=tEMrD9t85v4 13:57