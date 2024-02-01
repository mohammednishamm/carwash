import React, { useContext, useEffect, useState } from 'react'
import door from '../assets/car-door.png'
import dia from "../assets/icons8-clock-48.png"
import pur from "../assets/purse.png"
import { Bookcontext } from './Bookcontext'
import axios from "axios"

const Bshop = () => {
   const {select,setSelect}=useContext(Bookcontext)
   const [data,setData]=useState([])
   
   const handleChange=async ()=>{
    try {
        const res= await axios.get("http://localhost:8600/api/shop/shops")
        setData(res.data)
        
    } catch (error) {
        console.log(error)
    }
    
   }
   useEffect(()=>{
    handleChange()
   },[])


   
    
 


  return (
    <div>
      <div className='amain'>
       <span className='select'>SELECT SHOP</span>
      <div className="amian1">

   {data.map((item)=>(    
        <div className='amenu' key={item.id}>
            <div>
                <img className='adoor' src={door} alt="" />
            </div>
            <div className='aside'>
                <span className='aside1'>{item.name}</span>
                <span className='aside2' >{item.discimination}</span>
                <div className='adt'>
                    <img className='adia' src={dia} alt="" />
                    <span className='atime'>{item.time} min</span>
                    <img className='adia amar' src={pur} alt="" />
                    <span className='atime'>$ {item.price}</span>
                </div>                                                           
                <button className={select ? (item.id === select.id ? "neww" : "aadd"):'aadd'} onClick={()=>setSelect(item)}>{select ? (item.id === select.id ? "Selected" : "select"):'select'}</button>
            </div>
   
        </div>
        ))} 
       
      </div>
    </div>
    </div>
  )
}

export default Bshop
