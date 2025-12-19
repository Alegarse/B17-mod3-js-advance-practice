import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getDataMoviesFetch,
  searchMovieByTitleFetch,
} from '../../core/services/api/apiMoviesFetch';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [inputTitle, setInputTitle] = useState(undefined);

  const searchMovieByTitle = () => {
    if (inputTitle) {
      searchMovieByTitleFetch(dispatch, inputTitle);
    } else {
      getDataMoviesFetch(dispatch);
    }
  };

  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center">
            <img src="logo.png" alt="Filmax logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link className="nav-link px-2 link" to={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link px-2 link" to={'/'}>
                  Features
                </Link>
              </li>
              <li>
                <Link className="nav-link px-2 link" to={'/'}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="nav-link px-2 link" to={'/'}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="nav-link px-2 link" to={'/about'}>
                  About
                </Link>
              </li>
            </ul>

            <div className="d-flex" role="search" id="search-movie-form">
              {true && (
                <>
                  <input
                    id="search-movie-input"
                    className="form-control me-2"
                    type="search"
                    placeholder="Buscar pelicula"
                    aria-label="Search"
                    onChange={(e) => setInputTitle(e.target.value)}
                  />
                  <button
                    id="search-movie-btn"
                    className="btn btn-primary"
                    onClick={searchMovieByTitle}
                  >
                    Buscar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeaderComponent;
