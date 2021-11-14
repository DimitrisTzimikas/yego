import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

/* Local Files */
import {store, persistor} from './redux/store';
import LandingScreen from './screens/Landing.screen';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LandingScreen />
      </PersistGate>
    </Provider>
  );
};

export default Root;
