import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    
  return (
    <div>
      <div className='navbar'> 
        <img className='navimg' src="http://aqualine.like-themes.com/wp-content/themes/aqualine/assets/images/logo-white.png" alt="" />
       <div className="nav1">
            <span>Home</span>
         <Link to="/booking">   <span>Booking</span></Link>
            <span>About us</span>
            <span>Products</span>
            <span>Blog</span>
            <span>Contacts</span>
          <Link>  <span>Cart</span></Link>

       </div>

      </div>
    </div>
  )
}

export default Navbar
