import React from 'react'
import {ContactUsCard , InfoItems} from '../components/ContactUsCard'
import { contactUs, inputs } from '../constants'
import Button from '../components/Button'

const ContactUs = () => {

  return (
    <section className='flex items-center gap-20 max-container bg-primary py-[30px] px-[30px] rounded-[40px]'>
        <div className='right-side flex-1 pl-[30px]'>
            <div className='text'>
                <h2 className='text-4xl leading-[61px] font-medium text-alpha-blue'>
                    <span className='font-extrabold'>Leave the future </span> of your company to us
                </h2>
                <p className='text-alpha-blue leading-[25px] mt-[25px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas</p>
            </div>
            <div className='info mt-[30px]'>
                <ContactUsCard>
                    <InfoItems 
                        items={contactUs.filter((info) => info.label === 'Phone number' || info.label === 'Email')}
                        background='bg-alpha-orange'
                        padding='p-[15px]'
                        radius='rounded-[20px]'
                        mb='mb-[30px]'
                        gap='gap-[20px]'
                        mt='mt-[8px]'
                        width={40}
                        height={40}
                    />               
                    </ContactUsCard>
            </div>
        </div>
        <div className='left-side bg-alpha-green p-10 flex-1 rounded-[40px]'>
            <div className='bg-white rounded-[30px] p-10'>
                <h3 className='text-[32px] font-bold text-center mb-10'>Project application form</h3>
                <form action="/">
                    {
                        inputs.map((item , index) => {
                            const {placeholder , type , name} = item
                            return (
                                <>
                                    <input key={index} required type={type} name={name} placeholder={placeholder} className=' bg-primary mb-5 p-[25px] rounded-[15px] w-full' />
                                    <br />
                                </>
                            ) 
                        }
                        )
                    }
                    <Button
                        label = 'Submit'
                        background = 'bg-alpha-orange'
                        color = 'text-white'
                        py = 'py-[18px]'
                        px = 'px-[30px]'
                    />
                </form>
            </div>
        </div>
    </section>
  )
}

export default ContactUs