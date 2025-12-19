import React, { useEffect } from 'react';
import MovieListComponent from '../components/MovieListComponent/MovieListComponent';
import { useDispatch } from 'react-redux';
import { changeToolbarLocationAction } from '../components/ToolbarComponent/ToolbarComponentActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const setAtHome = () => {
    dispatch(changeToolbarLocationAction('listing'));
  };

  useEffect(() => {
    setAtHome();
  }, []);
  return (
    <>
      <MovieListComponent />
    </>
  );
};

export default HomePage;
