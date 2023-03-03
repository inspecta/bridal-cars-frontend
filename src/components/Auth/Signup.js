import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';

const salt = '$2a$10$CwTycUXWue0Thq9StjUM0u';

const Signup = () => {
  const navigate = useNavigate();

  const url = 'http://localhost:3000/users';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // // Check if JWT already exists in the local storage
  // const [jwt, setJwt] = useState(null);

  // useEffect(() => {
  //   const storedJwt = localStorage.getItem('jwt');
  //   if (storedJwt) {
  //     setJwt(storedJwt);
  //   }
  // }, []);

  // // If jwt exists, redirect to the main page
  // useEffect(() => {
  //   if (jwt) {
  //     navigate('/cars', { state: { message: 'You are already signed in.' } });
  //   }
  // }, [jwt, navigate]);

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
  return (
    <div className="register-user-container">
      <h1>Register User</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <p>Username:</p>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <p>Email:</p>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="field">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your password."
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <p>Confirm Password:</p>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm your password"
          />
        </div>
        <div className="field">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
