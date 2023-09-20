import React from 'react'
import { ArrowRight } from '../assets/icons'

const Button = ({label , background , color , py , px ,Isicon , width , height, fontSize ,borderWidth , borderColor}) => {
  return (
    <button className={`flex items-center justify-center gap-4 rounded-2xl font-medium ${background} ${fontSize} ${color} ${borderWidth} ${borderColor} ${py} ${px}`}>
        {label}

        {
          Isicon && <img src={ArrowRight} alt='ArrowRight' width={width} height={height}/>
        }
    </button>
  )
}

export default Button