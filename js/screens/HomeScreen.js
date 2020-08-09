import React from 'react';
import { View, TouchableHighlight, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { videoFeedSelectors, commentSelectors } from '../selectors';
import { videoFeedActions } from '../actions';
import { VideoFeed } from '../components';
import { videoConstants } from '../constants/assetConstants';
import { screenNames } from '../constants/screenNames';

const styles = StyleSheet.create({
  commentButton: {
    position: 'absolute',
    left: 20,
    bottom: 50,
    backgroundColor: "white"
  }
});

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

  handleCommentsTap = () => {
    this.props.navigation.push(screenNames.comments, {
      videoId: this.state.currentVideoId
    });
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
      this.state.currentVideoId !== nextState.currentVideoId ||
      (this.props.comments(this.state.currentVideoId) || []).length !== (nextProps.comments(nextState.currentVideoId) || []).length
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
        <TouchableHighlight style={styles.commentButton}
                            onPress={this.handleCommentsTap}>
          <View style={{flex: 1, alignItems:'center'}}>
            <Icon name="commenting-o" size={40}/>
            <Text>
              {(this.props.comments(this.state.currentVideoId) || []).length}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    videos: videoFeedSelectors.videoFeed(state),
    comments: (videoId) => commentSelectors.getComments(state, videoId)    
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