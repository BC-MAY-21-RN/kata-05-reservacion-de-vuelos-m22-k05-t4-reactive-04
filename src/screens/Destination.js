import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../components/atoms/Header';
import CustomButton from '../components/atoms/CustomButton';
import InputSelect from '../components/atoms/InputSelect';
import ListItem from '../components/atoms/ListItem';

const Destination = ({route, navigation}) => {
  const {origen} = route.params;
  const [disable, setDisable] = useState(false);
  const [location, setLocation] = useState();
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];
  const handleSelect = selectedItem => {
    setLocation(selectedItem);
    setDisable(true);
  };
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ListItem origen={origen} />
      <Text style={styles.title2}> Where will you be flying to? </Text>
      <InputSelect data={countries} onSelected={handleSelect} />
      <View style={styles.footer2}>
        <CustomButton
          title="Next"
          disabel={disable}
          onPress={() => {
            navigation.navigate('Date', {
              origen: origen,
              destino: location,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Destination;
