import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_PROFILE } from "../../redux/Reducers/profileReducer";

export default function Header(props) {
  const myProfile = useSelector((state) => {
    return state.profilePage.myProfile;
  });
  const dispatch = useDispatch();
  return (
    <header className={s.header}>
      <div>
        <NavLink
          to={"/profile/1"}
          onClick={() => {
            dispatch(SET_CURRENT_PROFILE(myProfile));
          }}
        >
          <img
            src="https://media.istockphoto.com/vectors/feather-pen-and-planet-logo-combination-vector-id1352770685?k=20&m=1352770685&s=612x612&w=0&h=JRXqHjKYyX0tKls28FbRJq6TehWLkm7RXqwPc0g8uYY="
            alt=""
          />
        </NavLink>
      </div>

      <div>
        {props.isAuth ? (
          <div>
            <div className={s.login}>{props.login}</div>
          </div>
        ) : (
          <div>
            <NavLink to={"/login"}>
              <button>Login</button>
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
