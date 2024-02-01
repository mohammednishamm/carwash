import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { Authcontext } from './context/AuthContext'
const Login = () => {
  const {login}=useContext(Authcontext)

    const [input, setInput]=useState({
      username:"",
      password:""
    })
    const navigation=useNavigate()



    const handleChange=(e)=>{
      setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleSubmit=async ()=>{

      try {
        await login(input)
        navigation("/")
      } catch (err) {
        console.log(err.response.data)
      }
    }

    console.log(input)
  return (
    <div className='lo1'>
        <div className='lo2'>
            <div className='login1'>
           <div className='sup'> <Link to='/signup'>Sign Up</Link></div>
               <span className='signin'>SIGN IN</span>
               <div className='inpmain'>
                <input className='input1' name='username' type="text" placeholder='USERNAME' onChange={handleChange}/>
                <input className='input1' name='password' type="text" placeholder='PASSWORD' onChange={handleChange} />
               </div>
               <button onClick={handleSubmit} className='button1' >LET'S GO</button>
            </div>
            <div className='login2'>
                <img className='sideimg' src="https://wallpapercave.com/wp/wp2221882.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Login