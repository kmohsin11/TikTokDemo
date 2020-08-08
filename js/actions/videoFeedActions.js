import * as types from '../constants/actionTypes';

export const loadInitialVideos = (data) => {
  return {
    type: types.LOAD_INITIAL_VIDEOS,
    videos: data
  }
}