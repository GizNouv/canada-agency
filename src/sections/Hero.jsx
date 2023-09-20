import React from 'react'
import Button from '../components/Button'
import { hero } from '../assets/images'
import HeroCard from '../components/HeroCard'
import { statistics } from '../constants'

const Hero = () => {
  return (
    <section className='flex max-container justify-between items-center'>
      <div className='flex flex-col w-[50%]'>
        <h1 className='text-[76px] leading-[90px] font-medium text-alpha-blue'>
          <span className='font-extrabold'>Digital marketing;</span>
          <br/>
          Beyond the mind of a package
        </h1>
        <p className='text-alpha-blue leading-[25px] mt-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus </p>
        <div className='flex mt-[50px] gap-5'>
          <Button
            label='Get started'
            background='bg-alpha-orange'
            color='text-white'
            py='py-[25px]'
            px='px-[50px]'
            Isicon={true}
            width='28'
            height='28'
            fontSize='text-[18px]'
          />
          <Button
            label='who we are?'
            background='bg-white'
            color='text-alpha-blue'
            py='py-[25px]'
            px='px-[50px]'
            Isicon={false}
            width='28'
            height='28'
            fontSize='text-[18px]'
            borderWidth='border-2'
            borderColor='border-[#DADBE7]'
          />
        </div>
      </div>
      <div className='w-[45%]'>
        <div className='relative'>
          <img src={hero} alt='hero' className=' w-full'/>
          <div className='absolute bottom-0 left-0 right-[307px]'>
            <HeroCard/>
          </div>
        </div>
        <div className='flex justify-center items-center border-2 border-[#DADBE7] rounded-[30px] py-[30px] px-[30px] gap-28 mt-[10px]'>
            {
              statistics.map((item , index) => (
                <div key={index} className='flex flex-col justify-center items-center gap-[6px]'>
                  <p className=' text-[32px] font-extrabold'>{item.value}+</p>
                  <p className=' font-medium text-[#4D4E5B]'>{item.label}</p>
                </div>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Hero