// import React from 'react';
// import './User.css';

// function UserDashboard() {
//   return (
//     <div className="user-dashboard">
//       <div className="sidebar">
//         <h2>User Panel</h2>
//         <ul>
//           <li>Profile</li>
//           <li>Workout Routines</li>
//           <li>Progress Tracking</li>
//           <li>Notifications</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <h1>Welcome, User</h1>
//         </div>
//         <div className="content">
//           <h2>Dashboard Content</h2>
//           {/* Add your content here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './User.css';

// function UserDashboard() {
//   const [userData, setUserData] = useState({
//     id: '',
//     name: '',
//     email: '',
//     // Add other fields as necessary
//   });

//   useEffect(() => {
//     // Assuming the user ID is stored in local storage or context after login
//     const userId = localStorage.getItem('userId');
//     axios.get(`http://127.0.0.1:8080/api/users/${userId}`)
//       .then(response => {
//         setUserData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleUpdate = () => {
//     axios.put(`http://127.0.0.1:8080/api/users/${userData.id}`, userData)
//       .then(() => {
//         alert('Profile updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//       });
//   };

//   return (
//     <div className="user-dashboard">
//       <div className="sidebar">
//         <h2>User Panel</h2>
//         <ul>
//           <li>Profile</li>
//           <li>Workout Routines</li>
//           <li>Progress Tracking</li>
//           <li>Notifications</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <h1>Welcome, {userData.name}</h1>
//         </div>
//         <div className="content">
//           <h2>Edit Profile</h2>
//           <form>
//             <div>
//               <label>Name:</label>
//               <input 
//                 type="text" 
//                 name="name" 
//                 value={userData.name} 
//                 onChange={handleChange} 
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input 
//                 type="email" 
//                 name="email" 
//                 value={userData.email} 
//                 onChange={handleChange} 
//               />
//             </div>
//             {/* Add other fields as necessary */}
//             <button className="submit" type="button" onClick={handleUpdate}>Update</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './User.css';

// function UserDashboard() {
//   const [userData, setUserData] = useState({
//     id: '',
//     name: '',
//     email: '',
//     dateOfBirth: '',  // Added field
//     gender: '',       // Added field
//   });

//   useEffect(() => {
//     // Assuming the user ID is stored in local storage or context after login
//     const userId = localStorage.getItem('userId');
//     if (userId) {
//       axios.get(`http://127.0.0.1:8080/api/users/${userId}`)
//         .then(response => {
//           setUserData(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching user data:', error);
//         });
//     } else {
//       console.error('No user ID found. Please log in.');
//     }
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData(prevData => ({ ...prevData, [name]: value }));
//   };

//   const handleUpdate = (e) => {
//     e.preventDefault();
//     axios.put(`http://127.0.0.1:8080/api/users/${userData.id}`, userData)
//       .then(() => {
//         alert('Profile updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//       });
//   };

//   return (
//     <div className="user-dashboard">
//       <div className="sidebar">
//         <h2>User Panel</h2>
//         <ul>
//           <li>Profile</li>
//           <li>Workout Routines</li>
//           <li>Progress Tracking</li>
//           <li>Notifications</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <h1>Welcome, {userData.name}</h1>
//         </div>
//         <div className="content">
//           <h2>Edit Profile</h2>
//           <form onSubmit={handleUpdate}>
//             <div>
//               <label>Name:</label>
//               <input 
//                 type="text" 
//                 name="name" 
//                 value={userData.name} 
//                 onChange={handleChange} 
//               />
//             </div>
//             <div>
//               <label>Email:</label>
//               <input 
//                 type="email" 
//                 name="email" 
//                 value={userData.email} 
//                 onChange={handleChange} 
//               />
//             </div>
//             <div>
//               <label>Date of Birth:</label>
//               <input 
//                 type="date" 
//                 name="dateOfBirth" 
//                 value={userData.dateOfBirth} 
//                 onChange={handleChange} 
//               />
//             </div>
//             <div>
//               <label>Gender:</label>
//               <input 
//                 type="text" 
//                 name="gender" 
//                 value={userData.gender} 
//                 onChange={handleChange} 
//               />
//             </div>
//             <button className="submit" type="submit">Update</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UserDashboard;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';

function UserDashboard() {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
  });

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    console.log("Retrieved userId:", userId); // Debugging line

    if (userId) {
      axios.get(`http://127.0.0.1:8080/api/users/${userId}`)
        .then(response => {
          console.log("API Response:", response.data); // Debugging line
          setUserData(response.data);
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    } else {
      console.error('No userId found in localStorage');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = () => {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      console.error('No userId found in localStorage');
      return;
    }

    axios.put(`http://127.0.0.1:8080/api/users/${userId}`, userData)
      .then(() => {
        alert('Profile updated successfully');
      })
      .catch(error => {
        console.error('Error updating profile:', error);
      });
  };

  return (
    <div className="user-dashboard">
      <div className="user-sidebar">
        <h2>User Panel</h2>
        <ul>
          <li>Profile</li>
          <li>Workout Routines</li>
          <li>Progress Tracking</li>
          <li>Notifications</li>
        </ul>
      </div>
      <div className="user-main-content">
        <div className="user-header">
          <h1>Welcome, {userData.name}</h1>
        </div>
        <div className="user-content">
          <h2>Edit Profile</h2>
          <form>
            <div>
              <label>Name:</label>
              <input 
                type="text" 
                name="name" 
                value={userData.name} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Email:</label>
              <input 
                type="email" 
                name="email" 
                value={userData.email} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Date of Birth:</label>
              <input 
                type="date" 
                name="dateOfBirth" 
                value={userData.dateOfBirth} 
                onChange={handleChange} 
              />
            </div>
            <div>
              <label>Gender:</label>
              <input 
                type="text" 
                name="gender" 
                value={userData.gender} 
                onChange={handleChange} 
              />
            </div>
            <button className="user-submit" type="button" onClick={handleUpdate}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;



