import React, { useContext, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Scontext } from './Scontext'
const Slogin = () => {
  const {slogin}=useContext(Scontext)
    const [input, setInput]=useState({
        username:"",
        password:""
      })

      const navigate=useNavigate()

    const handleChange=(e)=>{
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }  
   
      const handleSubmit=async ()=>{
        try {
        await slogin(input)
          navigate("/sdata")
        } catch (error) {
          console.log(error)
        }
      }
      console.log(input)

    return (
      <div className='lo1'>
          <div className='lo2'>
              <div className='login1'>
           
                 <span className='signin'>SHOP SIGN IN</span>
                 <div className='inpmain'>
                  <input className='input1' name='username' type="text" placeholder='USERNAME' onChange={handleChange}/>
                  <input className='input1' name='password' type="text" placeholder='PASSWORD' onChange={handleChange}  />
                 </div>
                 <button className='button1' onClick={handleSubmit} >LET'S GO</button>
              </div>
              <div className='login2'>
                  <img className='sideimg' src="https://wallpapercave.com/wp/wp2221882.jpg" alt='' />
              </div>
          </div>
      </div>
    )
  }
  

export default Slogin
