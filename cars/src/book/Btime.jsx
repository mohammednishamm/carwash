import React, { useState, useEffect, useContext } from 'react';
import { Bookcontext } from './Bookcontext';
import axios from "axios"
const BookingApp = () => {
 const {dateTime,setDateTime,select}=useContext(Bookcontext)
  const [data, setData]=useState([])
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [nextDates, setNextDates] = useState([]);

  useEffect(() => {
    // When the component mounts, calculate the next 7 days
    const currentDate = new Date();
    const newNextDates = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      newNextDates.push(nextDate);
    }

    setNextDates(newNextDates);
  }, []);

  const handleSlotClick = (clickedDate, clickedSlot) => {
    if (!isSunday(clickedDate)) {
      // If it's not a Sunday, update the date state with the selected date and slot
      const formattedDate = `${clickedDate.toLocaleDateString('en-US', { weekday: 'short' })} ${clickedDate.getDate()}`;
      setDateTime({
        date: formattedDate,
        time: clickedSlot
      });
      setSelectedSlot({ date: clickedDate, slot: clickedSlot });
    }
  };

  const isSunday = (date) => {
    return date && date.getDay() === 0;
  };


  useEffect(()=>{
    const dataFetch=async (id)=>{
      try {
      const res=  await axios.get("http://localhost:8600/api/booking/data/" + select.id)
      setData(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  dataFetch()
},[select])
console.log("abin",data)

  
  const renderTable = () => {
    const timeSlots = ['9-10', '10-11', '11-12', '12-01', '02-03', '03-04', '05-06'];
     

    console.log(data.time)

  
  

    return (
      <table className="booking-table">
      <thead>
        <tr>
          {nextDates.map((date, index) => (
            <th key={index}>
              {date.toLocaleDateString('en-US', { weekday: 'short' })} {date.getDate()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((slot, slotIndex) => (
          <tr key={slotIndex}>
            {nextDates.map((date, dateIndex) => {
              const isBookedSlot = data.some(booking => booking.date === `${date.toLocaleDateString('en-US', { weekday: 'short' })} ${date.getDate()}` && booking.time === slot);
              return (
                <td
                  key={dateIndex}
                  className={`${
                    isSunday(date) ? 'closed' : ''
                  } ${selectedSlot && selectedSlot.date.getTime() === date.getTime() && selectedSlot.slot === slot ? 'selected-slot' : ''} ${isBookedSlot ? 'selected-slot' : ''}`}
                  onClick={() => handleSlotClick(date, slot)}
                >
                  {isSunday(date) ? "closed" : slot}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
    );
  };

  return (
    <div>
      {renderTable()}
      <div>
        {/* {dateTime.date && <p>Selected Date: {dateTime.date}</p>}
        {dateTime.time && <p>Selected Time: {dateTime.time}</p>} */}
      </div>
    </div>
  );
};

export default BookingApp;
