import React from 'react'
import Navbar from '../components\'/Navbar'
import Footer from '../components\'/Footer'
import './css/contact.css'
import PhoneImg from '../assets/images/phone.svg'
import EmailImg from '../assets/images/mail.svg'
import LocationPinImg from '../assets/images/map-pin.svg'

function ContactUs() {
  return (
    <div>
        <Navbar/>
        <div className='contact-us-main'>
            <h1 className='contact-heading'>Get in Touch</h1>
            <p className='contact-para'>Have a question or ready to start a project? We'd love to hear from you.</p>
            <div className='contact-us-form'>
                <div className='contact-form-left'>
                    <label className='contact-label'>Full Name</label>
                    <input className='contact-input' placeholder='Enter your name...'/>
                    <label className='contact-label'>Email</label>
                    <input className='contact-input' placeholder='Enter your email...'/>
                    <label className='contact-label'>Message</label>
                    <textarea className='contact-textarea' placeholder='Write your message..'></textarea>
                    <button className='contact-submit-btn'>Submit</button>
                </div>
                <div className='contact-form-right'>
                    <h2>Contact Information</h2>
                    <div className='info'>
                        <img className='contact-icons' src={PhoneImg}/>
                        <p>+91 8383006747, +91 9999672416</p>
                    </div>
                    <div className='info'>
                        <img className='contact-icons' src={EmailImg}/>
                        <p>foreversolution60@gmail.com</p>
                    </div>
                    <div className='info'>
                        <img className='contact-icons' src={LocationPinImg}/>
                        <p>C-858 Sangam Vihar, New Delhi - 110062</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs