import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navigation from './components/Navigations/Navigations';
import CarDetails from './components/cars/CarDetails';
import Cars from './components/cars/Cars';
import AddCar from './components/cars/AddCar';
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
        <Route exact path="/cars" element={<Cars />} />
        <Route exact path="/car-details" element={<CarDetails />} />
        <Route exact path="/add-car" element={<AddCar />} />
      </Routes>
    </div>
  );
}

export default App;
