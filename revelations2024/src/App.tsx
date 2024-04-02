import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import ErrorPage from './pages/ErrorPage';
import SchedulePage from './pages/SchedulePage';
import OurTeamPage from './pages/OurTeamPage';
import "aos/dist/aos.css"
import  AOS from 'aos';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/our-team" element={<OurTeamPage/>}/>
      <Route path="/events" element={<EventPage/>}/>
      <Route path="/schedule" element={<SchedulePage/>}/>
      <Route path ="*" element={<ErrorPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
