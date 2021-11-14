import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

/* Local Files */
import Map from '../components/Map';
import BottomPanel from '../components/BottomPanel';
import {fetchVehicles, getVehicles} from '../redux/ducks/vehicles';

const LandingScreen = () => {
  const dispatch = useDispatch();
  const rehydrated = useSelector((state) => state._persist.rehydrated);
  const vehicles = useSelector((state) => getVehicles(state));

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
        <BottomPanel />
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

LandingScreen.whyDidYouRender = false;

export default LandingScreen;
