import React from 'react';
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Contact from '../pages/Contact.jsx';
import Doctors from '../pages/Doctor/Doctors.jsx';
import Doctordetails from '../pages/Doctor/Doctordetails.jsx';

import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<Doctordetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  );
};

export default Routers;
