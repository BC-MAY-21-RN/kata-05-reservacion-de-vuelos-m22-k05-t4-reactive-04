import React, {useState} from 'react';
import {TextInput, View, Text, Pressable} from 'react-native';
import InputStyles from './InputStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Input = props => {
  const {onChangeText, onChangeBlur, value, title, secure} = props;
  const [isSecure, setSecure] = useState(secure);
  const handleSecurity = () => {
    setSecure(!isSecure);
  };
  return (
    <View>
      <Text style={InputStyles.title}>{title}</Text>
      <TextInput
        style={value ? InputStyles.input2 : InputStyles.input}
        onChangeText={onChangeText}
        onBlur={onChangeBlur}
        value={value}
        secureTextEntry={isSecure}
      />
      {secure ? (
        <Pressable style={InputStyles.icono} onPress={handleSecurity}>
          <Icon
            name={isSecure ? 'eye' : 'eye-slash'}
            size={25}
            color={value ? '#0097FF' : 'grey'}
          />
        </Pressable>
      ) : null}
    </View>
  );
};

export default Input;
