import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';

const Signup = () => {
  const navigate = useNavigate();

  const url = 'https://bridal-cars.onrender.com/users';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Handle user registration
  const handleSubmit = async (e) => {
    e.preventDefault();
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
      return error.response.data;
    }

    setEmail('');
    setPassword('');
    setUsername('');

    return true;
  };

  const redirectToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="login_container">
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
          <button type="submit">Register</button>
        </div>
        <div className="login_field btn_2">
          <button type="button" onClick={() => redirectToLogin()}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
