import {StyleSheet} from 'react-native';

const CustomButtonStyles = StyleSheet.create({
  TouchableOpacity: {
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 50,
    alignSelf: 'center',
    width: '95%',
    borderRadius: 10,
    marginTop: 25,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    position: 'absolute',
    width: 25,
    height: 25,
    left: 50,
  },
});

export default CustomButtonStyles;
