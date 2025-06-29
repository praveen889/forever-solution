import React from 'react'
import Navbar from '../components\'/Navbar'
import Footer from '../components\'/Footer'
import './css/aboutus.css'
import Team from '../assets/images/team.jpg'
import CheckCircle from '../assets/images/check-circle.svg'

function AboutUs() {
  return (
    <div>
        <Navbar/>
        <div className='about-banner'>
            <h1 className='about-banner-heading'>About Forever Solutions</h1>
            <p className='about-banner-para'>Your local experts in home technology and comfort, based in Delhi and NCR region.</p>
        </div>
        <div className='about-description'>
            <div className='description-image'>
                <img className='team-image' src={Team}/>
            </div>
            <div className='about-main-description'>
                <h1 className='description-heading'>Our Mission</h1>
                <p className='description-para'>Our mission is to bring the best of modern technology to homes and businesses across Delhi NCR. We believe in providing reliable, high-quality services that genuinely improve our clients' daily lives. We are committed to excellent craftsmanship, transparent pricing, and unparalleled customer support.</p>
                <h1 className='description-heading-two'>Our Core Values</h1>
                <div className='description-points'>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Quality First</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Customer Focus</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Integrity & Honesty</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs