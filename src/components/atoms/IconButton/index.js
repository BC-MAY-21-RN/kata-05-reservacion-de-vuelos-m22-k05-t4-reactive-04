import React from 'react';
import {Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const IconButton = props => {
  const {onPress, name, size, color} = props;
  return (
    <Pressable onPress={onPress}>
      <Icon name={name} size={size} color={color} />
    </Pressable>
  );
};

export default IconButton;
