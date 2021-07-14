import React from 'react';
import Navbar from './Navbar';

function Header(){
  return(
    <div id="main">
      <Navbar />
      <div className="name">
        <h1><span>Launch Your App</span>With Confidence And Creativity</h1>
        <p className="details">Lorem ipsum dolor sit amet, consectetur
           adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
           magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
        <a herf='#' className="cv-btn">Download</a>
      </div>
    </div>
  )
}

export default Header;
