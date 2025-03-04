import React from 'react'
import { NavLink } from 'react-router-dom'

export function NotFound() {


    return (
        <section className="d-flex flex-column align-items-center justify-content-center vh-100 ">
            <h2>404</h2>
            <h3>Page not found</h3>
            <h4 className='text-center'>The page you're looking for doesn't exist or has been moved. <i className="bi bi-emoji-frown"></i></h4>
            <NavLink to='/' className='btn'> <i className="bi bi-chevron-left"></i> Go back</NavLink>
        </section>


    )
}
