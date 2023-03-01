import React, { useState } from 'react'
import './PagesStyles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (evnt) =>{
        evnt.preventDefault();
        console.log(email);
    }
  return (
   <>
    <form action="" className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(evnt)=> setEmail(evnt.target.value)} type="email" placeholder='youremail@gmail.com' name='email' />
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(evnt)=> setPass(evnt.target.value)} type="password" name="password" id="password" />
        <button type='submit'>Log In</button>
    </form>
    <button>Don't have an account? Register here</button>
    </>
  )
}

export default Login