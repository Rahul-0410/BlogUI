import React from 'react'
import { Form } from 'react-router-dom'

function LoginPage() {
  return (
    <form className='login'>
        <h1>Login</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage