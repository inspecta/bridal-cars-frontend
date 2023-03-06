/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '../../redux/features/user';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e.target.name === 'email') {
      setFormData({
        email: e.target.value,
        password: formData.password,
      });
    } else {
      setFormData({
        email: formData.email,
        password: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.length > 0 && formData.password.length > 0) {
      const userData = {
        user: formData,
      };
      dispatch(fetchUser(userData)).then((result) => {
        if (
          result.payload !== undefined &&
          Object.keys(result.payload).length > 0
        ) {
          navigate('/cars',
            {
              state: {
                user: result.payload,
              },
            });
        }
      });
    }
  };
  return (
    <div className="login_container">
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div className="login_field">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={handleInput}
          />
        </div>
        <div className="login_field">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInput}
          />
        </div>
        <div className="login_field">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
