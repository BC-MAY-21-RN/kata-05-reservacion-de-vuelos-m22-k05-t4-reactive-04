import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import CheckboxStyle from './checkboxStyle.js';
const Checkbox = props => {
  const [isSelected, setSelection] = useState(false);
  const {textCheckBox} = props;
  return (
    <View style={CheckboxStyle.checkboxContainer}>
      <CheckBox value={isSelected} onValueChange={setSelection} />
      <Text style={CheckboxStyle.label}>{textCheckBox}</Text>
    </View>
  );
};

export default Checkbox;
