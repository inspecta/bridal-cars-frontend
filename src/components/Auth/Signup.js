import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { triggerAlert } from '../../redux/features/alert';

const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const url = 'https://bridal-cars.onrender.com/users';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle user registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      dispatch(
        triggerAlert({
          heading: 'Error Registering',
          message: 'Please fill in the form completely!',
          variant: 'danger',
        }),
      );
    } else {
      setIsSubmitting(true);
    }

    const hashedPassword = bcrypt.hashSync(password, salt);
    const user = { username, email, password: hashedPassword };
    try {
      const response = await axios.post(url, { user });
      if (response.status === 200) {
        // Store the JWT (Local storage)
        const userDetails = {
          id: response.data.status.data.id,
          username: response.data.status.data.username,
          token: response.headers.authorization,
        };
        localStorage.setItem('user', JSON.stringify(userDetails));

        navigate('/cars', {
          state: { message: `${username} successfully registered!` },
        });
      }
    } catch (error) {
      // error.response.data;
    }

    setEmail('');
    setPassword('');
    setUsername('');
    setIsSubmitting(false);
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login_container">
      {isSubmitting && (
        <div className="loader-overlay">
          <div className="loader-spinner" />
        </div>
      )}
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <div className="login_field">
          <p>Username:</p>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login_field">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="login_field">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login_field">
          <p>Confirm Password:</p>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm your password"
          />
        </div>
        <div className="login_field">
          <button type="submit">
            Register
          </button>
        </div>
        <div className="login_field btn_2">
          <button type="button" onClick={() => redirectToLogin()}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
