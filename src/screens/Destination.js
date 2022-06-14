import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IconButton from '../components/atoms/IconButton';

const Destination = ({route, navigation}) => {
  const {origen} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <IconButton name="left" size={30} onPress={() => navigation.goBack()} />
      </View>
      <Text style={styles.title2}> Where will you be flying to? {origen} </Text>
    </View>
  );
};

export default Destination;
