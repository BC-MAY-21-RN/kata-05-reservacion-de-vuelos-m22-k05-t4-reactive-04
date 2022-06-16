import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IconButton from '../components/atoms/IconButton';
import CustomButton from '../components/atoms/CustomButton';
import ListItem from '../components/atoms/ListItem';
import {addFlightReservation} from '../library/utils/database';
// importar funcion para enviar a firestore  y agregarla al onpress del button
const Finish = ({route, navigation}) => {
  const {origen, destino, fecha, pasajeros} = route.params;
  const flight = {
    origin: {aerolinea: 'BEG', lugar: origen},
    destination: {aerolinea: 'AMS', lugar: destino},
    date: fecha,
    passengers: Number(pasajeros),
  };
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
          onPress={() => addFlightReservation(flight, navigation)}
        />
      </View>
    </View>
  );
};

export default Finish;
