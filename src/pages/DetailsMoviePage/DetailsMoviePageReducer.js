import { SET_DETAILS_DATA } from './DetailsMoviePageActions';

const initialState = {
  movieData: undefined,
};

const detailsMoviePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS_DATA:
      return {
        ...state,
        movieData: action.payload.movieData,
      };
    default:
      return state;
  }
};

export default detailsMoviePageReducer;
