import { setAuthUser } from "./authReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initialState = false;

const initializeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return true;
    default:
      return state;
  }
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(setAuthUser());
    promise.then(() => {
      dispatch(setInitialized());
    });
  };
};

export const setInitialized = () => {
  return {
    type: SET_INITIALIZED,
  };
};

export default initializeReducer;
