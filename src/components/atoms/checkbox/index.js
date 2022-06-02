import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CheckboxStyle from './checkboxStyle.js';
const Checkbox = props => {
  const {textCheckBox, value, name, handleChange} = props;
  return (
    <View style={CheckboxStyle.checkboxContainer}>
      <CheckBox
        name={name}
        value={value}
        onValueChange={handleChange}
        tintColors={{true: '#5974f5', false: 'grey'}}
      />
      <Text style={CheckboxStyle.label}>{textCheckBox}</Text>
    </View>
  );
};

export default Checkbox;
