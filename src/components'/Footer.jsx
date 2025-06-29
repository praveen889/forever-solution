import React from 'react'
import './css/footer.css'
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import PhoneImg from '../assets/images/wphone.svg'
import EmailImg from '../assets/images/wmail.svg'
import LocationPinImg from '../assets/images/wmap-pin.svg'

function Footer() {
  return (
    <div className='footer-main'>
        <div className='footer-top'>
            <div className='footer-row'>
                <h2 className='footer-row-heading'>Forever Solutions</h2>
                <a className='footer-links'>Bringing the future to your doorstep.</a>
                <div className='footer-contact'>
                    <img src={PhoneImg} className='footer-contact-img'/>
                    <a className='footer-links'>+91 8383006747, +91 9999672416</a>
                </div>
                <div className='footer-contact'>
                    <img src={EmailImg} className='footer-contact-img'/>
                    <a className='footer-links'>foreversolution60@gmail.com</a>
                </div>
                 <div className='footer-contact'>
                    <img src={LocationPinImg} className='footer-contact-img' />
                    <a className='footer-links'>C-858 Sangam Vihar, New Delhi - 110062</a>
                </div>
            </div>
            <div className='footer-row'>
                <h2 className='footer-row-heading'>Quick Links</h2>
                <a className='footer-links' href='/'>Home</a>
                <a className='footer-links' href='/aboutus'>About Us</a>
                <a className='footer-links' href='/contact'>Contact Us</a>
            </div>
            <div className='footer-row'>
                <h2 className='footer-row-heading'>Services</h2>
                <a className='footer-links' href='/home-automation'>Home Automation</a>
                <a className='footer-links' href='/ac-services'>AC Services</a>
                <a className='footer-links' href='/cctv-services'>CCTV Installation</a>
            </div>
            <div className='footer-row'>
                <h2 className='footer-row-heading'>Follow Us</h2>
                <div className='footer-social'>
                    <FaWhatsapp size={26} color='rgb(156 163 175)'/><FaFacebookF size={26} color='rgb(156 163 175)'/><FaInstagram size={26} color='rgb(156 163 175)'/>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <p className='footer-bottom-para'>© 2025 Forever Solutions. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer