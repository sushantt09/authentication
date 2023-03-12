import React, {useState} from 'react';

const Register = (props) => {

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');

    return (
        <div className='auth-container'>
        <h2>Register</h2>
            <form className='form-container'>
                <label htmlFor='name'>Full Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type={'name'} name='name' id='name' placeholder='full name' />
                <label htmlFor='email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'} name='email' id='email' placeholder='xyz@gmail.com' />
                <label htmlFor='password'>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type={'password'} name='password' id='password' placeholder='********' />
                <button type='submit'>Register</button>
            </form>
            <button className='btn' onClick={()=>props.onFormSwitch('login')}>Already Registered? Log In</button>
        </div>
    )
}

export default Register;