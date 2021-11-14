/*  Types */
export const SET_USER_LOCATION = 'set_user_location';

const initialState = {
  userLocation: null,
};

/*  Reducers */
const user = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: payload,
      };
    default:
      return state;
  }
};

/*  Sync Actions */
const setUserLocation = (payload) => ({type: SET_USER_LOCATION, payload});

/*  Selectors */
const getUserLocation = (state) => state.user.userLocation;

export {user, setUserLocation, getUserLocation};
