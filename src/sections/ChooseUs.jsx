import React from 'react'
import { benefits } from '../constants'
import { chooseUs } from '../assets/images'
import Button from '../components/Button'

const ChooseUs = () => {
  return (
    <section className='flex max-container'>
        <div className='right-side w-[50%] pr-[60px]'>
            <div>
                <h2 className=' text-4xl leading-[61px] font-medium text-alpha-blue'>
                    Why should you
                    <br/>
                    <span className='font-extrabold'>Choose Us?</span>
                </h2>
                <p className='text-alpha-blue leading-[25px] mt-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus </p>
            </div>
            <ul className='mt-[25px]'>
                {
                    benefits.map((item , index) => (
                        <li key={index} className={`flex items-center py-[30px] ${item.borderBottom && ' border-b border-[#BCBDC2] border-dashed'}`}>
                            <div className='min-w-[50px] min-h-[50px] mr-[25px]'>
                                <img src={item.imgURL} alt={item.label} className='w-full'/>
                            </div>
                            <div>
                                <h3 className='font-bold text-lg'>{item.label}</h3>
                                <p className='text-sm text-[#4D4E5B] mt-[10px]'>{item.subtext}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
        <div className='left-side w-[50%] pl-[60px]'>
            <div className='mb-[10px]'>
                <img src={chooseUs} alt="chooseUs" />
            </div>
            <div className='flex justify-between items-center py-[30px] px-[30px] border border-[#DADBE7] rounded-[30px]'>
                <span className=' text-xl font-semibold w-[50%]'>Get started now to start a great partnership</span>
                <Button
                    label="Get started"
                    background='bg-alpha-orange'
                    color='text-white'
                    py='py-[18px]'
                    px='px-[30px]'
                />
            </div>
        </div>
    </section>
  )
}

export default ChooseUs