import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Text} from 'react-native';
import Formulario from '../components/organism/Formulario';
import styles from './styles';

const Register = () => {
  const [useType, setUseType] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sing Up</Text>
      <Formulario />
    </View>
  );
};

export default Register;
