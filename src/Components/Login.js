import React,{useState} from 'react';

const Login = (props) => {

    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

   const submithandler = (e)=>{
        e.preventdefault();
        console.log(email);
    }

  return (
    <div className='auth-container'>
        <h2>Login</h2>
        <form className='form-container' onSubmit={submithandler}>
            <label htmlFor='email'>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type={'email'} name='email' id='email' placeholder='xyz@gmail.com' />
            <label htmlFor='password'>Password</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type={'password'} name='password' id='password' placeholder='********' />
            <button type='submit'>Log In</button>
        </form>
        <button className='btn' onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login;