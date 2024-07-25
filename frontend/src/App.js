import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}/>
          <Route path="/Home" element={<Home/>}/>
        </Routes>
      </Router>
    <Home/>
    </div>
  );
}

export default App;
