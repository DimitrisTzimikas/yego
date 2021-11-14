import React, {useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MapView, {MAP_TYPES} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

/* Local Files */
import VehicleStatus from './VehicleStatus';
import {getVehicles, selectedVehicle} from '../redux/ducks/vehicles';
import {setUserLocation} from '../redux/ducks/user';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 41.384502;
const LONGITUDE = 2.154943;
const LATITUDE_DELTA = 0.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
  const region = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  };
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => getVehicles(state));

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        dispatch(
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }),
        );
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, [dispatch]);

  const onMarkerPress = (vehicle) => {
    if (vehicle.status === 0) {
      dispatch(selectedVehicle(vehicle));
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType={MAP_TYPES.STANDARD}
        initialRegion={region}
        showsUserLocation={true}
        showsMyLocationButton={true}
        scrollEnabled>
        {vehicles &&
          vehicles.map((vehicle) => {
            return (
              <MapView.Marker
                coordinate={{latitude: vehicle.lat, longitude: vehicle.lng}}
                onPress={() => onMarkerPress(vehicle)}
                key={vehicle.id}>
                <VehicleStatus status={vehicle.status} />
              </MapView.Marker>
            );
          })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

Map.whyDidYouRender = false;

export default Map;
