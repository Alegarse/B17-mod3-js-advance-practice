import {
  GET_MOVIES,
  SET_LIST_TYPE,
  SET_VIEW_TYPE,
} from './MovieListComponentActions';

const initialState = {
  moviesData: [],
  listSelected: 'upcoming',
  viewType: 'movie-grid',
};

const movieListComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesData: action.payload.dataMovies,
      };
    case SET_LIST_TYPE:
      return {
        ...state,
        listSelected: action.payload.listType,
      };
    case SET_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload.viewType,
      };
    default:
      return state;
  }
};

export default movieListComponentReducer;
