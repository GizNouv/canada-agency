import React from 'react'
import {menu , logo} from '../assets/icons'
import {navLinks} from '../constants'
import Button from './Button'

const Nav = () => {
  return (
    <nav className='max-container flex flex-1 justify-between items-center pt-10'>
        <div className='flex gap-10 items-center'>
            <img
                src={menu}
                width={30}
                height={30}
            />
            <ul className='flex gap-10'>
                {navLinks.map((item , index) => (
                    <li key={index}>
                        <a href={item.href} className='text-alpha-blue'>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
        <a href='/'>
            <img
                src={logo}
                width={60}
                height={60}
            />
        </a>
        <Button
            label = 'Get started'
            background = 'bg-alpha-blue'
            color = 'text-white'
            py = 'py-[18px]'
            px = 'px-[30px]'
        />
    </nav>
  )
}

export default Nav