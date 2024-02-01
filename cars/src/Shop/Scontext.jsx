import React, { createContext, useState } from 'react'
import axios  from 'axios'

export const Scontext=createContext()


export const ScontextProvider=(props)=>{
   const [currentshop,setCurrentShop]=useState(null)

    const slogin=async (input)=>{
        
       const res=   await axios.post("http://localhost:8600/api/shop/login", input)
          setCurrentShop(res.data)
       
    }
    console.log("this",currentshop)

      const value={slogin, currentshop}
    return(
        <Scontext.Provider value={value}>{props.children}</Scontext.Provider>
    )
}