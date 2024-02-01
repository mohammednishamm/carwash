import React from 'react'
import car from '../assets/car-wash.png'
const Menu = () => {
  
  return (
    <div className='mmenu'>
        <div className='menu-main'>
            <img className='menu-car' src={car} alt="" />
            <span>Contactless Washing</span>
            <span>Vestibulum tortor risus, rutrum at congue sed ultricies finibus.</span>
        </div>
        <div className='menu-main'>
            <img className='menu-car' src={car} alt="" />
            <span>Contactless Washing</span>
            <span>Vestibulum tortor risus, rutrum at congue sed ultricies finibus.</span>
        </div>
        <div className='menu-main'>
            <img className='menu-car' src={car} alt="" />
            <span>Contactless Washing</span>
            <span>Vestibulum tortor risus, rutrum at congue sed ultricies finibus.</span>
        </div>
        <div className='menu-main'>
            <img className='menu-car' src={car} alt="" />
            <span>Contactless Washing</span>
            <span>Vestibulum tortor risus, rutrum at congue sed ultricies finibus.</span>
        </div>
    </div>
  )
}

export default Menu