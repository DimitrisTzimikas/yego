import {combineReducers} from 'redux';

/* Local Files */
import {vehicles} from './vehicles';
import {user} from './user';

/* Reducers */
const reducers = combineReducers({
  vehicles,
  user,
});

export default reducers;
