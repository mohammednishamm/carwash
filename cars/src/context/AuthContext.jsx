import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'

export const Authcontext=createContext()


export const AuthContextProvider=(props)=>{
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem("user1")) || null)


    const login=async(inputs)=>{
        const res= await axios.post("http://localhost:8600/api/auth/login", inputs,{withCredentials:true})
        setCurrentUser(res.data)
    }

    useEffect(()=>{
        localStorage.setItem("user1",JSON.stringify(currentUser))
    },[currentUser])


    const contextValue={login}

    return(
        <Authcontext.Provider value={contextValue}>{props.children}</Authcontext.Provider>
    )
}