import React from 'react'
import Bookcaro from '../book/Bookcaro'
import Navbar from './Navbar'
import Bpro from '../book/Bpro'
import Btime from '../book/Btime'
import BookingApp from '../book/Btime'
import Badddmore from '../book/Badddmore'
import Bconfirm from '../book/Bconfirm'
import Bshop from '../book/Bshop'
import { Bookcontextprovider } from '../book/Bookcontext'

const Booking = () => {

  return (
    <div>
    <Bookcontextprovider>
        <Navbar/>
      <Bookcaro/>
      <Bshop/>
      <Bpro/>
      <Badddmore/>
      <BookingApp/>
      <Bconfirm/>
      </Bookcontextprovider>

    </div>
  )
}

export default Booking