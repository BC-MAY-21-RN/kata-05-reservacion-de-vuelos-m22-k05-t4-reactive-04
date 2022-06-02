import {StyleSheet} from 'react-native';

const FormStyles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  or: {
    marginTop: 25,
    textAlign: 'center',
  },
  conditions: {
    bottom: 12,
    marginBottom: 10,
  },
});

export default FormStyles;
