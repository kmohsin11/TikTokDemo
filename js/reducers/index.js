import { combineReducers } from 'redux'
import videoFeed from './videoFeedReducer'
const rootReducer = combineReducers({
  videoFeed
});

export default rootReducer;