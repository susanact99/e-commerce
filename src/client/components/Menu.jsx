import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Menu() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="menu">
      <button className="menu-toggle" onClick={() => setToggle(!toggle)}>
        <i className={toggle ? "bi bi-x-lg" : "bi bi-justify"}></i>
      </button>
      <ul className={`nav-links animate__animated  ${toggle ? "show animate__slideInDown" : ""}`}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/shop" className={({ isActive }) => isActive ? "active-link" : ""}>Shop</NavLink></li>
        <li><NavLink to="/skincare" className={({ isActive }) => isActive ? "active-link" : ""}>Skincare Blog</NavLink></li>
        <li><NavLink to="/decoration" className={({ isActive }) => isActive ? "active-link" : ""}>Decoration Blog</NavLink></li>
      </ul>
    </div>
  );
}
