import { combineReducers } from 'redux'
import videoFeed from './videoFeedReducer'
import comments from './commentsReducer'

const rootReducer = combineReducers({
  videoFeed,
  comments
});

export default rootReducer;