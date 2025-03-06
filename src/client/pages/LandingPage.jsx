"use client"

import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import "../styles/landing-page.css"
import "animate.css"
import User1 from '../assets/Users/user1.jpg'
import User2 from '../assets/Users/user2.jpg'
import User3 from '../assets/Users/user3.jpg'


const LandingPage = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", entry.target.dataset.animation)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".reveal").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      document.querySelectorAll(".reveal").forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="animate__animated animate__fadeInDown">Discover Your Aesthetic</h1>
          <p className="animate__animated animate__fadeIn animate__delay-1s">
            Curated pieces for your unique style journey
          </p>
          <NavLink to="/shop">
            <button className="shop-now-btn animate__animated animate__fadeInUp animate__delay-1s">
              Explore Collection
            </button>
          </NavLink>
        </div>
        <div className="hero-image animate__animated animate__fadeIn animate__delay-2s">
          <img src="https://img.freepik.com/foto-gratis/senora-sensual-flor-chica-caucasica-moda-posando-planta_197531-14055.jpg?t=st=1741262673~exp=1741266273~hmac=1b020634a408c0f522d68ad7868474dd72f3976f834c3db9ac5d26247dae96ed&w=740" alt="Elegant lifestyle" />
        </div>
      </header>

      <section className="categories">
        <h2 className="section-title reveal" data-animation="animate__fadeInUp">
          Shop By Category
        </h2>
        <div className="category-grid">
          <div className="category-card reveal" data-animation="animate__fadeInUp">
            <div className="category-image">
              <img src="https://img.freepik.com/foto-gratis/retrato-modelo-bastante-joven-elegante-abrigo-mullido-invierno-sombrero-negro-posando_273443-2392.jpg?t=st=1741263051~exp=1741266651~hmac=82a4f8ab009197106c110f87cf1ce841ea4ae1b8f97a0d9f8e0c8dd9f93877aa&w=826" alt="Apparel" />
            </div>
            <h3>Women's clothing</h3>
            <NavLink to="/shop" className="category-link">
              Discover <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
          <div className="category-card reveal" data-animation="animate__fadeInUp">
            <div className="category-image">
              <img src="https://img.freepik.com/foto-gratis/retrato-mujer-maquillaje-joyas_23-2150738229.jpg?t=st=1741262974~exp=1741266574~hmac=44d571915f14c92c680b6cddcd5537ce67810eb292dff4d7f8c652f7fe2ee156&w=740" alt="Accessories" />
            </div>
            <h3>Accessories</h3>
            <NavLink to="/shop" className="category-link">
              Discover <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
          <div className="category-card reveal" data-animation="animate__fadeInUp">
            <div className="category-image">
              <img src="https://img.freepik.com/foto-gratis/joven-guapo-traje-calle_1303-19660.jpg?t=st=1741263197~exp=1741266797~hmac=701af3450993f98f338b4b4793ea8958a044bcbb89cd2ae17ae0f77e2d46a31d&w=740" alt="Home" />
            </div>
            <h3>Men's clothing</h3>
            <NavLink to="/shop" className="category-link">
              Discover <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title reveal" data-animation="animate__fadeInUp">
          Why Choose Us
        </h2>
        <div className="features-container">
          <div className="feature reveal" data-animation="animate__fadeInUp">
            <div className="feature-icon">
              <i className="bi bi-truck"></i>
            </div>
            <div className="feature-content">
              <h3>Fast Shipping</h3>
              <p>Get your orders delivered quickly and reliably to your doorstep</p>
            </div>
          </div>
          <div className="feature reveal" data-animation="animate__fadeInUp">
            <div className="feature-icon">
              <i className="bi bi-shield-check"></i>
            </div>
            <div className="feature-content">
              <h3>Quality Assurance</h3>
              <p>Carefully selected materials and rigorous quality control</p>
            </div>
          </div>
          <div className="feature reveal" data-animation="animate__fadeInUp">
            <div className="feature-icon">
              <i className="bi bi-credit-card"></i>
            </div>
            <div className="feature-content">
              <h3>Secure Payment</h3>
              <p>100% secure transactions with multiple payment options</p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title reveal" data-animation="animate__fadeInUp">
          What Our Customers Say
        </h2>
        <div className="testimonials-container">
          <div className="testimonial reveal" data-animation="animate__fadeInUp">
            <div className="quote-icon">
              <i className="bi bi-quote"></i>
            </div>
            <p className="testimonial-text">
              The quality of their products exceeded my expectations. Absolutely in love with my purchase!
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={User1} alt="Customer" />
              </div>
              <div className="author-info">
                <h4>Emma Johnson</h4>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial reveal" data-animation="animate__fadeInUp">
            <div className="quote-icon">
              <i className="bi bi-quote"></i>
            </div>
            <p className="testimonial-text">
              Fast shipping and the attention to detail in packaging made the unboxing experience special.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={User2} alt="Customer" />
              </div>
              <div className="author-info">
                <h4>Michael Chen</h4>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-half"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial reveal" data-animation="animate__fadeInUp">
            <div className="quote-icon">
              <i className="bi bi-quote"></i>
            </div>
            <p className="testimonial-text">
              Their customer service is exceptional. They went above and beyond to help me find the perfect piece.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={User3} alt="Customer" />
              </div>
              <div className="author-info">
                <h4>Sophia Martinez</h4>
                <div className="rating">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content reveal" data-animation="animate__fadeInUp">
          <h2>Join Our Community</h2>
          <p>Subscribe to receive updates on new arrivals, special offers, and styling tips.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Curating timeless pieces that blend elegance with modern sensibility for the discerning individual.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/shop">Shop All</NavLink>
              </li>
              <li>
                <NavLink to="/about">Our Story</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact Us</NavLink>
              </li>
              <li>
                <NavLink to="/faq">FAQ</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sweet Life. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

