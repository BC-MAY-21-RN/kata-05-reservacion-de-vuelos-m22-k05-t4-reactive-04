import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../components/atoms/Header';
import CustomButton from '../components/atoms/CustomButton';
import ListItem from '../components/atoms/ListItem';
import ScrollPicker from 'react-native-scroll-picker-wheel';

const Passengers = ({route, navigation}) => {
  const {origen, destino, fecha} = route.params;
  const [disable, setDisable] = useState(false);
  const [pasajeros, setPasajeros] = useState();
  const handleSelected = data => {
    setPasajeros(data);
    setDisable(true);
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ListItem origen={origen} destino={destino} fecha={fecha} />
      <Text style={styles.title2}> How many passengers? </Text>
      <View style={styles.picker}>
        <ScrollPicker
          dataSource={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
          selectedIndex={0}
          onValueChange={handleSelected}
          wrapperHeight={60}
          wrapperWidth={200}
          wrapperBackground={'transparent'}
          itemHeight={60}
          highlightColor="#7B90FC"
          highlightBorderWidth={2}
          itemTextStyle={{color: 'grey'}}
          activeItemTextStyle={{color: '#7B90FC', fontSize: 20}}
        />
      </View>
      <View style={styles.footer2}>
        <CustomButton
          title="Next"
          disabel={disable}
          onPress={() => {
            navigation.navigate('Finish', {
              origen: origen,
              destino: destino,
              fecha: fecha,
              pasajeros: pasajeros,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Passengers;
