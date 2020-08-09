import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { Comment, CommentInput, KeyboardShift} from '../components'
import { commentSelectors } from '../selectors';
import { commentActions } from '../actions';

class Comments extends React.Component {
  
  onSubmit = (text) => {
    this.props.addComment(text, this.props.route.params.videoId)
  }

  render = () => {
    return (
      <View style={{ flex: 1, justifyContent: 'flex-end'}}>
        <FlatList data={this.props.comments}
                  keyExtractor={(item,index)=>index.toString()}
                  renderItem={({item, index})=>(
                      <Comment data={this.props.comments[index]}/>
                  )} 
                  /> 
        <KeyboardShift>
          {()=>(
            <View style={{flex: 1, justifyContent: 'flex-end'}}>                                  
              <CommentInput onSubmit={this.onSubmit}/>
            </View>
          )}
        </KeyboardShift>
      </View>
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    comments: commentSelectors.getComments(state, props.route.params.videoId)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (text, videoId) => dispatch(commentActions.addComment(text, videoId))
  };
};

const CommentScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export default CommentScreen;