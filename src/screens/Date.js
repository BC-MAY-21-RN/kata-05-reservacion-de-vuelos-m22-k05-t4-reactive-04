import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IconButton from '../components/atoms/IconButton';
import CustomButton from '../components/atoms/CustomButton';
import ListItem from '../components/atoms/ListItem';

const Date = ({route, navigation}) => {
  const {origen, destino} = route.params;
  const [disable, setDisable] = useState(false);
  const [fecha, setFecha] = useState();
  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <IconButton name="left" size={30} onPress={() => navigation.goBack()} />
      </View>
      <ListItem origen={origen} destino={destino} />
      <Text style={styles.title2}> Select date </Text>
      <View style={styles.footer2}>
        <CustomButton
          title="Next"
          disabel={disable}
          onPress={() => {
            navigation.navigate('Destination', {
              origen: origen,
              destino: destino,
              fecha: fecha,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Date;
