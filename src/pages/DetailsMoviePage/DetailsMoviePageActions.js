export const SET_DETAILS_DATA = 'SET_DETAILS_DATA';

export const setDetailsDataAction = (movieData) => {
  return {
    type: SET_DETAILS_DATA,
    payload: {
      movieData,
    },
  };
};
