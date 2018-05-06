import React, {Component} from 'react';
import { Text, View } from 'react-native';
import styles from './PostStyles';

class Post extends Component {
  render() {
    const { post } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.title_container}>
          Title: <Text style={styles.title}>{post.title}</Text>
        </Text>
        <Text style={styles.body}>{post.body}</Text>
      </View>
    )
  }
}

export default Post
