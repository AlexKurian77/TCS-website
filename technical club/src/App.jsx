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

const App = () => {
  
  return (
    <div>
      <Router>
        <div className="navbar">
          <NavbarDemo />
          <TailwindcssButtons />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}  />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hack" element={<div>Hack Page</div>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
