// import React from 'react';
// import './Admin.css';
// // import '../navbar/Navbar'

// function Admin() {
//   return (
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <h2>Trainer Panel</h2>
//         <ul>
//           <li>Users</li>
//           <li>Workout Plans</li>
//           <li>Progress Tracking</li>
//           <li>Messages</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <h1>Welcome, Trainer</h1>
//         </div>
//         <div className="content">
//           <h2>Dashboard Content</h2>
//           {/* Add your content here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Admin.css';

// function Admin() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8080/api/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     axios.delete(`http://127.0.0.1:8080/api/users/${id}`)
//       .then(() => {
//         setUsers(users.filter(user => user.id !== id));
//         alert('User deleted successfully');
//       })
//       .catch(error => {
//         console.error('Error deleting user:', error);
//       });
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <h2>Trainer Panel</h2>
//         <ul>
//           <li>Users</li>
//           <li>Workout Plans</li>
//           <li>Progress Tracking</li>
//           <li>Messages</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <h1>Welcome, Trainer</h1>
//         </div>
//         <div className="content">
//           <h2>All Users</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     <button className="edit-button">Edit</button>
//                     <button className="submit" onClick={() => handleDelete(user.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './Admin.css';

// function Admin() {
//   const [users, setUsers] = useState([]);
//   const [editingUser, setEditingUser] = useState(null); // State to track the user being edited
//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     email: '',
//   });

//   useEffect(() => {
//     axios.get('http://127.0.0.1:8080/api/users')
//       .then(response => {
//         setUsers(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching users:', error);
//       });
//   }, []);

//   const handleEdit = (user) => {
//     setEditingUser(user.id);
//     setFormData({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//     });
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://127.0.0.1:8080/api/users/${id}`)
//       .then(() => {
//         setUsers(users.filter(user => user.id !== id));
//         alert('User deleted successfully');
//       })
//       .catch(error => {
//         console.error('Error deleting user:', error);
//       });
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.put(`http://127.0.0.1:8080/api/users/${formData.id}`, formData)
//       .then(response => {
//         setUsers(users.map(user => (user.id === formData.id ? response.data : user)));
//         setEditingUser(null);
//         alert('User updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating user:', error);
//       });
//   };

//   const handleCancel = () => {
//     setEditingUser(null);
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <h2>Trainer Panel</h2>
//         <ul>
//           <li>Users</li>
//           <li>Workout Plans</li>
//           <li>Progress Tracking</li>
//           <li>Messages</li>
//         </ul>
//       </div>
//       <div className="main-content">
//         <div className="header">
//           <h1>Welcome, Trainer</h1>
//         </div>
//         <div className="content">
//           <h2>All Users</h2>
//           <table>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>
//                     <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
//                     <button className="submit" onClick={() => handleDelete(user.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {editingUser && (
//             <div className="edit-form">
//               <h3>Edit User</h3>
//               <form onSubmit={handleSubmit}>
//                 <label>ID</label>
//                 <input
//                   type="text"
//                   name="id"
//                   value={formData.id}
//                   onChange={handleChange}
//                   disabled
//                 />
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                 />
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//                 <button type="submit" className="edit-button">Save</button>
//                 <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Admin;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

function Admin() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null); // State to track the user being edited
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    dateOfBirth: '',
    gender: '',
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8080/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const handleEdit = (user) => {
    setEditingUser(user.id);
    setFormData({
      id: user.id,
      name: user.name,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      gender: user.gender,
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://127.0.0.1:8080/api/users/${id}`)
      .then(() => {
        setUsers(users.filter(user => user.id !== id));
        alert('User deleted successfully');
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://127.0.0.1:8080/api/users/${formData.id}`, formData)
      .then(response => {
        setUsers(users.map(user => (user.id === formData.id ? response.data : user)));
        setEditingUser(null);
        alert('User updated successfully');
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const handleCancel = () => {
    setEditingUser(null);
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h2>Trainer Panel</h2>
        <ul>
          <li>Users</li>
          <li>Workout Plans</li>
          <li>Progress Tracking</li>
          <li>Messages</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Welcome, Trainer</h1>
        </div>
        <div className="content">
          <h2>All Users</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date of Birth</th>
                <th>Gender</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.gender}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="submit" onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {editingUser && (
            <div className="edit-form">
              <h3>Edit User</h3>
              <form onSubmit={handleSubmit}>
                <label>ID</label>
                <input
                  type="text"
                  name="id"
                  value={formData.id}
                  onChange={handleChange}
                  disabled
                />
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />
                <label>Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                />
                <button type="submit" className="edit-button">Save</button>
                <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin;
