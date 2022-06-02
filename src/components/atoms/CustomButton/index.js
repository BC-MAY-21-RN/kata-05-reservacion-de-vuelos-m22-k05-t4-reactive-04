import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';
import CustomButtonStyles from './CustomButtonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomButton = props => {
  const {title, valid, onPress, google} = props;
  return (
    <TouchableOpacity
      style={CustomButtonStyles.TouchableOpacity}
      enabled={valid}
      onPress={onPress}>
      {google ? (
        <Image
          style={CustomButtonStyles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_960_720.png',
          }}
        />
      ) : null}
      <Text style={CustomButtonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
