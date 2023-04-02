import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import NotFound from "./components/NotFound/NotFound";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import { Component } from "react";
import { connect } from "react-redux";
import { getInitialized } from "./selectors/initializeSelectors/initializeSelectors";
import Preloader from "./components/global components/Preloader/Preloader";
import { initializeApp } from "./redux/Reducers/initializeReducer";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    let { state, news, dispatch } = this.props;
    if (!this.props.initialized) {
      return <Preloader />;
    } else {
      return (
        <BrowserRouter>
          <div className="app-wrapper">
            <HeaderContainer />
            <div className="nav_content">
              <Navbar
                isAuth={state.auth.isAuth}
                friends={state.friendsPage.friends}
              />
              <div className="content-wrapper">
                <Routes>
                  <Route
                    path="/dialogs/*"
                    element={
                      <DialogsContainer
                        state={state.dialogsPage}
                        dispatch={dispatch}
                      />
                    }
                  />
                  <Route
                    path="/profile/:userId"
                    element={
                      <ProfileContainer
                        state={state.profilePage}
                        dispatch={dispatch}
                      />
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <ProfileContainer
                        state={state.profilePage}
                        dispatch={dispatch}
                      />
                    }
                  />
                  <Route
                    path="/users"
                    element={
                      <Users state={state.usersPage} dispatch={dispatch} />
                    }
                  />
                  <Route path="/news" element={<News news={news} />} />
                  <Route path="/music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route
                    path="/friends"
                    element={
                      <FriendsContainer friends={state.friendsPage.friends} />
                    }
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  initialized: getInitialized(state),
});

export default connect(mapStateToProps, { initializeApp })(App);
