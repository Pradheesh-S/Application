import React from 'react';
import './UserDashboard.css';

function UserDashboard() {
  return (
    <div className="user-dashboard">
      <div className="sidebar">
        <h2>User Panel</h2>
        <ul>
          <li>Profile</li>
          <li>Workout Routines</li>
          <li>Progress Tracking</li>
          <li>Notifications</li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Welcome, User</h1>
        </div>
        <div className="content">
          <h2>Dashboard Content</h2>
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
