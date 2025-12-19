import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  apiMoviesConfig,
  getDataMoviByIdFetch,
} from '../../core/services/api/apiMoviesFetch';
import ToolbarComponent from '../../components/ToolbarComponent/ToolbarComponent';
import { changeToolbarLocationAction } from '../../components/ToolbarComponent/ToolbarComponentActions';

const DetailsMoviePage = () => {
  const dispatch = useDispatch();
  const { idMovie } = useParams();
  const { movieData } = useSelector((state) => state.detailsMoviePageReducer);

  const setAtDetails = () => {
    dispatch(changeToolbarLocationAction('details'));
  };

  const posterSrc = movieData?.poster_path
    ? `${apiMoviesConfig.POSTER_BASE_URL}${movieData?.poster_path}`
    : '/no_cover.png';

  useEffect(() => {
    setAtDetails();
  }, []);

  useEffect(() => {
    getDataMoviByIdFetch(dispatch, idMovie);
  }, [dispatch, idMovie]);
  return (
    <>
      <ToolbarComponent />
      {!movieData ? (
        <h2>Cargando datos...</h2>
      ) : (
        <div className=" details-container">
          <div
            className="outside-details d-flex"
            style={{
              backgroundImage: `url(${apiMoviesConfig.BACKDROP_BASE_URL}${movieData?.backdrop_path})`,
            }}
          >
            <div className="movie-details container">
              <img className="movie-poster" src={posterSrc} alt="" />
              <div className="movie-info">
                <h4 className="movie-title">{movieData?.title}</h4>
                <p className="movie-data">
                  {movieData?.vote_average} | {movieData?.release_date}
                </p>
                <div className="movie-overview-container">
                  <p className="movie-overview-title">Sinopsis:</p>
                  <p className="movie-overview">{movieData?.overview}</p>
                </div>
              </div>
            </div>
            <div className="movie-backdrop-overlay"></div>
          </div>
          <div className="cast-container container">
            <p className="cast-container-title">Reparto</p>
            <div className="casts-elements">
              {movieData.credits.cast.map((cast, idx) => {
                const castSrc = cast?.profile_path
                  ? `${apiMoviesConfig.PHOTO_BASE_URL}${cast?.profile_path}`
                  : '/empty_char.png';
                return (
                  <div key={idx} className="cast-card">
                    <img src={castSrc} className="cast-img" />
                    <p className="cast-name">{cast.original_name}</p>
                    <p className="cast-charname">{cast.character}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="cast-container container">
            <p className="cast-container-title">Equipo técnico</p>
            <div className="casts-elements">
              {movieData.credits.crew.map((crew, idx) => {
                const crewSrc = crew?.profile_path
                  ? `${apiMoviesConfig.PHOTO_BASE_URL}${crew?.profile_path}`
                  : '/empty_char.png';
                return (
                  <div key={idx} className="cast-card">
                    <img src={crewSrc} className="cast-img" />
                    <p className="cast-name">{crew.original_name}</p>
                    <p className="cast-charname">{crew.job}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailsMoviePage;
