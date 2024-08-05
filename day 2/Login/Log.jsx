import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser , FaLock } from "react-icons/fa";
import '../Login/Log.css'

const Log = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username: ${username}');
    console.log('Password: ${password}');
  };

  return (
    <div className='body'>
    <div className='container'>
        <form>
            <h1>Login</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
                <FaUser className='icone'/>
            </div>
            <div className='input-box'>
                <input type='Password' placeholder='Password' required/>
                <FaLock className='icone'/>
            </div>
            <div className='forgot'>
                {/* <label><input type='checkbox'/>Remember me</label> */}
                <a href='#'>Forgot Password</a>
            </div>
            <button className='submit'><a href='/Home'>Login</a></button>
            <div className='register'>
            <p>Don't have an account? <a href='/sign'>Register</a></p>
            </div>
        </form>
    </div>
    </div>
  );
};

export default Log;
