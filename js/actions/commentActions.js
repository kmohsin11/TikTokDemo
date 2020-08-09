import * as types from '../constants/actionTypes';

export const addComment = (text, videoId) => {
  return {
    type: types.ADD_COMMENT,
    text: text,
    videoId: videoId
  }
}