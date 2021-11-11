import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

/* Local Files */
import Map from "../components/StaticMap";

const LandingScreen = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={styles.container}>
      <Map />
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default LandingScreen;
