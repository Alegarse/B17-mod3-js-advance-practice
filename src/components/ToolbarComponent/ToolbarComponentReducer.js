import { TOOLBAR_LOCATION } from './ToolbarComponentActions';

const initialSate = {
  viewMode: 'listing',
};

const toolbarComponentReducer = (state = initialSate, action) => {
  switch (action.type) {
    case TOOLBAR_LOCATION:
      return {
        ...state,
        viewMode: action.payload.location,
      };
    default:
      return state;
  }
};

export default toolbarComponentReducer;
