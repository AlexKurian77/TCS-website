import "./Navbar.css";
import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import AnimatedButton from './AnimatedModel'

const Navbar = () => {
  useEffect(()=>{
    
  },[])
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <ul className="nav-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/sponsor">Sponsor Us</Link></li>
          <li className="nav-contact"><Link to="/contact">Contact Us</Link></li>
        </ul>
        <AnimatedButton />
      </div>
    </div>
  );
};

export default Navbar;
