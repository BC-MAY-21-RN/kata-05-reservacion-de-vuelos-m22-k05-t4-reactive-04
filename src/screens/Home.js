import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CustomButton from '../components/atoms/CustomButton';
import auth from '@react-native-firebase/auth';

const Home = ({navigation}) => {
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Register'}],
    });
  };
  return (
    <View style={styles.container}>
      <Text> Home Screen </Text>
      <CustomButton
        title="Cerrar Sesion"
        disabel={true}
        onPress={handleLogout}
      />
    </View>
  );
};

export default Home;
