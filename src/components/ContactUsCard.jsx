import React from 'react'

export const ContactUsCard = ({children}) => {

  return (
    <ul className='flex flex-col justify-center'>
        {children}
    </ul>
  )
}

export const InfoItems = ({ items , padding , background , radius , mb , gap , mt , fontSize , color , width , height}) => {
  

    return (
      <>
        {items.map((item, index) => (
          <li key={index} className={`flex ${gap} items-center ${mb}`}>
            <div className={`${padding} ${background} ${radius}`}>
                <img src={item.imgURL} alt={item.label} width={width} height={height}  />
            </div>
            <div className={`${color}`}>
                <p className='font-medium'>{item.label}</p>
                <p className= {`${mt} ${fontSize} font-bold`}>{item.info}</p>
            </div>
          </li>
        ))}
      </>
    );
  };
    


