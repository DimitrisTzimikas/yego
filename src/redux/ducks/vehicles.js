/* Local Files */
import {url, apiKey} from '../../constants/vehiclesAPI';

/*  Types */
export const FETCH_VEHICLES = 'fetch_vehicles';
export const UPDATE_VEHICLES = 'update_vehicles';
export const ERROR = 'error';

const initialState = {
  vehicles: null,
  error: '',
};

/*  Reducers */
const vehicles = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_VEHICLES:
      return {
        ...state,
        vehicles: payload.slice(0, 100),
      };
    case UPDATE_VEHICLES:
      return {
        ...state,
        vehicles: payload,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

/*  Sync Actions */
const updateVehicles = (payload) => ({type: UPDATE_VEHICLES, payload});

/*  Async Actions */
const fetchVehicles = () => {
  return (dispatch) => {
    return fetch(url, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((payload) => dispatch({type: FETCH_VEHICLES, payload}))
      .catch((error) => dispatch({type: ERROR, payload: error}));
  };
};

/*  Selectors */
const getVehicle = (state) => state.vehicles.vehicles;

export {vehicles, getVehicle, fetchVehicles, updateVehicles};
