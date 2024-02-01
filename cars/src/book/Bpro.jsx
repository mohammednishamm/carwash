import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useState, useRef, useEffect, useContext } from 'react';
import tick from '../assets/check.png'
import close from "../assets/close (2).png"
import clock1 from '../assets/icons8-clock-48.png'
import { Bookcontext } from './Bookcontext';

const Option = () => {

 const {vehicle,setVehicle,type,setType}=useContext(Bookcontext)
  
  const [item, setItem] = useState(1);
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setItem(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }

  
  };




  const data=[
    {
      id:1,
      name:"Express Washing",
      price:20,
      img1:tick,
      img2:close,
      img3:close,
      img4:close,
      time:15
  },
  {
    id:2,
    name:"Basic Cleaning",
    price:30,
    img1:tick,
    img2:tick,
    img3:close,
    img4:close,
    time:25
},

{
  id:3,
  name:"Premium Service",
  price:36,
  img1:tick,
  img2:tick,
  img3:tick,
  img4:close,
  time:45
},
{
  id:4,
  name:"Full Complex",
  price:50,
  img1:tick,
  img2:tick,
  img3:tick,
  img4:tick,
  time:120
},
{
  id:5,
  name:"Express Washing",
  price:20,
  img1:tick,
  img2:close,
  img3:close,
  img4:close,
  time:20
},
{
id:6,
name:"Basic Cleaning",
price:30,
img1:tick,
img2:tick,
img3:close,
img4:close,
time:30
},

{
id:7,
name:"Premium Service",
price:39,
img1:tick,
img2:tick,
img3:tick,
img4:close,
time:50
},
{
id:8,
name:"Full Complex",
price:59,
img1:tick,
img2:tick,
img3:tick,
img4:tick,
time:150
},
{
  id:9,
  name:"Express Washing",
  price:20,
  img1:tick,
  img2:close,
  img3:close,
  img4:close,
  time:20
},
{
id:10,
name:"Basic Cleaning",
price:30,
img1:tick,
img2:tick,
img3:close,
img4:close,
time:30
},

{
id:11,
name:"Premium Service",
price:39,
img1:tick,
img2:tick,
img3:tick,
img4:close,
time:50
},
{
id:12,
name:"Full Complex",
price:59,
img1:tick,
img2:tick,
img3:tick,
img4:tick,
time:150
},
{
  id:13,
  name:"Express Washing",
  price:20,
  img1:tick,
  img2:close,
  img3:close,
  img4:close,
  time:20
},
{
id:14,
name:"Basic Cleaning",
price:30,
img1:tick,
img2:tick,
img3:close,
img4:close,
time:30
},

{
id:15,
name:"Premium Service",
price:39,
img1:tick,
img2:tick,
img3:tick,
img4:close,
time:50
},
{
id:16,
name:"Full Complex",
price:59,
img1:tick,
img2:tick,
img3:tick,
img4:tick,
time:150
},
]


  const handlechange=()=>{
    if(item===1){
      setVehicle("sedan")
    }
    else if(item===2){
      setVehicle("pickup")
    }
    else if(item===3){
      setVehicle("SUV")
    }
    else{
      setVehicle("Minibus")
    }
  }


 useEffect(()=>{
 handlechange()
 },[item])
   
  return (
    <>
    <div className='b-c1'>
        <div className='ooi'>
            <span className='sooi'> STEP 01 </span>
            <span className='suii'>Choose Your Car Type</span>
        </div>
      <div className='selectmain kolavari'>
        <div className={item === 1 ? "sele focus bkia" : 'select focus bkiab'}onClick={() => handleButtonClick(0)}>
           
            <span className='samll'>Sedan</span>
        </div>
        <div className={item === 2 ? "sele focus bkia" : 'select focus bkiab'}  onClick={() => handleButtonClick(1)}>
            <span className='samll' >Pickup</span>
        </div>
        <div className={item === 3 ? "sele focus bkia" : 'select focus bkiab'}  onClick={() => handleButtonClick(2)}>
            <span className='samll'>SUV</span>
        </div>
        <div className={item === 4 ? "sele focus bkia" : 'select focus bkiab'} onClick={() => handleButtonClick(3)}>
            <span className='samll'>Minibus</span>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          initialSlide={item - 1}
          onSlideChange={(swiper) => setItem(swiper.activeIndex + 1)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          
        >
          <SwiperSlide>
            <div className='slider1 fahad'>
                    <img src="http://aqualine.like-themes.com/wp-content/uploads/2018/02/CAR_01.png" alt="" />

                    <div>
                    <div className='slider1'>

                  {data.slice(0, 4).map((item)=>(

                  
                <div className='main-card' key={item.id}>
                 
                    <span className='expresswas'>{item.name}</span>
                    <span className='kdhfksdf'>$ <span className='twelv'>{item.price}</span>.99</span>
                  <div className='kick'>
                   <div className='kick1'>
                        <img className='tick' src={item.img1} alt="" />
                        <span>Exterior washing</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={item.img2} alt="" />
                        <span>Vaccum cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={item.img3} alt="" />
                        <span>Interior wet cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={item.img4} alt="" />
                        <span>Window wiping</span>
                    </div>
                    </div>
                    <div className='clkmin1'>
                      <img className='clk' src={clock1} alt="" />
                      <span className='clkmin'>{item.time} Min </span>
                    </div>
                    <button className={item.id == type ? "carob lastb sgreen" :"carob lastb"} onClick={()=>setType(item)}>{item.id == type ? "Selected" :"Select"}</button>
                </div>

))} 
             
            </div>
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider1 fahad'>
                <img src="http://aqualine.like-themes.com/wp-content/uploads/2018/02/CAR_03.png" alt="" />


                <div>
                    <div className='slider1'>
                    {data.slice(4, 8).map((item)=>(

                  
<div className='main-card' key={item.id}>
 
    <span className='expresswas'>{item.name}</span>
    <span className='kdhfksdf'>$ <span className='twelv'>{item.price}</span>.99</span>
  <div className='kick'>
   <div className='kick1'>
        <img className='tick' src={item.img1} alt="" />
        <span>Exterior washing</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img2} alt="" />
        <span>Vaccum cleaning</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img3} alt="" />
        <span>Interior wet cleaning</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img4} alt="" />
        <span>Window wiping</span>
    </div>
    </div>
    <div className='clkmin1'>
      <img className='clk' src={clock1} alt="" />
      <span className='clkmin'>{item.time} Min </span>
    </div>
    <button className={item.id == type ? "carob lastb sgreen" :"carob lastb"} onClick={()=>setType(item)}>{item.id == type ? "Selected" :"Select"}</button>
</div>

))} 
            </div>
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider1 fahad'>
                <img src="http://aqualine.like-themes.com/wp-content/uploads/2018/02/CAR_02.png" alt="" />

                <div>
                    <div className='slider1'>
                    {data.slice(8, 12).map((item)=>(

                  
<div className='main-card'  key={item.id}>
 
    <span className='expresswas'>{item.name}</span>
    <span className='kdhfksdf'>$ <span className='twelv'>{item.price}</span>.99</span>
  <div className='kick'>
   <div className='kick1'>
        <img className='tick' src={item.img1} alt="" />
        <span>Exterior washing</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img2} alt="" />
        <span>Vaccum cleaning</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img3} alt="" />
        <span>Interior wet cleaning</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img4} alt="" />
        <span>Window wiping</span>
    </div>
    </div>
    <div className='clkmin1'>
      <img className='clk' src={clock1} alt="" />
      <span className='clkmin'>{item.time} Min </span>
    </div>
    <button className={item.id == type ? "carob lastb sgreen" :"carob lastb"} onClick={()=>setType(item)}>{item.id == type ? "Selected" :"Select"}</button>
