import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Dropdown from "./components/navbar/Dropdown";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Classes from './components/classes/Classes';
import Pricing from "./components/pricing/Pricing";
import ScrollToTop from "./components/scrollToTop";
import Log from "./components/Login/Log";
import Sign from "./components/Signup/Sign";
import Admin from "./components/admin/Admin";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [theme, setTheme]= useState('light');

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/log" element={<Log />} />
        {/* <Route path="/shop/:id" element={<Product shopData={shopData} />} /> */}
        <Route exact path="/classes" element={<Classes />} />
        <Route exact path="/pricing" element={<Pricing />} />
        <Route exact path="/sign" element={<Sign/>} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
