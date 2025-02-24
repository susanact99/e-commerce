import {useState} from 'react'
import { Link } from 'react-router-dom';

export function Menu() {
    const [toggle, setToggle] = useState(false);


    return (
        <div className="menu">
            <button
                className="menu-toggle"
                onClick={() => setToggle(!toggle)}
            >
                <i className={toggle ? "bi bi-x-lg" : "bi bi-justify"}></i>
            </button>
            <ul className={`nav-links ${toggle ? "show" : ""}`}>
                <li><Link to="/" className="active">Home</Link></li>
                <li><a href="#product-list">Shop</a></li>
                <li><Link to="/skincare">Skincare Blog</Link></li>
                <li><Link to="/decoration">Decoration Blog</Link></li>
            </ul>
        </div>
    )
}
