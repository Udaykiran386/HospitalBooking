import React from 'react';
import Home from '../pages/Home.jsx';
import Services from '../pages/Services.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Contact from '../pages/Contact.jsx';
import Doctors from '../pages/Doctor/Doctors.jsx';
import Doctordetails from '../pages/Doctor/Doctordetails.jsx';
import MyAccount from '../Dashborad/User-Account/MyAccount.jsx';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Dashborad/Doctor-Account/Dashboard.jsx';
import ProtectedRoutes from './ProtectedRoutes.jsx';

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
      <Route path='/users/profile/me' element={<MyAccount/>}/>
      <Route path='/doctors/profile/me' element={<Dashboard/>}/>
    </Routes>
  );
};

export default Routers;
