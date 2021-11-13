import React from 'react';
import {StyleSheet, Image} from 'react-native';

const VehicleStatus = ({status}) => {
  const StatusImage = () => {
    switch (status) {
      case 0:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_avail.png')}
          />
        );
      case 1:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_booked.png')}
          />
        );
      case 2:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_alert.png')}
          />
        );
      case 3:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_alert.png')}
          />
        );
      case 4:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_alert.png')}
          />
        );
      case 5:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_disabled.png')}
          />
        );
      case 6:
        return (
          <Image
            style={styles.marker}
            source={require('../assets/markers/iconscooter_alert.png')}
          />
        );
    }
  };

  return <StatusImage />;
};

const styles = StyleSheet.create({
  marker: {
    width: 50,
    height: 50,
  },
});

export default VehicleStatus;
