import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../../atoms/ListItem';
import VerticalStyles from './VerticalStyles';

const VerticalList = props => {
  const {data} = props;
  const renderItem = ({item, index}) => (
    <ListItem
      id={item.id}
      pasajeros={item.passengers}
      destino={item.Destino}
      origen={item.Origen}
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
