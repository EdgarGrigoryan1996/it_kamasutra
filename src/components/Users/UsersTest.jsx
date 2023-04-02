import s from "./Users.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import User from "./User";
import { setUsersAC } from "../../redux/Reducers/usersReducer";

const UsersTest = () => {
  const users = useSelector((state) => {
    return state.usersPage.users;
  });
  const dispatch = useDispatch();
  if (users.length === 0) {
    console.log("test");
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        dispatch(setUsersAC(response.data.items));
      });
  }
  return (
    <div className={s.usersWrapper}>
      <div className={s.title}>Users</div>
      <div className={s.usersBlock}>
        {users.map((user) => (
          <User key={user.id + Math.random()} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersTest;
