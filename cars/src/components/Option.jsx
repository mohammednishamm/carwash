import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { useState, useRef } from 'react';
import tick from '../assets/check.png'
import close from "../assets/close (2).png"
import clock1 from '../assets/icons8-clock-48.png'

const Option = () => {
  const [item, setItem] = useState(1);
  const swiperRef = useRef(null);

  const handleButtonClick = (index) => {
    setItem(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }

    console.log('inside fn:', item);
  };

  console.log('outside fn:', item);

  return (
    <>
      <div className='selectmain'>
        <div className={item === 1 ? "sele focus" : 'select focus'}onClick={() => handleButtonClick(0)}>
            <img className='sedan' src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_01.png" alt="" />
            <span className='samll'>Small Sedan</span>
        </div>
        <div className={item === 2 ? "sele focus" : 'select focus'}  onClick={() => handleButtonClick(1)}>
        <img className='sedan' src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_03.png" alt="" />
            <span className='samll'>Pickup</span>
        </div>
        <div className={item === 3 ? "sele focus" : 'select focus'}  onClick={() => handleButtonClick(2)}>
        <img className='sedan' src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_02.png" alt="" />
            <span className='samll'>SUV</span>
        </div>
        <div className={item === 4 ? "sele focus" : 'select focus'} onClick={() => handleButtonClick(3)}>
        <img className='sedan' src="http://aqualine.like-themes.com/wp-content/uploads/2020/02/car_04.png" alt="" />
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
            <div className='slider1'>
                <div className='main-card'>
                    <span className='expresswas'>Express Washing</span>
                    <span className='kdhfksdf'>$ <span className='twelv'>12</span>.99</span>
                  <div className='kick'>
                   <div className='kick1'>
                        <img className='tick' src={tick} alt="" />
                        <span>Exterior washing</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Vaccum cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Interior wet cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Window wiping</span>
                    </div>
                    </div>
                    <div className='clkmin1'>
                      <img className='clk' src={clock1} alt="" />
                      <span className='clkmin'>15 Min </span>
                    </div>
                    <button className='carob lastb'>Read more</button>
                </div>


                <div className='main-card'>
                    <span className='expresswas'>Express Washing</span>
                    <span className='kdhfksdf'>$ <span className='twelv'>12</span>.99</span>
                  <div className='kick'>
                   <div className='kick1'>
                        <img className='tick' src={tick} alt="" />
                        <span>Exterior washing</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Vaccum cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Interior wet cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Window wiping</span>
                    </div>
                    </div>
                    <div className='clkmin1'>
                      <img className='clk' src={clock1} alt="" />
                      <span className='clkmin'>15 Min </span>
                    </div>
                    <button className='carob lastb'>Read more</button>
                </div>

                <div className='main-card'>
                    <span className='expresswas'>Express Washing</span>
                    <span className='kdhfksdf'>$ <span className='twelv'>12</span>.99</span>
                  <div className='kick'>
                   <div className='kick1'>
                        <img className='tick' src={tick} alt="" />
                        <span>Exterior washing</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Vaccum cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Interior wet cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Window wiping</span>
                    </div>
                    </div>
                    <div className='clkmin1'>
                      <img className='clk' src={clock1} alt="" />
                      <span className='clkmin'>15 Min </span>
                    </div>
                    <button className='carob lastb'>Read more</button>
                </div>

                <div className='main-card'>
                    <span className='expresswas'>Express Washing</span>
                    <span className='kdhfksdf'>$ <span className='twelv'>12</span>.99</span>
                  <div className='kick'>
                   <div className='kick1'>
                        <img className='tick' src={tick} alt="" />
                        <span>Exterior washing</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Vaccum cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Interior wet cleaning</span>
                    </div>
                    <div className='kick1'>
                        <img className='tick tick1' src={close} alt="" />
                        <span>Window wiping</span>
                    </div>
                    </div>
                    <div className='clkmin1'>
                      <img className='clk' src={clock1} alt="" />
                      <span className='clkmin'>15 Min </span>
                    </div>
                    <button className='carob lastb'>Read more</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider1'>2</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider1'>3</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider1'>4</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Option;
