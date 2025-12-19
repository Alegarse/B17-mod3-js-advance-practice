import { getAllMoviesAction } from '../../../components/MovieListComponent/MovieListComponentActions';
import { setDetailsDataAction } from '../../../pages/DetailsMoviePage/DetailsMoviePageActions';

export const apiMoviesConfig = {
  API_KEY: '798c4e985f1601de1b9c61af5c37edcf',
  BASE_URL: 'https://api.themoviedb.org/3/',
  POSTER_BASE_URL: 'http://image.tmdb.org/t/p/w500/',
  BACKDROP_BASE_URL:
    'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces',
  PHOTO_BASE_URL: 'https://www.themoviedb.org/t/p/w138_and_h175_face/',
};

export const getDataMoviesFetch = async (
  dispatch,
  listType = 'upcoming',
  lang = 'es-ES'
) => {
  try {
    const urlDataMovies = `${apiMoviesConfig.BASE_URL}movie/${listType}?api_key=${apiMoviesConfig.API_KEY}&language=${lang}&page=1`;
    const response = await fetch(urlDataMovies);
    if (!response.ok)
      throw new Error('Fallo al obtener datos de películas de TMDB');
    const dataResponse = await response.json();
    dispatch(getAllMoviesAction(dataResponse.results));
  } catch (error) {
    console.log('Error', error.message);
  }
};

export const searchMovieByTitleFetch = async (
  dispatch,
  movieTitle,
  lang = 'es-ES'
) => {
  try {
    const urlDataMovie = `${apiMoviesConfig.BASE_URL}search/movie?query=${movieTitle}&api_key=${apiMoviesConfig.API_KEY}&language=${lang}&page=1`;
    const response = await fetch(urlDataMovie);
    if (!response.ok)
      throw new Error('Fallo al obtener datos de películas de TMDB');
    const dataResponse = await response.json();
    dispatch(getAllMoviesAction(dataResponse.results));
  } catch (error) {
    console.log('Error', error.message);
  }
};

export const getDataMoviByIdFetch = async (
  dispatch,
  idMovie,
  lang = 'es-ES'
) => {
  try {
    const urlDataMovie = `${apiMoviesConfig.BASE_URL}movie/${idMovie}?api_key=${apiMoviesConfig.API_KEY}&language=${lang}&append_to_response=credits`;
    const response = await fetch(urlDataMovie);
    if (!response.ok)
      throw new Error(
        `Fallo al obtener datos de la película con id ${idMovie} de TMDB`
      );
    const dataResponse = await response.json();
    dispatch(setDetailsDataAction(dataResponse));
  } catch (error) {
    console.log('Error', error.message);
  }
};
