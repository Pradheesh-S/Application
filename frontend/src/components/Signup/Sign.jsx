// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUser , FaLock } from "react-icons/fa";
// import { MdEmail , MdOutlinePhoneAndroid } from "react-icons/md";

// import '../Signup/Sign.css'

// const apiurl="http://127.0.0.1:8080/api/users/register";

// const Sign = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     console.log('Username: ${username}');
//     console.log('Password: ${password}');
//   };

//   return (
//     <div className='body'>
//     <div className='container'>
//         <form>
//             <h1>Sign In</h1>
//             <div className='input-box'>
//                 <input type='email' placeholder='Email' required/>
//                 <MdEmail className='icone'/>
//             </div>
//             <div className='input-box'>
//                 <input type='phone' placeholder='Number' required/>
//                 <MdOutlinePhoneAndroid className='icone'/>
//             </div>
//             <div className='input-box'>
//                 <input type='text' placeholder='Username' required/>
//                 <FaUser className='icone'/>
//             </div>
//             <div className='input-box'>
//                 <input type='Password' placeholder='Password' required/>
//                 <FaLock className='icone'/>
//             </div>
//             <div className='forgot'>
//                 {/* <label><input type='checkbox'/>Remember me</label> */}
//             </div>
//             <button className='submit'>Sign In</button>
//             <div className='register'>
//             <p>Already have an account? <a href='/log'>Login</a></p>
//             </div>
//         </form>
//     </div>
//     </div>
//   );
// };

// export default Sign;

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaLock, FaGenderless } from "react-icons/fa";
// import { MdEmail, MdOutlinePhoneAndroid, MdWork } from "react-icons/md";

// import '../Signup/Sign.css'
// import axios from 'axios';

// const Sign = () => {
//   const [signUpData, setSignUpData] = useState({
//     // email: '',
//     // password: '',
//     // name: '',
//     // phoneNumber: '',
    
//     // role: 'user',

//     name: '',
//     dateOfBirth: '',
//     gender: '',
//     email: '',
//     password: '',
//     roles: '',
//   });
//   const navigate = useNavigate();  

//   const handleSignUpChange = (e) => {
//     const { name, value } = e.target;
//     setSignUpData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleSignUpSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Sign Up Data:', signUpData);

//     try {
//       const { email, password, role } = signUpData;  // Destructure the required fields from signUpData
//       const response = await axios.post('http://127.0.0.1:8080/api/users/register', {
//         email: email,
//         password: password,
//         roles: role.toUpperCase(),
//       });
//       console.log(response.data);
//       alert('User created successfully');
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//       alert('Something went wrong');
//     }
//   };


// // const apiurl = "http://127.0.0.1:8080/api/users/register";

// // const Sign = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     console.log(`Username: ${username}`);
// //     console.log(`Password: ${password}`);
// //   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form>
//           <h1>Sign In</h1>
//           <div className='input-box'>
//             <input type='text' name="name" placeholder='Name' value={signUpData.name} onChange={handleSignUpChange} required/>
//             <FaUser className='icone'/>
//           </div>
//           <div className='input-box'>
//             <input type='date' name="dateOfBirth" placeholder='Date of Birth' value={signUpData.dateOfBirth} onChange={handleSignUpChange} required/>
//           </div>
//           <div className='input-box'>
//             <input type='text' name="gender" placeholder='Gender' value={signUpData.gender} onChange={handleSignUpChange} required/>
//             <FaGenderless className='icone'/>
//           </div>
//           <div className='input-box'>
//             <input type='email' name="email" placeholder='Email' value={signUpData.email} onChange={handleSignUpChange} required/>
//             <MdEmail className='icone'/>
//           </div>
//           <div className='input-box'>
//             <input type='password' name="password" placeholder='Password' value={signUpData.password} onChange={handleSignUpChange} required/>
//             <FaLock className='icone'/>
//           </div>
//           <div className='input-box'>
//             <input type='text' name="Roles" placeholder='Roles'  value={signUpData.Roles} onChange={handleSignUpChange} required/>
//             <MdWork className='icone'/>
//           </div>
//           <div className='forgot'>
//             {/* <label><input type='checkbox'/>Remember me</label> */}
//           </div>
//           <button className='submit'>Sign In</button>
//           <div className='register'>
//             <p>Already have an account? <a href='/log'>Login</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Sign;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGenderless } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneAndroid, MdWork } from "react-icons/md";

import '../Signup/Sign.css';
import axios from 'axios';

const Sign = () => {
  const [signUpData, setSignUpData] = useState({
    name: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    password: '',
    roles: '', // Ensure the field matches the state key
  });
  const navigate = useNavigate();  

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    console.log('Sign Up Data:', signUpData);

    try {
      const response = await axios.post('http://127.0.0.1:8080/api/users/register', signUpData);
      console.log(response.data);
      alert('User created successfully');
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }
  };

  return (
    <div className='body'>
      <div className='container'>
        <form onSubmit={handleSignUpSubmit}> {/* Added onSubmit here */}
          <h1>Sign Up</h1>
          <div className='input-box'>
            <input type='text' name="name" placeholder='Name' value={signUpData.name} onChange={handleSignUpChange} required/>
            <FaUser className='icone'/>
          </div>
          <div className='input-box'>
            <input type='date' name="dateOfBirth" placeholder='Date of Birth' value={signUpData.dateOfBirth} onChange={handleSignUpChange} required/>
          </div>
          <div className='input-box'>
            <input type='text' name="gender" placeholder='Gender' value={signUpData.gender} onChange={handleSignUpChange} required/>
            <FaGenderless className='icone'/>
          </div>
          <div className='input-box'>
            <input type='email' name="email" placeholder='Email' value={signUpData.email} onChange={handleSignUpChange} required/>
            <MdEmail className='icone'/>
          </div>
          <div className='input-box'>
            <input type='password' name="password" placeholder='Password' value={signUpData.password} onChange={handleSignUpChange} required/>
            <FaLock className='icone'/>
          </div>
          <div className='input-box'>
            <input type='text' name="roles" placeholder='Roles' value={signUpData.roles} onChange={handleSignUpChange} required/> {/* name changed to 'roles' */}
            <MdWork className='icone'/>
          </div>
          <div className='forgot'>
            {/* <label><input type='checkbox'/>Remember me</label> */}
          </div>
          <button className='submit' type='submit'>Sign Up</button> {/* Added type='submit' */}
          <div className='register'>
            <p>Already have an account? <a href='/log'>Login</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sign;
