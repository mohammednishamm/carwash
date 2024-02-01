import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
const Signup = () => {

  const [input,setInputs]=useState({
    username:'',
    password:'',
    email:'',
    name:'',
    phoneno:'',
  })
  const [err,setErr]=useState(null)

  const navigation=useNavigate()

  const handleChange=(e)=>{
    setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async ()=>{
    try {
      await axios.post("http://localhost:8600/api/auth/register",input)
      navigation("/login")
    } catch (error) {
      setErr(error.response.data)
    }
  }
  console.log(input)
  return (
   
            <div className='lo1'>
        <div className='lo2'>
            <div className='login1'>
            <div className='sup'>  <Link to='/login'>   Sign in</Link></div>
               <span className='signin'>SIGN UP</span>
               <div className="sji">
                <input className='input1' name='username' type="text" placeholder='USERNAME' onChange={handleChange}/>
                <input className='input1' name='password' type="text" placeholder='PASSWORD' onChange={handleChange}/>
                <input className='input1' name='email' type="text" placeholder='E-MAIL' onChange={handleChange} />
                <input className='input1' name='name' type="text" placeholder='NAME' onChange={handleChange} />
                <input className='input1' name='phoneno' type="text" placeholder='PHONE NO' onChange={handleChange} />

               </div>
               {err && err}
               <button className='button1 kada' onClick={handleSubmit}>SIGN UP</button>
            </div>
            <div className='login2'>
                <img className='sideimg' src="https://wallpapercave.com/wp/wp2221882.jpg" alt="" />
            </div>
        </div>
    </div>
   
  )
}

export default Signup