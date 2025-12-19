export const GET_MOVIES = 'GET_MOVIES';
export const SET_LIST_TYPE = 'SET_LIST_TYPE';
export const SET_VIEW_TYPE = 'SET_VIEW_TYPE';

export const getAllMoviesAction = (dataMovies) => {
  return {
    type: GET_MOVIES,
    payload: {
      dataMovies,
    },
  };
};

export const setListTypeAction = (listType) => {
  return {
    type: SET_LIST_TYPE,
    payload: {
      listType,
    },
  };
};

export const setViewTypeAction = (viewType) => {
  return {
    type: SET_VIEW_TYPE,
    payload: {
      viewType,
    },
  };
};
