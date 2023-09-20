import React from 'react'
import Button from '../components/Button'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { colleagues } from '../constants';
import { Quotes } from '../assets/icons';

const Testimonial = () => {
  return (
    <section className='max-container flex items-center'>
        <div className='right-side w-[50%] pr-[50px]'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
              {
                colleagues.map((item , index) => (
                <SwiperSlide key={index}>
                  <div className='flex'>
                    <div className='w-[30%] pr-[5px]'>
                      <img src={item.imgURL} alt={item.label} className='rounded-[20px] min-w-full min-h-full object-cover' />
                    </div>
                    <div className='w-[70%] pl-[5px]'>
                      <div className=' bg-alpha-green p-[30px] rounded-[20px] text-white'>
                        <p className=' text-lg font-bold'>{item.label}</p>  
                        <p className='mt-[6px]'>{item.position}</p>  
                      </div>
                      <div className='flex rounded-[20px] border border-[#DADBE7] p-[30px] mt-[10px]'>
                        <div className='w-[20%] pr-[15px]'>
                          <img src={Quotes} alt='Quotes' width={60} height={60} />
                        </div>
                        <div className='w-[80%] pl-[15px]'>
                          <p className='text-justify'>{item.comment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                ))
              }
            </Swiper>
        </div>
        <div className='left-side w-[50%] pl-[50px]'>
            <h2 className='text-4xl leading-[61px] font-medium text-alpha-blue'>
                What do our <span className='font-extrabold'>colleagues say</span> about us? 
            </h2>
            <p className='text-alpha-blue leading-[25px] mt-[25px] mb-[40px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <Button
                label="Let's work together"
                background='bg-alpha-orange'
                color='text-white'
                py='py-[18px]'
                px='px-[30px]'
            />
        </div>
    </section>
  )
}

export default Testimonial