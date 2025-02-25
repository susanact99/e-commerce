import React from 'react'
import header1 from '../assets/carousel/header1.jpg'
import header6 from '../assets/carousel/header6.jpg'
import header8 from '../assets/carousel/header8.jpg'
import '../styles/carousel.css';

{/*El carrucel no funciona*/}

export function Carousel(props) {
    return (
        <div id="carouselExampleCaptions" className="carousel slide nunito-font" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={header1} className="d-block w-100 carousel-image" alt="Decoration" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={header6} className="d-block w-100 carousel-image" alt="Makeup" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={header8} className="d-block w-100 carousel-image" alt="Skincare" />
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
