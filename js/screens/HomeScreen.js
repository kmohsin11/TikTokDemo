import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  render = () => {
    return (
      <View style={{ flex: 1}}>
      </View>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const HomeScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

export default HomeScreen;