import React from 'react'
import Template from '../components/Template'
import loginImg from "../assets/login.png"

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tommorrow, and beyond."
      desc2="Eduction to future-proof your career."
      Image={loginImg}
      formtype='login'
      setIsLoggedIn={setIsLoggedIn}
    />

  )
}

export default Login