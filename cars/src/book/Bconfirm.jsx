import React, { useContext, useEffect, useState } from 'react'
import car from '../assets/sports-car.png'
import { Bookcontext } from './Bookcontext'
import axios from "axios"
const Bconfirm = () => {
    const { select, vehicle, type, dateTime } = useContext(Bookcontext);
    const [nisham, setNisham] = useState(select ? select.name : 'Not Selected');
    const typee = type ? type.name : 'Not Selected';
    const money = type ? type.price : 'Not selected';
    const date = dateTime ? dateTime.date : 'Not selected';
    const time = dateTime ? dateTime.time : 'Not selected'
    const id = select? select.id : 'not selected'
    const vehi= vehicle?vehicle : 'not selected'

    
  
  
    // Update 'nisham' in the input state when it changes
    
    const [input, setInput] = useState({
        fisrtname: "",
        lastname: "",
        email: "",
        phone: "",
        additional: "",
        shop: nisham,
        type:typee,
        cost:money,
        date:date,
        time:time,
        shopId:id,
        cartype:vehi
      });

      useEffect(() => {
        setNisham(select ? select.name : 'Not Selected');
        setInput((prevInput) => ({
          ...prevInput,
          shop: select ? select.name : 'Not Selected',
          type: type ? type.name : 'Not Selected',
          cost: type ? type.price : 'Not selected', 
          date : dateTime ? dateTime.date : 'Not selected',
          time : dateTime ? dateTime.time : 'Not selected',
          shopId : select? select.id : 'not selected',
          cartype: vehicle?vehicle : 'not selected'  
        }));
      }, [select,type,dateTime,vehicle]);



    const handleChange=(e)=>{
      setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }


   const handleClick=async ()=>{
       try {
          await axios.post("http://localhost:8600/api/booking/book" ,input,{withCredentials:true})
       } catch (error) {
        console.log(error)
       }
   }
    

  return (
    <div className='confirm'>
        <span className='sooi csooi'> STEP 04 </span>
        <span className='suii csuii'>Summary & Confirmation</span>
        <div className='cmain'>

            <div className="cmain1">
                <div className='cmia1'>
                    <img className='ccar' src={car} alt="" />
                    <span className='ctype'>CAR TYPE</span>
                    <span className='cpick'>{vehicle?vehicle:"choose"}</span>
                </div>
                <div className='cmia1'>
                    <img className='ccar' src={car} alt="" />
                    <span className='ctype'>WASHING PLAN</span>
                    <span className='cpick'>{typee}</span>
                </div>
                <div className='cmia1'>
                    <img className='ccar' src={car} alt="" />
                    <span className='ctype'>BOOKING DATE</span>
                    <span className='cpick'>{dateTime.date}</span>
                </div>
                <div className='cmia1'>
                    <img className='ccar' src={car} alt="" />
                    <span className='ctype'>BOOKING TIME</span>
                    <span className='cpick'>{dateTime.time}</span>
                </div>
                <div className='cmia1'>
                    <img className='ccar' src={car} alt="" />
                    <span className='ctype'>SHOP</span>
                    <span className='cpick'>{nisham}</span>
                </div>
                <div className='cmia1'>
                    <img className='ccar' src={car} alt="" />
                    <span className='ctype'>TOTAL PRICE</span>
                    <span className='cpick'>$ {money}.00 </span>
                </div>
            </div>
            <div className="cmain2">
                 <span className='cmain22'>Please input your <span className='yunas'> contact details</span></span>
                    <span className='yunmia'>In order to make booking you need to choose a plan, time and fill all required form fields.</span>
                <div className='cinputs'>
                    <input className='cinput' name='fisrtname' type="text" placeholder='First Name*'  onChange={handleChange} />
                    <input className='cinput' name='lastname' type="text" placeholder='Last Name '  onChange={handleChange} />
                </div>
                <div className='cinputs cika'>
                    <input className='cinput' name="email" type="text" placeholder='E-mail' onChange={handleChange} />
                    <input className='cinput' name="phone" type="text" placeholder='Phone No'  onChange={handleChange} />
                </div>
                <input type="text" name='additional' placeholder='Additional Information' className='civil'  onChange={handleChange} />
                <button className='creq' onClick={handleClick}>send request</button>
            </div>

        </div>
    </div>
  )
}

export default Bconfirm