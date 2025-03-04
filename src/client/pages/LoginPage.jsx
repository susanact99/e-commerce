import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/login.css';

export const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="container-log">
      <div className={`form-container ${isSignUp ? 'sign-up' : ''}`}>
        <form className="form-box">
          <h2>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
          <div className="input-box">
            <i className="bi bi-envelope"></i>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <i className="bi bi-lock"></i>
            <input type="password" placeholder="Password" required />
          </div>
          {isSignUp && (
            <div className="input-box">
              <i className="bi bi-person"></i>
              <input type="text" placeholder="Username" required />
            </div>
          )}
          <button type="submit" className="btn-login">{isSignUp ? 'Sign Up' : 'Login'}</button>
          <p onClick={toggleForm} className="toggle">{isSignUp ? 'Already have an account? Log In' : 'Don’t have an account? Sign Up'}</p>
        </form>
      </div>
    </div>
  );
};


