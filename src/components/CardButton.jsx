import React from 'react'

const CardButton = () => {
  
const handleClick = () => {
    onCardButtonClick();
}  
  
    return (
    <button type='button' className='card-button' onClick={handleClick}>Go somewhere</button>
  )
}

export default CardButton