import { combineReducers } from 'redux';
import movieListComponentReducer from '../../../components/MovieListComponent/MovieListComponentReducer';
import detailsMoviePageReducer from '../../../pages/DetailsMoviePage/DetailsMoviePageReducer';
import toolbarComponentReducer from '../../../components/ToolbarComponent/ToolbarComponentReducer';

const reducer = combineReducers({
  movieListComponentReducer,
  detailsMoviePageReducer,
  toolbarComponentReducer,
});

export default reducer;
