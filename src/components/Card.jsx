import React from 'react'
import CardButton from './CardButton';


const name = "김은호"



const Card = ({title, subText}) => {
  return (
    <div className='card'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-sub-text'>{subText}
        </p>
        <CardButton/>
        </div>
  )
}








export default Card;



  
  
  
  