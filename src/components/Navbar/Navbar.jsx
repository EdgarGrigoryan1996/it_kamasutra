import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "../Friends/Friends";
import { useDispatch, useSelector } from "react-redux";
import { SET_CURRENT_PROFILE } from "../../redux/Reducers/profileReducer";

export default function Navbar({ isAuth, friends }) {
  const dispatch = useDispatch();
  const myProfile = useSelector((state) => {
    return state.profilePage.myProfile;
  });

  return (
    <nav>
      <div>
        <NavLink
          to="/profile/1"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
          onClick={() => {
            dispatch(SET_CURRENT_PROFILE(myProfile));
          }}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
        >
          Users
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/friends"
          className={({ isActive }) =>
            isActive ? `${s.active} ${s.item}` : s.item
          }
        >
          Friends
        </NavLink>
        {isAuth && <Friends friends={friends.slice(0, 3)} size="small" />}
      </div>
    </nav>
  );
}
