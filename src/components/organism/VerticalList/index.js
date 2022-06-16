import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../../atoms/ListItem';
import VerticalStyles from './VerticalStyles';

const VerticalList = props => {
  const {data} = props;
  const renderItem = ({item, index}) => (
    <ListItem
      id={index}
      pasajeros={item.passengers}
      destino={item.destination.aerolinea}
      origen={item.origin.aerolinea}
      fecha={item.date}
    />
  );
  return (
    <View style={VerticalStyles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default VerticalList;
