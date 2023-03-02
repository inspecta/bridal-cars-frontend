/* eslint-disable jsx-quotes */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navigation from './components/Navigations/Navigations';
import './App.css';
import './fonts/vespa.ttf';

function App() {
  const location = useLocation();
  return (
    <div className="d-flex">
      {location.pathname !== '/' && <Navigation />}
      <Routes>
        <Route exact path="/" element={<Auth />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
