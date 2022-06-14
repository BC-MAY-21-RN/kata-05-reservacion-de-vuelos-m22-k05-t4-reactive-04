import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
  },
  TopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#7B90FC',
  },
  title2: {
    marginTop: 20,
    maxWidth: 300,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  footer: {
    position: 'absolute',
    bottom: 15,
    right: '45%',
  },
  footer2: {
    position: 'absolute',
    bottom: 35,
    right: 10,
    width: '100%',
  },
});

export default styles;
