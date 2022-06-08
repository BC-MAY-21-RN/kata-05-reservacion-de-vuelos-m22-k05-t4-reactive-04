import React from 'react';
import {Modal, ActivityIndicator, Text, View} from 'react-native';
import LoadingIndicatorStyles from './LoadingStyles';

const LoadingIndicator = props => {
  const {visible, text} = props;
  return (
    <Modal visible={visible} transparent={true}>
      <View style={LoadingIndicatorStyles.container}>
        <View style={LoadingIndicatorStyles.background}>
          <ActivityIndicator color="#5D60F0" size={50} />
          <Text style={LoadingIndicatorStyles.message}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};
export default LoadingIndicator;
