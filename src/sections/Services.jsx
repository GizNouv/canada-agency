import React from 'react'
import { services } from '../assets/images'
import Button from '../components/Button'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <section className='flex justify-between bg-primary max-container py-[60px] px-[60px] rounded-[48px]'>
        <div className='right-side w-[60%] mr-[48px]'>
            <div>
                <img src={services} alt="shakeHand" className='w-full' />
            </div>
            <div className='flex justify-center items-center mt-[30px] gap-10'>
                <p className='w-[60%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et  accumsan in nisl nisi congue....
                </p>
                <Button
                    label='Get started'
                    background='bg-alpha-orange'
                    color='text-white'
                    py='py-[18px]'
                    px='px-[30px]'
                />
            </div>
        </div>
        <div className='left-side w-[50%]'>
            <h2 className=' text-4xl w-[80%] font-medium'>
                What <span className='font-extrabold'>services</span> do we offer?
            </h2>
            <div className='mt-10'>
                <ServicesCard/>
            </div>
        </div>
    </section>
  )
}

export default Services