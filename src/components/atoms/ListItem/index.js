import React from 'react';
import {View, Text} from 'react-native';
import ListItemStyles from './ListItemStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = props => {
  const {pasajeros, destino, origen, fecha} = props;
  return (
    <View style={ListItemStyles.container}>
      <View style={ListItemStyles.header}>
        <View style={ListItemStyles.item}>
          {origen && (
            <View>
              <Text style={ListItemStyles.otitle}>BEG</Text>
              <Text>{origen}</Text>
            </View>
          )}
        </View>
        <View style={ListItemStyles.icono}>
          <Icon name="airplane" size={20} color="#7B90FC" />
        </View>
        <View style={ListItemStyles.item}>
          {destino && (
            <View>
              <Text style={ListItemStyles.dtitle}>AMS</Text>
              <Text>{destino}</Text>
            </View>
          )}
        </View>
      </View>
      <View style={ListItemStyles.footer}>
        {fecha ? <Text style={ListItemStyles.ftext}>{fecha}</Text> : null}
        {pasajeros ? (
          <Text style={ListItemStyles.ftext}>{pasajeros} passengers</Text>
        ) : null}
      </View>
    </View>
  );
};

export default ListItem;
