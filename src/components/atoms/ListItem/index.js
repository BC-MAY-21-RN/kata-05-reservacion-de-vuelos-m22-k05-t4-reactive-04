import React from 'react';
import {View, Text} from 'react-native';
import ListItemStyles from './ListItemStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = props => {
  const {id, pasajeros, destino, origen, fecha} = props;
  return (
    <View style={ListItemStyles.container}>
      <View style={ListItemStyles.header}>
        <View style={ListItemStyles.item}>
          <Text style={ListItemStyles.otitle}>{origen.aerolineao}</Text>
          <Text>{origen.lugaro}</Text>
        </View>
        <View style={ListItemStyles.icono}>
          <Icon name="airplane" size={20} color="#7B90FC" />
        </View>
        <View style={ListItemStyles.item}>
          <Text style={ListItemStyles.dtitle}>{destino.aerolinead}</Text>
          <Text>{destino.lugard}</Text>
        </View>
      </View>
      <View style={ListItemStyles.footer}>
        <Text style={ListItemStyles.ftext}>{fecha}</Text>
        <Text style={ListItemStyles.ftext}>{pasajeros} passengers</Text>
      </View>
    </View>
  );
};

export default ListItem;
