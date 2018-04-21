import React, {Component} from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles';



  
  const ListItem = ({ item, isCompleted, onPress, onLongPress}) => {
    const textDecorationLine = isCompleted ? 'line-through' : null;
    return (
      <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
        <Text style={[{ textDecorationLine }, styles.title]}>{item.id}. {item.text}</Text>
      </TouchableOpacity>  
    )
  }

export default ListItem;
