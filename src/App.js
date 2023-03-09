/* eslint-disable operator-linebreak */
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './components/Auth/Auth';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navigation from './components/Navigations/Navigations';
import CarDetails from './components/cars/CarDetails';
import Cars from './components/cars/Cars';
import AddCar from './components/cars/AddCar';
import PrivateRoutes from './utils/PrivateRoutes';
import AuthenticationRoutes from './utils/AuthenticationRoutes';
import AlertComponent from './components/Alert/Alert';
import DeleteCar from './components/cars/DeleteCar';
import './App.css';
import './fonts/vespa.ttf';
import Reservation from './components/cars/Reservation';
import ReserveHome from './components/cars/ReserveHome';
import MyReservations from './components/cars/MyReservations';

function App() {
  const alert = useSelector((state) => state.alert);

  const location = useLocation();
  return (
    <div className="d-flex">
      {location.pathname !== '/' &&
        location.pathname !== '/signup' &&
        location.pathname !== '/login' && <Navigation />}
      {alert.status && (
        <AlertComponent
          heading={alert.heading}
          message={alert.message}
          variant={alert.variant}
        />
      )}
      <Routes>
        <Route element={<AuthenticationRoutes />}>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/cars" element={<Cars />} />
          <Route exact path="/car-details" element={<CarDetails />} />
          <Route exact path="/add-car" element={<AddCar />} />
          <Route exact path="/delete-car" element={<DeleteCar />} />
          <Route exact path="/reserve-car" element={<ReserveHome />} />
          <Route exact path="/reservation-form" element={<Reservation />} />
          <Route exact path="/my-reservations" element={<MyReservations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
