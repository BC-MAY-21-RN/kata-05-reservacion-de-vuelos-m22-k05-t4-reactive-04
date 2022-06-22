import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconButton from '../IconButton';

const Header = props => {
  const {navigation} = props;
  return (
    <View style={styles.TopBar}>
      <IconButton name="left" size={30} onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  TopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Header;
