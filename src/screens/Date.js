import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../components/atoms/Header';
import CustomButton from '../components/atoms/CustomButton';
import ListItem from '../components/atoms/ListItem';
import DatePicker from 'react-native-modern-datepicker';

const Date1 = ({route, navigation}) => {
  const {origen, destino} = route.params;
  const [disable, setDisable] = useState(false);
  const [fecha, setFecha] = useState();
  const [currentDate, setCurrent] = useState();
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    if (date <= 9) {
      setCurrent(year + '-' + month + '-' + '0' + date);
    }
    if (month <= 9) {
      setCurrent(year + '-' + '0' + month + '-' + date);
    } else {
      setCurrent(year + '-' + month + '-' + date);
    }
  }, []);
  const handleDate = date => {
    setFecha(date);
    setDisable(true);
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ListItem origen={origen} destino={destino} />
      <Text style={styles.title2}> Select date </Text>
      {currentDate ? (
        <DatePicker
          options={{
            backgroundColor: 'transparent',
          }}
          current={currentDate}
          minimumDate={currentDate}
          onSelectedChange={handleDate}
          mode="calendar"
          minuteInterval={30}
          style={{borderRadius: 10}}
        />
      ) : null}
      <View style={styles.footer2}>
        <CustomButton
          title="Next"
          disabel={disable}
          onPress={() => {
            navigation.navigate('Passengers', {
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

export default Date1;
