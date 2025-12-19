import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <div className="body-404-container">
        <div className="page-404-container">
          <img className="" src="/error-404.png" alt="" />
          <div className="info-404-container">
            <h2 className="title-error-404">Error code: 404</h2>
            <h2>
              Ups! Parece que al que creaba las páginas de este sitio se le ha
              agotado la batería y ahora ya no se encuentra lo que estabas
              buscando...
            </h2>
            <button className="btn-to-home" onClick={goHome}>
              Volver a la home
            </button>
          </div>
        </div>
      </div>
      <div className="toast-message" id="toastMessage"></div>
    </>
  );
};

export default NotFoundPage;
