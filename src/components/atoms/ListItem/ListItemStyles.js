import {StyleSheet} from 'react-native';

const ListItemStyles = StyleSheet.create({
  container: {},
  header: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#DADADA',
  },
  item: {
    flexDirection: 'column',
  },
  otitle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
  },
  dtitle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: 'black',
    textAlign: 'right',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 5,
    borderBottomWidth: 1.5,
    borderBottomColor: 'black',
  },
  icono: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  ftext: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 15,
  },
});

export default ListItemStyles;
