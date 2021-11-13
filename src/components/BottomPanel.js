import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const BottomPanel = () => {
  return (
    <View style={styles.container}>
      <Text>Bottom Panel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 80,
    width: '100%',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BottomPanel;
