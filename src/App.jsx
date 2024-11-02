import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Events from "./Components/Events/Events";
import Gallery from "./Components/Gallery/Gallery";
import Sponsor from "./Components/Sponsor/Sponsor";
import Contact from "./Components/Contact/Contact";
import { NavbarDemo } from "./nav";
import { TailwindcssButtons } from "./ShimmerButton";
import FloatingDockDemo from "./Footer";

const App = () => {
  return (
    <div>
      <div className="top-circle"></div>
      <Router>
        <div className="navbar">
          <NavbarDemo />
          {/* <TailwindcssButtons /> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hack" element={<div>Hack Page</div>} />
        </Routes>
      </Router>
      <div id="about">
        <About />
      </div>
      <div id="past-events">
        <Events />
      </div>
      <div id="gallery">
        <div className="gallery-text">
          <div className="gtext-wrapper">
            <span>GA</span>
            <span style={{ color: "var(--orange)" }}>LL</span>
            <span>ERY</span>
          </div>
        </div>
        <div className="image-slider-wrapper">
          <Gallery />
        </div>
      </div>
      <div id="footer">
        <FloatingDockDemo />
      </div>
    </div>
  );
};

export default App;
