import * as types from '../constants/actionTypes';

const initialState = [];

const videoFeed = (state=initialState, action) => {
  switch (action.type) {
    case types.LOAD_INITIAL_VIDEOS:
      return action.videos;
    default:
      return state;
  }  
};

export default videoFeed;
