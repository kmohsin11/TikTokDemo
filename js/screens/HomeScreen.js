import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { videoFeedSelectors } from '../selectors';
import { videoFeedActions } from '../actions';
import { VideoFeed } from '../components';
import { videoConstants } from '../constants/assetConstants';

class Home extends React.Component {

  loadInitialVideos = () => {
    const numberOfInitialVideos = 5;
    var data = [];
    for (i=0; i<numberOfInitialVideos; i++) {
      const path = "video_"+(i%Object.keys(videoConstants).length)
      data.push({
        id: i,
        path: path
      });
    }
    this.props.loadInitialVideos(data);
  };

  updateCurrentVideoId = (id) => {
    this.setState({currentVideoId: id});
  } 

  state = {
    currentVideoId: 0
  }

  componentDidMount = () => {
    this.loadInitialVideos();
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return (
      this.props.videos.length !== nextProps.videos.length ||
      this.state.currentVideoId !== nextState.currentVideoId
    );
  };  

  render = () => {
    return (
      <View style={{ flex: 1}}>
        <VideoFeed videos={this.props.videos} 
                   requestMoreVideos={this.props.requestMoreVideos}
                   currentVideoId={this.state.currentVideoId}
                   updateCurrentVideoId={this.updateCurrentVideoId}                     
                   />        
      </View>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    videos: videoFeedSelectors.videoFeed(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadInitialVideos: (data) => (dispatch(videoFeedActions.loadInitialVideos(data))),
    requestMoreVideos: () => (dispatch(videoFeedActions.updateVideoFeed()))
  };
};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeScreen;