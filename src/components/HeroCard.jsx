import React from 'react'
import { colleagues } from '../constants'

const HeroCard = () => {
  return (
    <div className=' flex flex-col bg-primary py-[25px] px-[25px] rounded-[30px]'>
        <div>
            <p className=' text-[#4D4E5B]'>
                Cooperation with
                <br/>
                <span className=' text-alpha-blue font-extrabold text-[26px]'>+80 Companies</span>
            </p>
        </div>
        <ul className='flex mt-14'>
            {
                colleagues.map((item , index) => (
                    <li key={index} className={`max-w-[50px] max-h-[50px] ml-[${item.margin}]`}>
                        <img src={item.imgURL} alt={item.label} className={`w-full h-full object-cover border-2 rounded-full border-primary `}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default HeroCard