import React, { useContext, useEffect, useState } from 'react'
import { Scontext } from './Scontext';
import axios from 'axios';
const Shistory = () => {

    const { currentshop } = useContext(Scontext);
    const [store, setStore] = useState([]);
  
    const datafetch = async () => {
      try {
        const res = await axios.get(`http://localhost:8600/api/shop/shistory/${currentshop.id}`);
        console.log(res.data);
        setStore(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(()=>{
      datafetch()
    },[])
  
  return (
    <div>
       {store.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cart Type</th>
              <th>Date</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Plan</th>
              <th>Price</th>
              <th>Shop</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {store.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.id}</td>
                <td>{booking.cartype}</td>
                <td>{booking.date}</td>
                <td>{booking.email}</td>
                <td>{booking.firstname}</td>
                <td>{booking.lastname}</td>
                <td>{booking.phonenumber}</td>
                <td>{booking.plan}</td>
                <td>{booking.price}</td>
                <td>{booking.shop}</td>
                <td>{booking.time}</td>
                <td>{booking.status}</td>
               


              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Shistory
