import React from 'react'
import Navbar from '../components\'/Navbar'
import Footer from '../components\'/Footer'
import "./css/home.css"
import BannerImage from '../assets/images/banner.jpg'
import HomeService from '../assets/images/home.svg'
import AcService from '../assets/images/thermometer.svg'
import VideoService from '../assets/images/video.svg'


function Home() {
  return (
    <div className='main-home-div'>
        {/* <Navbar/> */}
        <div className='home-start-div'>
            <div className='banner-left'>
                <h1 className='banner-heading'>Experience the Future of Living</h1>
                <p className='banner-para'>We integrate cutting-edge technology to make your home smarter, more comfortable, and secure. Proudly serving Delhi and through out all NCR region.</p>
            </div>
            <div className='banner-right'>
                <img className='banner-image' src={BannerImage}/>
            </div>
        </div>
        <div className='home-services'>
            <div className='home-services-top'>
                <h1 className='home-services-heading'>Our Core Services</h1>
                <p className='home-services-para'>Comprehensive solutions for modern living.</p>
                <div className='services-card'>
                    <div className='card'>
                        <img className='card-logo' src={HomeService}/>
                        <h1 className='card-heading'>Home Automation</h1>
                        <p className='card-para'>Integrate and control every aspect of your home with one simple system.</p>
                        <a className='card-link' href='/home-automation'>Learn more</a>
                    </div>
                    <div className='card'>
                        <img className='card-logo' src={AcService}/>
                        <h1 className='card-heading'>AC Services</h1>
                        <p className='card-para'>Reliable installation, maintenance, and repair to ensure your comfort.</p>
                        <a className='card-link' href='/ac-services'>Learn more</a>
                    </div>
                    <div className='card'>
                        <img className='card-logo' src={VideoService}/>
                        <h1 className='card-heading'>CCTV Security</h1>
                        <p className='card-para'>Protect what matters most with high-definition surveillance systems.</p>
                        <a className='card-link' href='/cctv-services'>Learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='home-process-div'>
            <h1 className='home-process-heading'>Our Simple 4-Step Process</h1>
            <p className='home-process-para'>From concept to completion, we make it easy.</p>
            <div className='home-process-card-div'>
                <div className='process-card'>
                    <div className='process-card-top'>
                        <h1 className='process-card-heading'>1</h1>
                    </div>
                    <h1 className='process-heading'>Consultation</h1>
                    <p className='process-para'>We discuss your needs and assess your space.</p>
                </div>
                <div className='process-card'>
                     <div className='process-card-top'>
                        <h1 className='process-card-heading'>2</h1>
                    </div>
                    <h1 className='process-heading'>Custom Design</h1>
                    <p className='process-para'>We create a tailored solution and proposal for you.</p>
                </div>
                <div className='process-card'>
                     <div className='process-card-top'>
                        <h1 className='process-card-heading'>3</h1>
                    </div>
                    <h1 className='process-heading'>Installation</h1>
                    <p className='process-para'>Our expert technicians install and configure everything.</p>
                </div>
                <div className='process-card'>
                     <div className='process-card-top'>
                        <h1 className='process-card-heading'>4</h1>
                    </div>
                    <h1 className='process-heading'>Support</h1>
                    <p className='process-para'>We provide ongoing support and maintenance.</p>
                </div>
            </div>
        </div>
        <div className='home-technology-div'>
            <h1 className='home-technology-heading'>Trusted Technology Partners</h1>
            <p className='home-technology-para'>We use only the best brands in the industry for reliability and performance.</p>
            <div className='technology-names'>
                <div className='technology-names-div'>
                    <p className='names'>Hikvision</p>
                </div>
                <div className='technology-names-div'>
                    <p className='names'> CP Plus</p>
                </div>
                <div className='technology-names-div'>
                    <p className='names'>Samsumg</p>
                </div>
                <div className='technology-names-div'>
                    <p className='names'>Voltas</p>
                </div>
                <div className='technology-names-div'>
                    <p className='names'>Haier</p>
                </div>
            </div>
        </div>
        <div className='home-last'>
            <h1 className='home-last-heading'>Ready to Modernize Your Home?</h1>
            <p className='home-last-para'>Let's build a smarter, more comfortable, and secure environment for you and your family.</p>
            <a className='home-last-link'>Get Your Free Consultation Today</a>
        </div>
        {/* <Footer/> */}
    </div>
  )
}

export default Home