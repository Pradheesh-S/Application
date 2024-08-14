// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaUser , FaLock } from "react-icons/fa";
// import '../Login/Log.css'

// const Log = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     console.log('Username: ${username}');
//     console.log('Password: ${password}');
//   };

//   return (
//     <div className='body'>
//     <div className='container'>
//         <form>
//             <h1>Login</h1>
//             <div className='input-box'>
//                 <input type='email' placeholder='Email' required/>
//                 <FaUser className='icone'/>
//             </div>
//             <div className='input-box'>
//                 <input type='Password' placeholder='Password' required/>
//                 <FaLock className='icone'/>
//             </div>
//             <div className='forgot'>
//                 {/* <label><input type='checkbox'/>Remember me</label> */}
//                 <a href='#'>Forgot Password</a>
//             </div>
//             <button className='submit'><a href='/Home'>Login</a></button>
//             <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//             </div>
//         </form>
//     </div>
//     </div>
//   );
// };

// export default Log;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import '../Login/Log.css';
import axios from 'axios';

const Log = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    roles: '',
  });

  const navigate = useNavigate();

  // Handle input change
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log('Email:', loginData.email);
    console.log('Password:', loginData.password);
    console.log('Roles:', loginData.roles);

    try {
      const response = await axios.post('http://127.0.0.1:8080/api/users/login', loginData);
      console.log(response.data);
      alert('Login successful');
      // if(roles == 'Admin')
        navigate('/admin');  // Redirect to the Home page after successful login
      // else(roles == 'User')
      //   navigate('/user'); 
    } catch (error) {
      console.error(error);
      alert('Invalid credentials');
    }
  };

  return (
    <div className='body'>
      <div className='container'>
        <form onSubmit={handleLoginSubmit}>
          <h1>Login</h1>
          <div className='input-box'>
            <input 
              type='email' 
              name='email' 
              placeholder='Email' 
              value={loginData.email} 
              onChange={handleLoginChange} 
              required 
            />
            <FaUser className='icone' />
          </div>
          <div className='input-box'>
            <input 
              type='password' 
              name='password' 
              placeholder='Password' 
              value={loginData.password} 
              onChange={handleLoginChange} 
              required 
            />
            <FaLock className='icone' />
          </div>
          <div className='input-box'>
            <input 
              type='text' 
              name='roles' 
              placeholder='Role' 
              value={loginData.roles} 
              onChange={handleLoginChange} 
              required 
            />
            <FaUser className='icone' />
          </div>
          <div className='forgot'>
            {/* <label><input type='checkbox'/>Remember me</label> */}
            <a href='#'>Forgot Password</a>
          </div>
          <button className='submit' type='submit' href='/admin'>Login</button>
          <div className='register'>
            <p>Don't have an account? <a href='/sign'>Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import '../Login/Log.css';
// import axios from 'axios';

// const Log = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//   });

//   const navigate = useNavigate();

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:8080/api/users/login', loginData);
//       const { role } = response.data;

//       if (role === 'ADMIN') {
//         navigate('/admin');
//       } else if (role === 'USER') {
//         navigate('/user');
//       } else {
//         alert('Unknown role');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={loginData.email} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={loginData.password} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaLock className='icone' />
//           </div>
//           <div className='forgot'>
//             <a href='#'>Forgot Password</a>
//           </div>
//           <button className='submit' type='submit'>Login</button>
//           <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import '../Login/Log.css';
// import axios from 'axios';

// const Log = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//     role: '', // Added role to loginData
//   });

//   const navigate = useNavigate();

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:8080/api/users/login', loginData);
//       const { role } = response.data;

//       if (role === 'Admin') {
//         navigate('/admin');
//       } else if (role === 'User') {
//         navigate('/user');
//       } else {
//         alert('Unknown role');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={loginData.email} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={loginData.password} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaLock className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='text' 
//               name='role' 
//               placeholder='Role (ADMIN/USER)' 
//               value={loginData.role} 
//               onChange={handleLoginChange} 
//               required 
//             />
//           </div>
//           <div className='forgot'>
//             <a href='#'>Forgot Password</a>
//           </div>
//           <button className='submit' type='submit'>Login</button>
//           <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import '../Login/Log.css';
// import axios from 'axios';

// const Log = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//     role: '' // Add role to the state
//   });

//   const navigate = useNavigate();

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://127.0.0.1:8080/api/users/login', loginData);
//       const { role } = response.data;

//       if (role === 'ADMIN') {
//         navigate('/admin');
//       } else if (role === 'USER') {
//         navigate('/user');
//       } else {
//         alert('Unknown role');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={loginData.email} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={loginData.password} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaLock className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='text' 
//               name='role' 
//               placeholder='Role (ADMIN/USER)' 
//               value={loginData.role} 
//               onChange={handleLoginChange} 
//               required 
//             />
//           </div>
//           <div className='forgot'>
//             <a href='#'>Forgot Password</a>
//           </div>
//           <button className='submit' type='submit'>Login</button>
//           <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import '../Login/Log.css';
// import axios from 'axios';

// // Axios instance with configuration
// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8080/api/',
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('authToken');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// api.interceptors.response.use(response => {
//   return response;
// }, async error => {
//   if (error.response && error.response.status === 401) {
//     localStorage.removeItem('authToken');
//   }
//   return Promise.reject(error);
// });

// const Log = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//     role: '' // Added role field
//   });

//   const navigate = useNavigate();

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await api.post('/users/login', loginData);
//       const { token, role } = response.data;

//       // Save the token to local storage
//       localStorage.setItem('authToken', token);

//       if (role === 'ADMIN') {
//         navigate('/admin');
//       } else if (role === 'USER') {
//         navigate('/user');
//       } else {
//         alert('Unknown role');
//       }
//     } catch (error) {
//       console.error(error);
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={loginData.email} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={loginData.password} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaLock className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='text' 
//               name='role' 
//               placeholder='Role (ADMIN/USER)' 
//               value={loginData.role} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' /> {/* Replace with an appropriate icon if needed */}
//           </div>
//           <div className='forgot'>
//             <a href='#'>Forgot Password</a>
//           </div>
//           <button className='submit' type='submit'>Login</button>
//           <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import '../Login/Log.css';
// import axios from 'axios';

// // Axios instance with configuration
// const api = axios.create({
//   baseURL: 'http://127.0.0.1:8080/api/',
// });

// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('Token');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// api.interceptors.response.use(response => {
//   return response;
// }, async error => {
//   if (error.response && error.response.status === 401) {
//     localStorage.removeItem('Token');
//   }
//   return Promise.reject(error);
// });

// const Log = () => {
//   const [loginData, setLoginData] = useState({
//     email: '',
//     password: '',
//     role: '' // Added role field
//   });

//   const navigate = useNavigate();

//   const handleLoginChange = (e) => {
//     const { name, value } = e.target;
//     setLoginData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
    
//     console.log('Submitting login data:', loginData); // Debugging line

//     try {
//       const response = await api.post("http://127.0.0.1:8080/api/auth/authenticate", loginData);
//       console.log('Response data:', response.data); // Debugging line

//       const { token, role } = response.data;

//       // Save the token to local storage
//       localStorage.setItem('Token', token);
//       localStorage.setItem('role', role);
//       // loginData({email,role});
//       if (role === 'ADMIN') {
//         navigate('/admin');
//       } else if (role === 'USER') {
//         navigate('/user');
//       } else {
//         alert('Unknown role');
//       }
//     } catch (error) {
//       console.error('Login error:', error.response ? error.response.data : error.message); // Debugging line
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form onSubmit={handleLoginSubmit}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={loginData.email} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={loginData.password} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaLock className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='text' 
//               name='role' 
//               placeholder='Role (ADMIN/USER)' 
//               value={loginData.role} 
//               onChange={handleLoginChange} 
//               required 
//             />
//             <FaUser className='icone' /> {/* Replace with an appropriate icon if needed */}
//           </div>
//           <div className='forgot'>
//             <a href='#'>Forgot Password</a>
//           </div>
//           <button className='submit' type='submit'>Login</button>
//           <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from "react-icons/fa";
// import '../Login/Log.css';
// import axios from 'axios';

// // // Axios instance with configuration
// // const api = axios.create({
// //   baseURL: 'http://127.0.0.1:8080/api/',
// // });

// // api.interceptors.request.use(config => {
// //   const token = localStorage.getItem('Token');
// //   if (token) {
// //     config.headers['Authorization'] = `Bearer ${token}`;
// //   }
// //   return config;
// // }, error => {
// //   return Promise.reject(error);
// // });

// // api.interceptors.response.use(response => {
// //   return response;
// // }, async error => {
// //   if (error.response && error.response.status === 401) {
// //     localStorage.removeItem('Token');
// //   }
// //   return Promise.reject(error);
// // });

// const Log = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');
//   const apiUrl = "http://127.0.0.1:8080/api/auth/authenticate";

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError('');

//     const { email, password } = formData;

//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log(response);

//       const { token, role, username } = response.data;

//       localStorage.setItem('token', token);
//       localStorage.setItem('role', role);

//       // login({ email, role, username });

//       if (role === 'ADMIN') {
//         navigate('/leader-dashboard');
//       } else if (role === 'USER') {
//         navigate('/member-dashboard');
//       } else {
//         setError('Invalid role.');
//       }

//     } catch (error) {
//       console.error(error);
//       setError('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div className='body'>
//       <div className='container'>
//         <form onSubmit={handleLogin}>
//           <h1>Login</h1>
//           <div className='input-box'>
//             <input 
//               type='email' 
//               name='email' 
//               placeholder='Email' 
//               value={formData.email} 
//               onChange={handleChange} 
//               required 
//             />
//             <FaUser className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='password' 
//               name='password' 
//               placeholder='Password' 
//               value={formData.password} 
//               onChange={handleChange} 
//               required 
//             />
//             <FaLock className='icone' />
//           </div>
//           <div className='input-box'>
//             <input 
//               type='text' 
//               name='role' 
//               placeholder='Role (ADMIN/USER)' 
//               value={formData.role} 
//               onChange={handleChange} 
//               required 
//             />
//             <FaUser className='icone' /> {/* Replace with an appropriate icon if needed */}
//           </div>
//           <div className='forgot'>
//             <a href='#'>Forgot Password</a>
//           </div>
//           <button className='submit' type='submit'>Login</button>
//           <div className='register'>
//             <p>Don't have an account? <a href='/sign'>Register</a></p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Log;