import {useState} from 'react'

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
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#product-list">Shop</a></li>
                <li><a href="#">Skincare Blog</a></li>
                <li><a href="#">Decoration Blog</a></li>
            </ul>
        </div>
    )
}
