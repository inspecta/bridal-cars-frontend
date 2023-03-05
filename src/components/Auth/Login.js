/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { fetchUser } from '../../redux/features/user';
import AlertComponent from '../Alert/Alert';
import { triggerAlert } from '../../redux/features/alert';

const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';

const Login = () => {
  const alert = useSelector((state) => state.alert);

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
      const hashedPassword = bcrypt.hashSync(formData.password, salt);
      const userData = {
        user: { ...formData, password: hashedPassword },
      };
      dispatch(fetchUser(userData)).then((result) => {
        if (
          result.payload !== undefined &&
          Object.keys(result.payload).length > 0
        ) {
          navigate('/cars');
        } else {
          dispatch(
            triggerAlert({
              heading: 'Error Signing In',
              message: 'Please check your email or password!',
              variant: 'danger',
            }),
          );
        }
      });
    }
  };
  return (
    <>
      {alert.status && (
        <AlertComponent
          heading={alert.heading}
          message={alert.message}
          variant={alert.variant}
        />
      )}
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
    </>
  );
};

export default Login;
