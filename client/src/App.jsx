import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/sign-in' exact element={<SignIn />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/profile' exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
