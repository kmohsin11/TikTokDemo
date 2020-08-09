import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Comment extends React.Component {
  render() {
    const content = this.props.data.text
    return (
      <View style={{flex: 1}}>
        <View style={styles.contentContainer}>
            <Text style={styles.text}>{content}</Text>
        </View>
      </View>
    );
  }

}

export default Comment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: '#EEE',
    padding: 10,
    paddingTop: 15,
  },
  text: {
    color: '#000',
    fontFamily: 'Avenir',
    fontSize: 18,
  },
});