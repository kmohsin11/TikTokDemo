import React from 'react';
import { View, FlatList } from 'react-native';
import Video from 'react-native-video';
import ViewPager from '@react-native-community/viewpager';

import { videoConstants } from '../constants/assetConstants'

class VideoFeed extends React.Component {
  render = () => {
    return (
      <View style={{flex: 1}}>
      { this.props.videos.length > 0 ?
      <ViewPager style={{flex: 1}}
                 orientation='vertical'
                 initialPage={0}>
        {
          this.props.videos.map((data) => (
            <View key={data.id}>
                <Video source={videoConstants[data.path]}
                         style={{flex: 1}}
                         resizeMode="cover"
                         repeat={true}>
                </Video>
            </View>
          ))
        }
      </ViewPager> : null
      }
      </View>
    );
  }
};

export default VideoFeed;