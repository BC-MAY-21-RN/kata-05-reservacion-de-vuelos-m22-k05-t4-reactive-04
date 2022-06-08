import React from 'react';
import {View, Text, Button} from 'react-native';
import Formulario from '../components/organism/Formulario';
import styles from './styles';

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Formulario navigation={navigation} />
    </View>
  );
};

export default Register;
