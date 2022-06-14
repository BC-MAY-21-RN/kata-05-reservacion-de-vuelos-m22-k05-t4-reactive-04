import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import IconButton from '../components/atoms/IconButton';
import CustomButton from '../components/atoms/CustomButton';
import ListItem from '../components/atoms/ListItem';

const Passengers = ({route, navigation}) => {
  const {origen, destino, fecha} = route.params;
  const [disable, setDisable] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.TopBar}>
        <IconButton name="left" size={30} onPress={() => navigation.goBack()} />
      </View>
      <ListItem origen={origen} destino={destino} fecha={fecha} />
      <Text style={styles.title2}> How many passengers? </Text>
      <View style={styles.footer2}>
        <CustomButton
          title="Next"
          disabel={disable}
          onPress={() => {
            navigation.navigate('Date', {
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

export default Passengers;
