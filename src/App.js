import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Auth />}/>
          <Route exact path="/login" element={<Login /> }/>
          <Route exact path="/signup" element={<Signup /> }/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
