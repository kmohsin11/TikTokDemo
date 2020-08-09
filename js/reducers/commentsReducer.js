import * as types from '../constants/actionTypes';

const initialState = {};

const comments = (state=initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      const videoId = action.videoId;
      if (!state[videoId]) {
        state[videoId] = [];
      }
      const comments = state[videoId];
      var updatedComments = {};
      updatedComments[videoId] = [
        ...comments, 
        {
          id: comments.reduce((maxId, comment) => Math.max(comment.id, maxId), -1) + 1,
          text: action.text
        }
      ];
      return {...state, ...updatedComments};
    default:
      return state;
  }
};

export default comments;
