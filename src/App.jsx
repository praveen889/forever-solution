import './App.css'
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Automation from './pages/Automation';
import AirConditionar from './pages/AirConditionar';
import CCTV from './pages/CCTV';
import ContactUs from './pages/ContactUs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home-automation' element={<Automation/>}/>
        <Route path='/ac-services' element={<AirConditionar/>}/>
        <Route path='/cctv-services' element={<CCTV/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
