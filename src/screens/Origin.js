import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../components/atoms/Header';
import CustomButton from '../components/atoms/CustomButton';
import InputSelect from '../components/atoms/InputSelect';

const Origin = ({navigation}) => {
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
      <Text style={styles.title2}> Where are you now? </Text>
      <InputSelect data={countries} onSelected={handleSelect} />
      <View style={styles.footer2}>
        <CustomButton
          title="Next"
          disabel={disable}
          onPress={() => {
            navigation.navigate('Destination', {
              origen: location,
            });
          }}
        />
      </View>
    </View>
  );
};

export default Origin;
