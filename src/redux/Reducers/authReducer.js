import { authAPI } from "../../api/api";

const SET_AUTH_USER = "SET_AUTH_USER";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        ...action.payload.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserSuccess = (id, email, login) => {
  return {
    type: SET_AUTH_USER,
    payload: {
      data: {
        id,
        email,
        login,
      },
    },
  };
};

// THUNKS

export const setAuthUser = () => {
  return (dispatch) => {
    return authAPI.setAuthUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserSuccess(id, email, login));
      }
      console.log(data);
    });
  };
};
export const setLoginAuthUser = (id, email) => {
  return (dispatch) => {
    authAPI.setAuthUser().then((data) => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        dispatch(setAuthUserSuccess(id, email, login));
      }
      console.log(data);
    });
  };
};

export default authReducer;
