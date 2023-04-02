import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import friendsReducer from "./Reducers/friendsReducer";
import dialogsReducer from "./Reducers/dialogsReducer";
import profileReducer from "./Reducers/profileReducer";
import newsReducer from "./Reducers/newsReducer";
import usersReducer from "./Reducers/usersReducer";
import authReducer from "./Reducers/authReducer";
import thunkMiddleware from "redux-thunk";
import initializeReducer from "./Reducers/initializeReducer";

const reducers = combineReducers({
  initialized: initializeReducer,
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  newsPage: newsReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
