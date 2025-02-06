import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-5">
      <div className="container-fluid d-flex justify-content-between">

        <div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5">Skincare Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5">Decoration Blog</a>
              </li>
            </ul>
          </div>
        </div>
        {/*Aumentar el ancho del input*/}
        <div>
          <form className="d-flex " role="search">
            <div className="input-group ">
              <input className="form-control" type="search" placeholder="Search..." aria-label="Search" />
              <button className="btn btn-dark" type="submit">
                <i className="bi bi-search text-white"></i>
              </button>
            </div>
          </form>
        </div>


        <div>
          <i className="bi bi-cart4 fs-3" ></i>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
