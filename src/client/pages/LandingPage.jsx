import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/landing-page.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      
      <header className="hero-section">
        <h2>Discover Your Aesthetic</h2>
        <p>Curated pieces for your unique style</p>
        <NavLink to='/shop'><button className="shop-now-btn">Shop Now</button></NavLink>
        
      </header>

      <section className="features">
        <div className="feature">
          <i className="bi bi-truck"></i>
          <h3>Fast Shipping</h3>
          <p>Get your orders delivered quickly</p>
        </div>
        <div className="feature">
          <i className="bi bi-shield-check"></i>
          <h3>Quality Assurance</h3>
          <p>Only the best materials</p>
        </div>
        <div className="feature">
          <i className="bi bi-credit-card"></i>
          <h3>Secure Payment</h3>
          <p>100% secure transactions</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
