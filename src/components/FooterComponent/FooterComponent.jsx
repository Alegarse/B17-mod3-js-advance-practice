import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="py-3 mt-4 bg-dark text-white">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <p className="col-md-4 mb-0">© 2025 Company, Inc</p>

        <a
          href="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src="logo.png" alt="Filmax logo" />
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2">
              About
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
