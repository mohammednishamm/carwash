import React from 'react'
import Caro from './Caro'
import Modern from './Modern'
import Menu from './Menu'
import Card from './Card'
import Option from './Option'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Caro/>
        <Modern/>
        <Menu/>
        <Card/>
        <Option/> 
    </div>
  )
}

export default Home