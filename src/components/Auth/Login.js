import React from 'react';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('working');
  };
  return (
    <div className="login_container">
      <h1>Welcome back</h1>
      <form onSubmit={handleSubmit}>
        <div className="login_field">
          <p>Email:</p>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="login_field">
          <p>Password:</p>
          <input
            type="password"
            name="password"
            placeholder="Enter your username"
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
