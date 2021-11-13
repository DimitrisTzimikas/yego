import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import MapView, {MAP_TYPES} from 'react-native-maps';

/* Local Files */
import VehicleStatus from './VehicleStatus';
import {getVehicle} from '../redux/ducks/vehicles';

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
  const vehicles = useSelector((state) => getVehicle(state));

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
                title={vehicle.name}
                key={vehicle.id}
                description={''}>
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

export default Map;
