import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Auth = () => {
  const navigate = useNavigate();
  const routeChange = (path) => {
    navigate(path);
  };
  return (
    <div className="app">
      <div className="btn-container">
        <div className="login">
          <h1>BRIDAL CAR RESERVATION</h1>
        </div>
        <div className="login">
          <Button
            color="primary"
            className="px-4"
            onClick={() => routeChange('login')}
          >
            Login
          </Button>
        </div>
        <div className="login">
          <Button
            color="primary"
            className="px-4"
            onClick={() => routeChange('signup')}
          >
            Signup
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
