import React from 'react';
import Loginemail1 from '../components/Loginemail1';
import LoginButton from '../components/LoginButton';





const Login = () => {
  return (
    <div className='login'>
    <p className='login-text'>로그인</p>
    
    <form>
    <Loginemail1 placeholder = "email"/>
    <Loginemail1 placeholder = "password"/>
    
    <LoginButton text = "로그인"/>
    <p className='noAccount'>계정이 없으신가요? <a>가입하기</a> <br/>or </p>
    <LoginButton text = "continue with Google"/>

    </form>
    </div>
  )
}

export default Login;