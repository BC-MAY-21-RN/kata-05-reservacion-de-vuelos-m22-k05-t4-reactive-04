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
    marginBottom: 10,
  },
  or: {
    marginTop: 25,
    textAlign: 'center',
  },
  conditions: {
    bottom: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default FormStyles;
