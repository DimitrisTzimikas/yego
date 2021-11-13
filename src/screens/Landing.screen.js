import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

/* Local Files */
import Map from '../components/Map';
import {fetchVehicles, getVehicle} from '../redux/ducks/vehicles';

const LandingScreen = () => {
  const dispatch = useDispatch();
  const rehydrated = useSelector((state) => state._persist.rehydrated);
  const vehicles = useSelector((state) => getVehicle(state));

  useEffect(() => {
    if (rehydrated && vehicles) {
      return;
    }

    dispatch(fetchVehicles());
  }, [dispatch, rehydrated, vehicles]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Map />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default LandingScreen;
