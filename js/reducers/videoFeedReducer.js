import * as types from '../constants/actionTypes';
import { videoConstants } from '../constants/assetConstants';

const initialState = [];

const videoFeed = (state=initialState, action) => {
  switch (action.type) {
    case types.LOAD_INITIAL_VIDEOS:
      return action.videos;
    case types.UPDATE_VIDEO_FEED:
      var videos = state;
      if (!videos) {
        videos = [];
      }
      let videoId = videos.reduce((maxId, video) => Math.max(video.id, maxId), -1) + 1
      let videoPath = "video_"+(videoId%Object.keys(videoConstants).length)
      const newVideo = {
        id: videoId,
        path: videoPath
      };
      return [
        ...videos,
        newVideo
      ];
    default:
      return state;
  }  
};

export default videoFeed;
