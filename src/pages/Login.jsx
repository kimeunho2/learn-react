import React from 'react';
import Loginemail1 from '../components/Loginemail1';
import Password from '../components/Password';
import LoginButton from '../components/LoginButton';
import SocialButton from '../components/SocialButton';




const Login = () => {
  return (
    <div className='login'>
    <p className='login-text'>로그인</p>
    
    <form>
    <Loginemail1/>
    <Password/>
    <LoginButton/>
    <p className='noAccount'>계정이 없으신가요? <a>가입하기</a> <br/>or </p>
    <SocialButton/>

    </form>
    </div>
  )
}

export default Login;