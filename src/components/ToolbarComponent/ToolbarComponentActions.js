export const TOOLBAR_LOCATION = 'TOOLBAR_LOCATION';

export const changeToolbarLocationAction = (location) => {
  return {
    type: TOOLBAR_LOCATION,
    payload: {
      location,
    },
  };
};