</div>

))} 
            </div>
                    </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider1 fahad'>
                <img src="http://aqualine.like-themes.com/wp-content/uploads/2018/02/CAR_04.png" alt="" />


                <div>
                    <div className='slider1'>
                    {data.slice(12, 16).map((item)=>(

                  
<div className='main-card'  key={item.id}>
 
    <span className='expresswas'>{item.name}</span>
    <span className='kdhfksdf'>$ <span className='twelv'>{item.price}</span>.99</span>
  <div className='kick'>
   <div className='kick1'>
        <img className='tick' src={item.img1} alt="" />
        <span>Exterior washing</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img2} alt="" />
        <span>Vaccum cleaning</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img3} alt="" />
        <span>Interior wet cleaning</span>
    </div>
    <div className='kick1'>
        <img className='tick tick1' src={item.img4} alt="" />
        <span>Window wiping</span>
    </div>
    </div>
    <div className='clkmin1'>
      <img className='clk' src={clock1} alt="" />
      <span className='clkmin'>{item.time} Min </span>
    </div>
    <button className={item.id == type ? "carob lastb sgreen" :"carob lastb"} onClick={()=>setType(item)}>{item.id == type ? "Selected" :"Select"}</button>
</div>

))} 
            </div>
                    </div>
            </div>
          </SwiperSlide>
        </Swiper>

      </div>

     
      </div>
    </>
  );
};

export default Option;
