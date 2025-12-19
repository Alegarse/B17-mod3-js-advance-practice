import React from 'react';
import { apiMoviesConfig } from '../../core/services/api/apiMoviesFetch';
import { useNavigate } from 'react-router-dom';

const MovieCardComponent = (props) => {
  const { dataMovie } = props;
  const navigate = useNavigate();

  const posterSrc = dataMovie.poster_path
    ? `${apiMoviesConfig.POSTER_BASE_URL}${dataMovie.poster_path}`
    : `/no_cover.png`;

  const goToDetailsMoviePage = (idMovie) => {
    navigate(`/details/${idMovie}`);
  };

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={posterSrc}
        onClick={() => goToDetailsMoviePage(dataMovie.id)}
      />
      <div className="movie-info">
        <h4 className="movie-title">{dataMovie.title}</h4>
        <p className="movie-data">{`Valoración: ${dataMovie.vote_average.toFixed(
          1
        )} | Año: ${new Date(dataMovie.release_date).getFullYear()}`}</p>
        <div className="movie-overview-container">
          <p className="movie-overview">{dataMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardComponent;
