import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataMoviesFetch } from '../../core/services/api/apiMoviesFetch';
import MovieCardComponent from '../MovieCardComponent/MovieCardComponent';
import ToolbarComponent from '../ToolbarComponent/ToolbarComponent';

const MovieListComponent = () => {
  const dispatch = useDispatch();
  const { moviesData, listSelected, viewType } = useSelector(
    (state) => state.movieListComponentReducer
  );

  useEffect(() => {
    getDataMoviesFetch(dispatch, listSelected);
  }, [dispatch, listSelected]);
  return (
    <>
      <ToolbarComponent />
      <div className="movies-container">
        {!moviesData ? (
          <h2>Cargando peliculas...</h2>
        ) : (
          <div className={viewType}>
            {moviesData.map((movie, idx) => (
              <MovieCardComponent key={idx} dataMovie={movie} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MovieListComponent;
