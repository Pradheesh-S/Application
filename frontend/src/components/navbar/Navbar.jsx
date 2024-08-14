import React, { useState, useEffect } from "react";
import "./navbar.css";
import LOGO from "../../assets/logos/strike.svg";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
const Navbar = ({ toggle }) => {
  const [navbar, setNavbarColor] = useState(false);

  const move = useNavigate();

  const handleAdmin = ()=>{
    move("/admin");
  }

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav className={navbar ? "navbar-active-color" : "navbar"}>
      <HiMenu className="menu-bars" onClick={toggle} />
      <Link to="/classes">
        <a href="/" className="menu-items">Classes</a>
      </Link>
      <Link to="/pricing">
        <a href="/" className="menu-items">Pricing</a>
      </Link>
      <a href="/" className="menu-items">
        {/* <img src={LOGO} alt="strike" className="strike" /> */}
        Home
      </a>
      <Link to="/sign">
        <a href="/" className="menu-items">Signup</a>
      </Link>
      <Link to="/log">
        <a href="/" className="menu-items">Login</a>
      </Link>
      {/* <div className="profile">
      <CgProfile className="pf" onClick={handleAdmin}/>
      </div> */}
    </nav>
  );
};

export default Navbar;
// import React, { useState, useEffect } from "react";
// import React from "react";
// import { Link } from "react-router-dom";
// import '../navbar/navbar.css'
// import logo_light from '../logo-black.png'
// import logo_dark from '../logo-white.png'
// import search_icon_light from '../search-w.png'
// import search_icone_dark from '../search-b.png'
// import toggle_light from '../night.png'
// import toggle_dark from '../day.png'
// const Navbar = () => {
//     return(
//         <div className="nav">
//             <img src={logo_light} alt="" className="logo"/>
//             <ul className="ul">
//                 <li><a href="/Home">Home</a></li>
//                 <li><a href="#">Classes</a></li>
//                 <li><a href="#">Login</a></li>
//                 <li><a href="#">Signup</a></li>
//             </ul>
//             <div className="search">
//                 <input type="text" placeholder="Search"/>
//                 <img src={search_icon_light} alt=""/>
//             </div>
//             {/* <img src={toggle_light} alt="" className="toggle"/> */}
//         </div>
//     )
// }

// export default Navbar