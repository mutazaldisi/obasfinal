import React from 'react';


import './App.css';
import NavBar from './components/NavBar';

import ContactUs from './pages/ContactUs';
import Facilities from './pages/Facilities';
import Home from './pages/Home';
import{Route, Routes} from "react-router-dom"
import League from './pages/League';
import Register from './pages/Register';
import Services from './pages/Services';
import Staff from './pages/Staff';
import Footer from './components/Footer';
import ContactUsThankyou from './pages/ContactUsThankyou';
import RegisterThankyou from './pages/RegisterThankyou';
import NotFoundPage from './pages/NotPageFound';


function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/league" element={<League />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/contactUsThankyou" element={<ContactUsThankyou />} />
          <Route path="/registerThankyou" element={<RegisterThankyou />} />
          <Route path="*" element={<NotFoundPage />} />
        
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App


