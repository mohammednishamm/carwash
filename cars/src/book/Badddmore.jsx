import React, { useState } from 'react'
import door from '../assets/car-door.png'
import dia from "../assets/icons8-clock-48.png"
import pur from "../assets/purse.png"
const Badddmore = () => {


    const [more ,setMore]=useState([])
    
    const handleClick=(item)=>{
        if (more.some((existingItem) => existingItem.id === item.id)) {
            setMore((prev) => prev.filter((existingItem) => existingItem.id !== item.id));
        } else {
            setMore((prev) => [...prev, item]);
        }

    }


    const add=[
        {
        id:1,
        name:"Leather Restoration",
        discimination:"Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt.",
        img:door,
        time:30,
        price:30
    },
    {
        id:2,
        name:"Window Cleaning",
        discimination:"Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt.",
        img:door,
        time:10,
        price:10
    },
    {
        id:3,
        name:"Hard Stain Removing",
        discimination:"Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt.",
        img:door,
        time:5,
        price:10
    },
    {
        id:4,
        name:"Air Fresher",
        discimination:"Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt.",
        img:door,
        time:25,
        price:25
    },
    {
        id:5,
        name:"Interior Polishing",
        discimination:"Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt.",
        img:door,
        time:15,
        price:12
    },
    {
        id:6,
        name:"Tire Blacking",
        discimination:"Nulla vel tempus diam. Nunc vulputate, quam sit amet commodo tincidunt.",
        img:door,
        time:10,
        price:17
    },



]



  return (
    <div className='amain'>
        <span className='sooi'> STEP 02 </span>
      <div className="amian1">

   {add.map((item)=>(    
        <div className='amenu' key={item.id}>
            <div>
                <img className='adoor' src={item.img} alt="" />
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
                <button className={more.some((selectedItem) => selectedItem.id === item.id)? "aadd sgreen": "aadd"} onClick={()=>handleClick(item)}>   {more.some((selectedItem) => selectedItem.id === item.id) ? 'REMOVE' : 'ADD'}
                            </button>
            </div>
   
        </div>
        ))} 
       
      </div>
      <span className='sooi astep3'> STEP 03 </span>
    </div>
  )
}

export default Badddmore