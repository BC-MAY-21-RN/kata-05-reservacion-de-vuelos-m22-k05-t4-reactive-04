import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IconButton from '../components/atoms/IconButton';
import CustomButton from '../components/atoms/CustomButton';
import ListItem from '../components/atoms/ListItem';
import ScrollPicker from 'react-native-scroll-picker-wheel';

const Finish = ({route, navigation}) => {
  const {origen, destino, fecha, pasajeros} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <IconButton name="left" size={30} onPress={() => navigation.goBack()} />
      </View>
      <ListItem
        origen={origen}
        destino={destino}
        fecha={fecha}
        pasajeros={pasajeros}
      />
      <Text style={styles.title2}> Your request was received. </Text>
      <View style={styles.footer2}>
        <CustomButton
          title="Finish"
          disabel={true}
          onPress={() => {
            console.log('hola');
          }}
        />
      </View>
    </View>
  );
};

export default Finish;
