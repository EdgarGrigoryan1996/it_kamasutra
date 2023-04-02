import React, { Component } from "react";
import Header from "./Header";
import { connect } from "react-redux";

class HeaderContainer extends Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = (state) => ({
  login: state.auth.login,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {})(HeaderContainer);
