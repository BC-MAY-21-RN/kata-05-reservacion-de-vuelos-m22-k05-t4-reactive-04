import React from 'react';
import {View, Text} from 'react-native';
import Formulario from '../components/organism/Formulario';
import styles from './styles';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sing Up</Text>
      <Formulario />
    </View>
  );
};

export default Register;
