import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import IconButton from '../components/atoms/IconButton';
import VerticalList from '../components/organism/VerticalList';
import data from './Vuelos.json';

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
      <View style={styles.TopBar}>
        <Text style={styles.title}> My flights </Text>
        <IconButton
          name="logout"
          size={30}
          onPress={handleLogout}
          color="#7B90FC"
        />
      </View>
      <View style={styles.footer}>
        <IconButton
          name="pluscircle"
          size={65}
          color="#7B90FC"
          onPress={() => navigation.navigate('Origin')}
        />
      </View>
    </View>
  );
};

export default Home;
