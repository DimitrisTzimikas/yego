import {combineReducers} from 'redux';

/* Local Files */
import {vehicles} from './vehicles';

/* Reducers */
const reducers = combineReducers({
  vehicles,
});

export default reducers;
