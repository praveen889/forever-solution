import React, { useState } from 'react';
import './css/navbar.css';
import ArrowDown from '../assets/images/chevron-down.svg'

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className='nav-main'>
      <div className='nav-logo'>
        <h2 className='logo-left'>Forever </h2>
        <h2 className='logo-right'>Solutions</h2>
      </div>
      <div className='nav-links'>
        <a className='nav-link' href='/'>Home</a>

        {/* Services Dropdown */}
        <div 
          className='nav-link dropdown' 
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a>Services</a>
          <img src={ArrowDown}/>
          {isDropdownOpen && (
            <div className='dropdown-menu'>
              <a href='/home-automation' className='dropdown-item'>Home Automation</a>
              <a href='/ac-services' className='dropdown-item'>AC Services</a>
              <a href='/cctv-services' className='dropdown-item'>CCTV Installation</a>
            </div>
          )}
        </div>

        <a className='nav-link' href='/contact'>Contact Us</a>
        <a className='nav-link' href='/aboutus'>About Us</a>
      </div>
    </div>
  );
}

export default Navbar;
