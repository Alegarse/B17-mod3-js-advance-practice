import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setListTypeAction,
  setViewTypeAction,
} from '../MovieListComponent/MovieListComponentActions';
import { changeToolbarLocationAction } from './ToolbarComponentActions';
import { useNavigate } from 'react-router-dom';
import { setDetailsDataAction } from '../../pages/DetailsMoviePage/DetailsMoviePageActions';

const ToolbarComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { viewMode } = useSelector((state) => state.toolbarComponentReducer);

  const viewTypeHandler = (vType) => {
    dispatch(setViewTypeAction(vType));
  };

  const selectHandler = (listType) => {
    dispatch(setListTypeAction(listType));
  };

  const backToHome = () => {
    dispatch(changeToolbarLocationAction('listing'));
    dispatch(setDetailsDataAction(undefined));
    navigate('/');
  };

  return (
    <div className="movie-toolbar-wrapper fixed-top d-flex">
      <div className="container toolbar">
        <div className="view-selectors">
          {viewMode === 'listing' ? (
            <>
              <button
                className="grid-view"
                onClick={() => viewTypeHandler('movie-grid')}
              ></button>
              <button
                className="list-view"
                onClick={() => viewTypeHandler('movie-list')}
              ></button>
            </>
          ) : (
            <button className="back-main" onClick={backToHome}></button>
          )}
        </div>

        {viewMode === 'listing' && (
          <select
            className="movies-categories form-select"
            defaultValue={'upcoming'}
            onChange={(e) => selectHandler(e.target.value)}
          >
            <option value="popular">Populares</option>
            <option value="top_rated">Más valoradas</option>
            <option value="upcoming">Proximamente</option>
            <option value="now_playing">En cartelera</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default ToolbarComponent;
