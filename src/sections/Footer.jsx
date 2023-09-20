import React from 'react'
import Button from '../components/Button'
import { logo } from '../assets/icons'
import { contactUs, socialMedia , usefulLinks } from '../constants'
import { ContactUsCard, InfoItems } from '../components/ContactUsCard'

const Footer = () => {
  return (
    <section className='flex flex-col gap-[100px] max-container'>
        <div className='flex items-center gap-[253px] top-side pt-[100px]'>
            <div className=''>
                <h2 className='text-[76px] leading-[90px] font-medium text-white'>
                    have an
                    <br/>
                    <span className='font-extrabold'>awesome project?</span>
                </h2>
            </div>
            <div>
                <Button
                    label="Let's work together"
                    background='bg-alpha-orange'
                    color='text-white'
                    py='py-[35px]'
                    px='px-[60px]'
                    Isicon={true}
                    width='28'
                    height='28'
                    fontSize='text-[24px]'
                />
            </div>
        </div>
        <div className='bottom-side flex items-center bg-[#2B2D3C] p-[30px] rounded-[40px]'>
            <div className='w-[40%] pl-[30px] pr-[62px]'>
                <div className='w-[60px] h-[60px] mb-[25px]'>
                    <img src={logo} alt='logo' className='w-full h-full' />
                </div>
                <p className='text-white leading-[25px] mb-10 text-justify'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
                </p>
                <ul className='flex gap-[30px]'>
                    {
                        socialMedia.map((item , index) => (
                            <li key={index}>
                                <a href="/">
                                    <img src={item.imgURL} alt={item.label} />
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='w-[60%] pl-[62px]'>
                <div className='flex'>
                    <div className='border border-gray rounded-[30px] p-[30px] w-[40%] mr-[5px]'>
                        <h3 className='text-xl font-bold text-white'>Useful links</h3>
                        <ul className='text-white mt-[30px]'>
                            {
                                usefulLinks.map((item , index) => (
                                    <li key={index} className='mb-5'>
                                        <a href="/">{item.label}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className=' bg-alpha-green p-[30px] rounded-[30px] w-[60%] ml-[5px]'>
                        <h3 className='text-xl font-bold text-white mb-[30px]'>contact us</h3>
                        <ContactUsCard>
                            <InfoItems 
                                items={contactUs.filter((info) => info.label === 'Phone number' || info.label === 'Email' || info.label === 'Address' )}
                                background='bg-[#3DA89C]'
                                color='text-white'
                                padding='p-[12px]'
                                radius='rounded-[12px]'
                                mb='mb-[20px]'
                                gap='gap-[15px]'
                                mt='mt-[4px]'
                                width={30}
                                height={30}
                                />
                        </ContactUsCard>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer