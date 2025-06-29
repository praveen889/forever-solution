import React from 'react'
import Navbar from '../components\'/Navbar'
import Footer from '../components\'/Footer'
import './css/ac.css'
import AutomationPic from '../assets/images/ac.jpg'
import CheckCircle from '../assets/images/check-circle.svg'

function AirConditionar() {
  return (
    <div>
        <Navbar/>
        <div className='ac-banner'>
            <h1 className='ac-banner-heading'>Air Conditioning Services</h1>
            <p className='ac-banner-para'>Stay cool and comfortable with our expert AC solutions.</p>
        </div>
        <div className='ac-description'>
            <div className='ac-main-description'>
                <h1 className='description-heading'>Peak Performance & Efficiency</h1>
                <p className='description-para'>We specialize in the installation, repair, and maintenance of all major AC brands and types, including split and central air systems. Our goal is to ensure your system runs efficiently, saving you money and keeping you cool.</p>
                <div className='description-points'>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>New AC Unit Installation & Setup</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Annual Maintenance Contracts (AMC)</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Emergency Repair Services (24/7)</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle} style={{color:'green'}}/>
                        <p>Deep Cleaning & Gas Refilling</p>
                    </div>
                </div>
            </div>
            <div className='ac-description-image'>
                <img className='ac-image' src={AutomationPic}/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AirConditionar