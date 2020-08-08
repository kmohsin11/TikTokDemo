import * as types from '../constants/actionTypes';

export const loadInitialVideos = (data) => {
  return {
    type: types.LOAD_INITIAL_VIDEOS,
    videos: data
  }
}

export const updateVideoFeed = (data) => {
  return {
    type: types.UPDATE_VIDEO_FEED,
    videos: data
  }
}