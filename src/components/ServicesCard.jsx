import React from 'react'
import { servies } from '../constants'

const ServicesCard = () => {
  return (
    <ul className='flex flex-col gap-[10px]'>
        {
            servies.map((item , index) => (
                <li key={index} className='flex items-center border border-[#DADBE7] py-[30px] px-[30px] bg-white rounded-[30px]'>
                    <div className='flex justify-center bg-beta-orange py-5 px-5 rounded-[30px] w-[25%] mr-5'>
                        <img src={item.imgURL} alt={item.label} width={60} height={60}/>
                    </div>
                    <div className='w-[75%]'>
                        <h3 className=' font-bold text-[20px] mb-[10px]'>{item.label}</h3>
                        <p>{item.subtext}</p>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default ServicesCard