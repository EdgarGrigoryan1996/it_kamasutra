import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { Component } from "react";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (HocComponent) => {
  class WithRedirectContainerComponent extends Component {
    render() {
      if (!this.props.isAuth) return <Navigate to={"/login"} />;
      return <HocComponent {...this.props} />;
    }
  }

  return connect(mapStateToProps)(WithRedirectContainerComponent);
};
