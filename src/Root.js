import React from 'react';
import { Provider } from 'react-redux';

/* Local Files */
import configureStore from './redux/configureStore';
import { makeCancelable } from '../static/misc/utils';
import AppContainer from './containers/AppContainer';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.configureStore = makeCancelable(configureStore());
    this.configureStore.promise.then((store) => {
      this.setState({ store });
    }).catch((e) => console.warn("configureStore canceled:", e && e.message ? e.message : e));
  }

  componentWillUnmount() {
    if (this.configureStore) this.configureStore.cancel();
  }

  render() {
    if (this.state.store) {
      return (
        <Provider store={this.state.store}>
          <AppContainer />
        </Provider>
      );
    }
    return null;
  }
}

export default Root;
