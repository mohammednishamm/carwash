import React, { createContext, useState } from 'react'
import axios  from 'axios'

export const Ucontext=createContext()


export const UcontextProvider=(props)=>{
   const [currentshop,setCurrentShop]=useState(null)

    const slogin=async (input)=>{
        
       const res=   await axios.post("http://localhost:8600/api/user/ulogin", input)
          setCurrentShop(res.data)
       
    }
    console.log("this",currentshop)

      const value={slogin, currentshop}
    return(
        <Ucontext.Provider value={value}>{props.children}</Ucontext.Provider>
    )
}