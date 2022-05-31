import {StyleSheet} from 'react-native';

const CustomButtonStyles = StyleSheet.create({
  TouchableOpacity: {
    justifyContent: 'center',
    backgroundColor: '#5974f5',
    height: 50,
    alignSelf: 'center',
    width: '95%',
    borderRadius: 10,
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CustomButtonStyles;
