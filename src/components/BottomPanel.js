import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

/* Local Files */
import {getVehicle} from '../redux/ducks/vehicles';
import {getDistanceFromLatLonInKm} from '../utils/utils';
import {getUserLocation} from '../redux/ducks/user';

const BottomPanel = () => {
  const vehicle = useSelector((state) => getVehicle(state));
  const userLocation = useSelector((state) => getUserLocation(state));

  const batteryPercentage = () => {
    if (vehicle?.battery) {
      return vehicle?.battery / 100;
    }

    return 1;
  };

  return (
    <View style={styles.container}>
      <Text>Title: {vehicle?.name}</Text>
      <Text>Battery: {vehicle?.battery}</Text>
      <View style={styles.progressBar}>
        <View
          style={[styles.progressBarForeground, {flex: batteryPercentage()}]}
        />
      </View>
      <Text>
        Distance:
        {` ${getDistanceFromLatLonInKm(
          vehicle?.lat,
          vehicle?.lng,
          userLocation?.lat,
          userLocation?.lng,
        )} km`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    height: 100,
    width: '100%',
    bottom: 0,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  progressBar: {
    height: 10,
    width: '90%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  progressBarForeground: {
    backgroundColor: 'green',
    flex: 1,
  },
});

export default BottomPanel;
