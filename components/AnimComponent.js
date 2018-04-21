import React, {Component} from 'react';
import { Animated, Text, TouchableOpacity, View, Button } from 'react-native';

export default class AnimComponent extends Component {
  state = {
    opacityAnimated: new Animated.Value(0)
  };

  modifyOpacity = (value) => {
    Animated.timing(
      this.state.opacityAnimated,
      {
        toValue: value,
        duration: this.props.duration,
      }
    ).start();
}

  show = () => {
    this.modifyOpacity(1);
  };

  hide = () => {
    this.modifyOpacity(0);
  };

  render() {
    const { style } = this.props;
    const { opacityAnimated } = this.state;

    return (
      <View>
        <Button
          title='Show'
          onPress={this.show}  
        />
        <Button
          title='Hide'
          onPress={this.hide}  
          />
        <Animated.View style={{...style, opacity: opacityAnimated}}>
          {this.props.children}
        </Animated.View>
      </View>
    )
  }
}
