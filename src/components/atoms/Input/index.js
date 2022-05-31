import React from 'react';
import {TextInput, View, Text} from 'react-native';
import InputStyles from './InputStyles';

const Input = props => {
  const {onChangeText, onChangeBlur, value, title, secure} = props;
  return (
    <View>
      <Text style={InputStyles.title}>{title}</Text>
      <TextInput
        style={InputStyles.input}
        onChangeText={onChangeText}
        onBlur={onChangeBlur}
        value={value}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default Input;
