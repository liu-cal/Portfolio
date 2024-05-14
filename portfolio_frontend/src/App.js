import logo from './logo.svg';
import './App.css';
import PageNavbar from './components/PageNavbar';
import Footer from './components/Footer';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/Contact';
import AboutMePage from './pages/AboutMePage';
import BlogPage from './pages/Blog';
import ConfirmationPage from './pages/ConfirmationPage';
import React, { useState } from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/Skills" Component={SkillsPage} />
          <Route path="/Contact" Component={ContactPage} />
          <Route path="/About" Component={AboutMePage} />
          <Route path="/Blog" Component={BlogPage} />
          <Route path="/Confirmation" Component={ConfirmationPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
