import React from 'react'
import Navbar from '../components\'/Navbar'
import Footer from '../components\'/Footer'
import './css/cctv.css'
import Cctv from '../assets/images/cctv.jpg'
import CheckCircle from '../assets/images/check-circle.svg'

function CCTV() {
  return (
    <div>
        <Navbar/>
        <div className='cctv-banner'>
            <h1 className='cctv-banner-heading'>CCTV & Security Solutions</h1>
            <p className='cctv-banner-para'>Your trusted partner in home and business security.</p>
        </div>
        <div className='cctv-description'>
            <div className='description-image'>
                <img className='cctv-image' src={Cctv}/>
            </div>
            <div className='cctv-main-description'>
                <h1 className='description-heading'>Constant Vigilance</h1>
                <p className='description-para'>We provide high-definition CCTV camera systems that give you a clear view of your property, day or night. Access live feeds from anywhere in the world on your smartphone.</p>
                <div className='description-points'>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>HD & 4K Camera Systems</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Night Vision & Motion Detection Alerts</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle}/>
                        <p>Remote Viewing on Mobile/PC</p>
                    </div>
                    <div className='main-description-points'>
                        <img src={CheckCircle} style={{color:'green'}}/>
                        <p>DVR/NVR with Ample Storage</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default CCTV