import React from 'react';
import '../Asserts/css/Home.css'
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gym Training & Progress Tracker</h1>
      </header>
      <main>
        <div className="section welcome">
          <h2>Welcome</h2>
          <p>Track your gym workouts and progress with ease.</p>
        </div>
        <div className="section features">
          <h2>Features</h2>
          <ul>
            <li>Workout Routines</li>
            <li>Progress Tracking</li>
            <li>Nutrition Plans</li>
            <li>Community Support</li>
          </ul>
        </div>
        <div className="section call-to-action">
          <h2>Get Started</h2>
          <button>Sign Up Now</button>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Gym App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
