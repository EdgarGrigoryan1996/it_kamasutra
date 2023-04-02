import React, { useState } from "react";
import s from "./Login.module.css";
import { authAPI } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../../redux/Reducers/authReducer";
import { Navigate } from "react-router-dom";

function Login(props) {
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    value: "",
    visited: false,
  });
  const [pass, setPass] = useState({
    value: "",
    visited: false,
  });
  const [remember, setRemember] = useState(false);

  const handleLogin = (data) => {
    authAPI.loginInService(data).then((data) => {
      console.log(data);
      if (data.resultCode === 0) {
        alert("Success");
        dispatch(setAuthUser());
        <Navigate to={"/"} />;
      }
    });
  };
  if (isAuth) {
    return <Navigate to={"/"} />;
  } else {
    return (
      <div className={s.wrapper}>
        <div className={s.block}>
          <div>
            <h2>Login</h2>
          </div>
          <div className={s.form}>
            <form action="">
              <div className={s.login}>
                <input
                  onBlur={() => {
                    setLogin({
                      ...login,
                      visited: true,
                    });
                  }}
                  className={login.visited && login.value === "" && s.required}
                  type="text"
                  placeholder={"Login"}
                  value={login.value}
                  onChange={(e) => {
                    setLogin({
                      value: e.target.value,
                      visited: true,
                    });
                  }}
                />
              </div>
              <div className={s.password}>
                <input
                  className={
                    pass.visited && pass.value === "" ? s.required : ""
                  }
                  onBlur={() => {
                    setPass({
                      ...pass,
                      visited: true,
                    });
                  }}
                  type="password"
                  placeholder={"Password"}
                  value={pass.value}
                  onChange={(e) => {
                    setPass({
                      value: e.target.value,
                      visited: true,
                    });
                  }}
                />
              </div>
              <div className={s.remember}>
                <input
                  id={"remember"}
                  type="checkbox"
                  checked={remember}
                  onChange={() => {
                    setRemember(!remember);
                  }}
                />
                <label htmlFor="remember"> Remember me</label>{" "}
              </div>
              <div className={s.submit}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin({
                      email: login.value,
                      password: pass.value,
                      rememberMe: remember,
                    });
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
