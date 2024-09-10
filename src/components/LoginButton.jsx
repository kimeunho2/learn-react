import React from 'react'

const LoginButton = ({text}) => {
  return (
    <div>
     <button type='button' className='login-button'>{text}</button>   
    </div>
  )
}

export default LoginButton