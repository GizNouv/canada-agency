import React from 'react'
import PortfolioCard from '../components/PortfolioCard'
import { portfolio } from '../constants'
import Button from '../components/Button'

const Portfolio = () => {
  return (
    <section className='flex flex-col max-container items-center'>
        <h2 className=' text-4xl w-[80%] font-medium text-center'>
            Part of our <span className='font-extrabold'>portfolio</span>
        </h2>
        <div className=' grid grid-cols-3 gap-5 mt-20 mb-[60px]'>
            {
              portfolio.map((item , index) => (
                <PortfolioCard key={index} imgURL={item.imgURL} label={item.label}/>
              ))  
            }
        </div>
        <Button
            label="View all"
            background='bg-alpha-orange'
            color='text-white'
            Isicon={true}
            py='py-[18px]'
            px='px-[30px]'
        />
    </section>
  )
}

export default Portfolio