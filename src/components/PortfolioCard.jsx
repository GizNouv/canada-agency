import React from 'react'

const PortfolioCard = ({imgURL , label}) => {
  return (
    <div className=' bg-white border border-[#DADBE7] px-[10px] pt-[10px] rounded-[30px]'>
        <img src={imgURL} alt={label} className='rounded-[30px]' />
        <div className='py-[30px] px-[30px]'>
            <p className='text-xl font-semibold'>{label}</p>
        </div>
    </div>
  )
}

export default PortfolioCard