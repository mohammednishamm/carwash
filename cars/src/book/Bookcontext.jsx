import React, { createContext, useState } from 'react'


export const Bookcontext=createContext()


export const Bookcontextprovider=(props)=>{
    const [select,setSelect]=useState(null)
    const [vehicle, setVehicle]=useState('')
    const [type, setType]=useState(null)
    const [dateTime, setDateTime] = useState({
        date: "",
        time: ""
      });



    const contextValue={select,setSelect,vehicle,setVehicle,type,setType,dateTime,setDateTime}

    return(
        <Bookcontext.Provider value={contextValue}>{props.children}</Bookcontext.Provider>
    )
}