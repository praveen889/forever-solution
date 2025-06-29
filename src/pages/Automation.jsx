import React from 'react'
import './css/automation.css'
import Navbar from '../components\'/Navbar'
import Footer from '../components\'/Footer'
import AutomationPic from '../assets/images/home-automation.jpg'
import CheckCircle from '../assets/images/check-circle.svg'

function Automation() {
  return (
    <div>
        <Navbar/>
        <div className='home-automation-main'>
            <div className='home-automation-banner'>
                <h1 className='home-automation-banner-heading'>Home Automation</h1>
                <p className='home-automation-banner-para'>Seamless control over your entire home environment.</p>
            </div>
            <div className='home-automation-description'>
                <div className='description-image'>
                    <img className='automation-image' src={AutomationPic}/>
                </div>
                <div className='automation-description'>
                    <h1 className='description-heading'>One-Touch Simplicity</h1>
                    <p className='description-para'>Our home automation solutions unify all your smart devices into a single, user-friendly interface. Control lighting, thermostats, security, entertainment, and more from your phone or voice commands.</p>
                    <div className='description-points'>
                        <div className='main-description-points'>
                            <img src={CheckCircle}/>
                            <p>Smart Lighting & Climate Control</p>
                        </div>
                        <div className='main-description-points'>
                            <img src={CheckCircle}/>
                            <p>Automated Blinds & Curtains</p>
                        </div>
                        <div className='main-description-points'>
                            <img src={CheckCircle}/>
                            <p>Multi-Room Audio & Video</p>
                        </div>
                        <div className='main-description-points'>
                            <img src={CheckCircle} style={{color:'green'}}/>
                            <p>Voice Assistant Integration (Alexa, Google Assistant)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='questions'>
                <h1 className='questions-heading'>Frequently Asked Questions</h1>
                <div className='question-answer-div'>
                    <p className='question'>What devices can I control?</p>
                    <div className='answer-div'>
                        <p className='answer'>You can control lights, fans, ACs, TVs, curtains, geysers, and much more. If it's electronic, we can likely automate it.</p>
                    </div>
                    <p className='question'>Do I need to rewire my house?</p>
                    <div className='answer-div'>
                        <p className='answer'>Not at all! Most of our solutions are retrofit-based, meaning they can be installed behind your existing switchboards without any new wiring.</p>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Automation;