import s from "./Users.module.css";
import { useDispatch } from "react-redux";
import userImg from "../../assets/images/noImg.png";
import { NavLink } from "react-router-dom";
import { SET_PROFILE_ID } from "../../redux/Reducers/profileReducer";

const User = ({ user, follow, unfollow, disabledButtons }) => {
  console.log(
    disabledButtons.some((userId) => {
      return userId === user.id;
    })
  );
  const dispatch = useDispatch();
  // const follow = (userId) => {
  //   dispatch(followAC(userId));
  // };
  // const unfollow = (userId) => {
  //   dispatch(unfollowAC(userId));
  // };
  console.log(disabledButtons);
  return (
    <div className={s.userWrapper}>
      <div className={s.userImgBlock}>
        <div className={s.imgBlock}>
          <NavLink
            to={`/profile/${user.id}`}
            onClick={() => {
              dispatch(SET_PROFILE_ID(user.id));
            }}
          >
            <img
              src={user.photos.small ? user.photos.small : userImg}
              alt="Avatar"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              className={
                s.btn +
                " " +
                s.btnDanger +
                " " +
                (disabledButtons.some((userId) => {
                  return userId === user.id;
                })
                  ? s.disabled
                  : "")
              }
              onClick={() => {
                unfollow(user.id);
              }}
              disabled={disabledButtons.some((userId) => {
                return userId === user.id;
              })}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={
                s.btn +
                " " +
                s.btnSuccess +
                " " +
                (disabledButtons.some((userId) => {
                  return userId === user.id;
                })
                  ? s.disabled
                  : "")
              }
              onClick={() => {
                follow(user.id);
              }}
              disabled={disabledButtons.some((userId) => {
                return userId === user.id;
              })}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.userInfo}>
        <div className={s.userInfoBlock}>
          <div>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
          </div>
          <div>
            <pre>
              {"user.location.country"}
              <br />
              {"user.location.city"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
