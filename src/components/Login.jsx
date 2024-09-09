import React from 'react';
import LoginEmail from './LoginEmail';
import Password from './Password';
import LoginButton from './LoginButton';
import SocialButton from './SocialButton';




const Login = () => {
  return (
    <div className='login'>
    <p className='login-text'>로그인</p>
    
    <form>
    <LoginEmail/>
    <Password/>
    <LoginButton/>
    <p className='noAccount'>계정이 없으신가요? <a>가입하기</a> <br/>or </p>
    <SocialButton/>


    </form>
    </div>
  )
}

export default Login;