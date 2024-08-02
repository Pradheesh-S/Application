import React from 'react';
import './Admin.css';
// import '../navbar/Navbar'

function Admin() {
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
          <h2>Dashboard Content</h2>
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
}

export default Admin;
