import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import CustomButtonStyles from './CustomButtonStyles';

const CustomButton = props => {
  const {title, valid, onPress} = props;

  return (
    <TouchableOpacity
      style={CustomButtonStyles.TouchableOpacity}
      enabled={valid}
      onPress={onPress}>
      <Text style={CustomButtonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
